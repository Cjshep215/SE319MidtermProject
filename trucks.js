// ISU Food Truck Tracker - Connor and Luke

var searchString = new URLSearchParams(window.location.search);
var currTruckID = searchString.get('currTruckID');
// console.log(currTruckID);

if (!currTruckID){
    alert("No truck selcted");
} else {
    fetch("./data.json").then(response => response.json()).then(allTrucks => loadTrucks(allTrucks));
}


function loadTrucks(allTrucks) {
    // console.log("Trucks:", allTrucks);
    let currTruck = allTrucks.trucks[0];
    for (let i = 0; i < allTrucks.trucks.length; i++){
        if (allTrucks.trucks[i].truckID == currTruckID){
            currTruck = allTrucks.trucks[i];
        }
    }

    let name = currTruck.truckName;
    let hoursArray = currTruck.truckHours;
    let imageUrl = currTruck.imageUrl;
    let logoUrl = currTruck.Url;
    let menuArray = currTruck.menu;
    let locationTagsArray = currTruck.locationTags;
    let facebookUrl = currTruck.facebookUrl;

    document.getElementById('truckName').textContent = name;

    document.getElementById('truckLocation').textContent = "";
    for (let locStr of locationTagsArray){
        switch (locStr){
            case '':
                
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



    footerInfo();
}