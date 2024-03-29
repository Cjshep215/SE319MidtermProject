// ISU Food Truck Tracker - Connor and Luke


let currTruck;

fetch("./data.json").then(response => response.json()).then(allTrucks => loadTrucks(allTrucks));

function loadTrucks(allTrucks) {
    currTruck = allTrucks.trucks[0];

    function filterList(filterStr) {
        var listContainer;
        if (!(listContainer = document.getElementById("truckListContainer"))) {
            return;
        }
        listContainer.replaceChildren();


        function addTruck(truck) {
            let name = truck.truckName;
            let truckID = truck.truckID;
            let logoUrl = truck.logoUrl;
            let locTagArray = truck.locationTags;
            let foodType = truck.filterTags[0]; //First one is always food type


            let listElementDiv = document.createElement('div');
            listElementDiv.id = truckID;
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

            document.getElementById(truckID).addEventListener('click', () => { window.open(`Trucks.html?currTruckID=${truckID}`, "_self"); });

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
                    for (let k = 0; k < truck.filterTags.length; k++) {
                        if (truck.filterTags[k] == "Egg") {
                            addTruck(truck);
                        }
                    }
                }
                break;
            case 'filterbyDairy':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    for (let k = 0; k < truck.filterTags.length; k++) {
                        if (truck.filterTags[k] == "Dairy") {
                            addTruck(truck);
                        }
                    }
                }
                break;
            case 'filterbyPeanut':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    for (let k = 0; k < truck.filterTags.length; k++) {
                        if (truck.filterTags[k] == "Peanut") {
                            addTruck(truck);
                        }
                    }
                }
                break;
            case 'filterbyCarver':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    for (let k = 0; k < truck.locationTags.length; k++) {
                        if (truck.locationTags[k] == "carverHall") {
                            addTruck(truck);
                        }
                    }
                }
                break;
            case 'filterbyKildee':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    for (let k = 0; k < truck.locationTags.length; k++) {
                        if (truck.locationTags[k] == "kildeeHall") {
                            addTruck(truck);
                        }
                    }
                }
                break;
            case 'filterbyHoover':
                for (let i = 0; i < allTrucks.trucks.length; i++) {
                    let truck = allTrucks.trucks[i];
                    for (let k = 0; k < truck.locationTags.length; k++) {
                        if (truck.locationTags[k] == "hooverHall") {
                            addTruck(truck);
                        }
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



    filterList('NULL');
    document.getElementById("filterNone").addEventListener('click', () => { filterList('NULL'); })
    document.getElementById("filterbyMexican").addEventListener('click', () => {
        filterList('filterbyMexican');
        // document.getElementById("filterbyMexican").style.backgroundColor = 'rgb(255, 196, 0)';
    });
    document.getElementById("filterbyChicago").addEventListener('click', () => { filterList('filterbyChicago'); });
    document.getElementById("filterbyNoodle").addEventListener('click', () => { filterList('filterbyNoodle'); });
    document.getElementById("filterbyPhilly").addEventListener('click', () => { filterList('filterbyPhilly'); });

    document.getElementById("filterbyEgg").addEventListener('click', () => { filterList('filterbyEgg'); });
    document.getElementById("filterbyDairy").addEventListener('click', () => { filterList('filterbyDairy'); });
    document.getElementById("filterbyPeanut").addEventListener('click', () => { filterList('filterbyPeanut'); });

    document.getElementById("filterbyKildee").addEventListener('click', () => { filterList('filterbyKildee'); });
    document.getElementById("filterbyCarver").addEventListener('click', () => { filterList('filterbyCarver'); });
    document.getElementById("filterbyHoover").addEventListener('click', () => { filterList('filterbyHoover'); });


}
