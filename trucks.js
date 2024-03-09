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

    console.log("name",name);
    console.log("hoursArray", hoursArray);
    console.log("imageUrl", imageUrl);
    console.log("logoUrl", logoUrl);
    console.log(menuArray);
    console.log(locationTagsArray);
    console.log(facebookUrl);

    document.getElementById('truckName').textContent = name;

    let truckLocationElement = document.getElementById('truckLocation');
    let locStrTmp = "123";
 
    console.log(locStrTmp);
    for (let i = 0; i < locationTagsArray.length; i++) {
        console.log(locStrTmp);
        if (i = 0) {
            // switch (locationTagsArray[i]) {
            //     case 'carverHall':
            //         locStrTmp.concat("Carver Hall");
            //         break;
            //     case 'hooverHall':
            //         locStrTmp.concat("Hoover Hall");
            //         break;
            //     case 'kildeeHall':
            //         locStrTmp.concat("Kildee Hall");
            //         break;
            //     default:
            //         break;
            // }
            locStrTmp.concat("4");

        }
        // switch (locationTagsArray[i]) {
        //     case 'carverHall':
        //         locStrTmp.concat("& Carver Hall");
        //         break;
        //     case 'hooverHall':
        //         locStrTmp.concat("& Hoover Hall");
        //         break;
        //     case 'kildeeHall':
        //         locStrTmp.concat("& Kildee Hall");
        //         break;
        //     default:
        //         break;
        // }
        locStrTmp.concat("5");
    }

    console.log(locStrTmp);





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