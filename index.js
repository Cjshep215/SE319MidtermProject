// ISU Food Truck Tracker - Connor and Luke


let currTruck;

fetch("./data.json").then(response => response.json()).then(allTrucks => loadTrucks(allTrucks));

function loadTrucks(allTrucks) {
    console.log("Trucks:", allTrucks);
    currTruck = allTrucks.trucks[0];
    console.log("->", currTruck);

    function filterList(filterStr) {
        console.log("->", currTruck);
        var listContainer = document.getElementById("truckListContainer");
        listContainer.replaceChildren();


        function addTruck(truck) {
            // console.log(truck);
            let name = truck.truckName;
            let logoUrl = truck.logoUrl;
            let locTagArray = truck.locationTags;
            let foodType = truck.filterTags[0]; //First one is always food type
            // console.log(name, logoUrl, locTagArray, foodType);


            let listElementDiv = document.createElement('div');
            listElementDiv.style.display = 'grid';
            listElementDiv.style.marginBottom = '25px';

            let listGridDiv = document.createElement('div');
            listGridDiv.style.display = 'inline-flex';


            let listLogoDiv = document.createElement('div');
            listLogoDiv.innerHTML = `
                        <div style="width: 80px;"><img src=${logoUrl} class="logo" alt = "Logo for ${name}"></div>
                    `;


            let listNameDiv = document.createElement('div');
            listNameDiv.innerHTML = `
                        <div style="padding: 10px;">
                            <h3 style="left: 100%; text-decoration: underline;" ;>${name}</h3>
                            <h6 style="text-align: center;">${foodType}</h6>
                        </div>
                    `;

            listGridDiv.replaceChildren(listLogoDiv, listNameDiv);

            for (let j = 0; j < locTagArray.length; j++) {
                let tag = locTagArray[j];
                let listLocH5 = document.createElement('h5');
                let locStr;
                switch (tag) {
                    case 'hooverHall':
                        locStr = "Hoover Hall"
                        break;
                    case 'carverHall':
                        locStr = "Carver Hall"
                        break;
                    case 'kildeeHall':
                        locStr = "Kildee Hall"
                        break;
                    default:
                        locStr = "Error";
                        break;
                }
                listLocH5.innerHTML = ` 
                            <h5 style="margin-top: 8px; height: auto;padding-top: 6px;">(${locStr})</h5>
                        `;
                listGridDiv.appendChild(listLocH5);
            }

            listElementDiv.replaceChildren(listGridDiv);
            listContainer.appendChild(listElementDiv);
        }


        switch (filterStr) {
            case 'filterbyMexican':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    if (truck.filterTags[0] == "Mexican") {
                        addTruck(truck);
                    }
                }
                break;
            case 'filterbyChicago':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    if (truck.filterTags[0] == "Chicago") {
                        addTruck(truck);
                    }
                }
                break;
            case 'filterbyPhilly':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    if (truck.filterTags[0] == "Philly") {
                        addTruck(truck);
                    }
                }
                break;
            case 'filterbyNoodle':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    if (truck.filterTags[0] == "Noodle") {
                        addTruck(truck);
                    }
                }
                break;
            case 'filterbyEgg':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    if (truck.filterTags[0] == "Egg") {
                        addTruck(truck);
                    }
                }
                break;
            case 'filterbyDairy':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    if (truck.filterTags[0] == "Dairy") {
                        addTruck(truck);
                    }
                }
                break;
            case 'filterbyPeanut':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    if (truck.filterTags[0] == "Peanut") {
                        addTruck(truck);
                    }
                }
                break;
            default: //All trucks
                for (let i = 0; i < allTrucks.trucks.length; i++) {

                    let truck = allTrucks.trucks[i];
                    addTruck(truck);
                }
                break;
        }

    }




    function footerInfo() {
        let i = 1;
        // console.log(`footerInfo${i}`)
        // console.log(currTruck.otherInfo[i])
        for (let str of currTruck.otherInfo) {
            document.getElementById(`footerInfo${i}`).innerHTML = str;
            i++;
        }
    }

    
    filterList('NULL');// add to index load
    document.getElementById("filterbyMexican").addEventListener('click', () => {
        filterList('filterbyMexican');
        document.getElementById("filterbyMexican").style.backgroundColor = 'rgb(255, 196, 0)';
    });
    document.getElementById("filterbyChicago").addEventListener('click', () => {filterList('filterbyChicago')});
    document.getElementById("filterbyMexican").addEventListener('click', () => {filterList('filterbyMexican')});
    document.getElementById("filterbyMexican").addEventListener('click', () => {filterList('filterbyMexican')});
    document.getElementById("filterbyMexican").addEventListener('click', () => {filterList('filterbyMexican')});
    document.getElementById("filterbyMexican").addEventListener('click', () => {filterList('filterbyMexican')});
    document.getElementById("filterbyMexican").addEventListener('click', () => {filterList('filterbyMexican')});
    // footerInfo(); //add to trucks page load



}


//Add for each truck to click in index
// document.getElementById("FIXME - TRUCK 1").addEventListener('click', () => selectTruck(0));


// //For testing
// console.log("started test");
// selectTruck(0);
// footerInfo;

