// ISU Food Truck Tracker - Connor and Luke

var searchString = new URLSearchParams(window.location.search);
var currTruckID = searchString.get('currTruckID');
// console.log(currTruckID);

if (!currTruckID) {
    alert("No truck selcted");
} else {
    fetch("./data.json").then(response => response.json()).then(allTrucks => loadTrucks(allTrucks));
}


function loadTrucks(allTrucks) {
    // console.log("Trucks:", allTrucks);
    let currTruck = allTrucks.trucks[0];
    for (let i = 0; i < allTrucks.trucks.length; i++) {
        if (allTrucks.trucks[i].truckID == currTruckID) {
            currTruck = allTrucks.trucks[i];
        }
    }

    let name = currTruck.truckName;
    let hoursArray = currTruck.truckHours;
    let imageUrl = currTruck.imageUrl;
    let logoUrl = currTruck.logoUrl;
    let menuArray = currTruck.menu;
    let locationTagsArray = currTruck.locationTags;
    let facebookUrl = currTruck.facebookUrl;


    document.getElementById('truckImage').src = imageUrl;
    document.getElementById('truckImage').alt = `Image of ${name}`;


    document.getElementById('truckName').textContent = name;

    let truckLocationElement = document.getElementById('truckLocation');
    let locStrTmp = "";

    switch (locationTagsArray[0]) {
        case 'carverHall':
            locStrTmp = "Carver Hall";
            break;
        case 'hooverHall':
            locStrTmp = "Hoover Hall";
            break;
        case 'kildeeHall':
            locStrTmp = "Kildee Hall";
            break;
        default:
            break;
    }
    if (locationTagsArray.length > 1) {
        switch (locationTagsArray[1]) {
            case 'carverHall':
                locStrTmp = locStrTmp.concat(" & Carver Hall");
                break;
            case 'hooverHall':
                locStrTmp = locStrTmp.concat(" & Hoover Hall");
                break;
            case 'kildeeHall':
                locStrTmp = locStrTmp.concat(" & Kildee Hall");
                break;
            default:
                break;
        }
    }

    truckLocationElement.textContent = locStrTmp;


    let hoursDiv = document.getElementById('hoursDiv');
    hoursDiv.replaceChildren();


    for (let h = 0; h < hoursArray.length; h++) {
        let hourElement = document.createElement('p');
        hourElement.classList = "card-text hour-item";
        hourElement.textContent = hoursArray[h];
        hoursDiv.appendChild(hourElement);
    }
    
    
    
    // console.log(menuArray);
    
    let menuDiv = document.getElementById("menuCard");
    menuDiv.replaceChildren();
    
    for (let m = 0; m < menuArray.length; m++){
        let menuElement = document.createElement('p');
        menuElement.classList = "card-text menu-item";
        menuElement.textContent = menuArray[m];
        menuDiv.appendChild(menuElement);
    }



    console.log(facebookUrl);
    // TODO - Does this work??
    document.getElementById('facebookFeed').innerHTML = `
        <div class="fb-page" data-href="${facebookUrl}"
            data-tabs="timeline" data-height="" data-small-header="true"
            data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"
            style="display: flex; justify-content: center;">
            <!-- style above centers the facebook part to be in the center of the div -->
            <blockquote cite="${facebookUrl}"
                class="fb-xfbml-parse-ignore"><a
                    href="${facebookUrl}">${name}</a>
            </blockquote>
        </div>
    `;


    document.getElementById('footerLogo').src = logoUrl;
    document.getElementById('footerLogo').alt = `Logo for ${name}`;



    function footerInfo() {
        let i = 1;
        // console.log(`footerInfo${i}`)
        // console.log(currTruck.otherInfo[i])
        for (let str of currTruck.otherInfo) {
            document.getElementById(`footerInfo${i}`).innerHTML = str;
            i++;
        }
    }



    footerInfo();
}