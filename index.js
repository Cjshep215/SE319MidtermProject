// ISU Food Truck Tracker - Connor and Luke


let currTruck;

async function fetchTrucks() {
    return new Promise((resolve, reject) => {
        fetch("./data.json")
            .then(response => response.json())
            .then(data => resolve(data))
            .catch((error) => {
                console.log("Error in fetch", error);
                reject(error);
            });
    });
}

async function selectTruck(truckNum){
    let allTrucks = await fetchTrucks;
    currTruck = allTrucks[truckNum];

}


function footerInfo(){
    let i = 1;
    for (let str in currTruck.otherInfo && i <= 4){
        document.getElementById(`footerInfo${i}`).innerHTML=str;
        i++;
    }
}



//Add for each truck to click in index
// document.getElementById("FIXME - TRUCK 1").addEventListener('click', () => selectTruck(0));


//For testing
console.log("started test");
selectTruck(0);
console.log("selected truck:", currTruck.truckName);
footerInfo;

