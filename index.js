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
    let allTrucks;
    fetch("./data.json").then(response => response.json()).then(data => {
        allTrucks = data;
    });
    console.log("Trucks:", allTrucks);
    currTruck = await allTrucks.trucks[truckNum];
    console.log("Current:", currTruck);
    // console.log("selected truck:", currTruck.truckName);
}












fetch("./data.json").then(response => response.json()).then(allTrucks => loadTrucks(allTrucks));

function loadTrucks(allTrucks){
    console.log("Trucks:", allTrucks);
    currTruck = allTrucks.trucks[0];
    console.log("->",currTruck);
    
    function filterList(){
        console.log("->",currTruck);
        
    }

    
    
    
    function footerInfo(){
        let i = 1;
        // console.log(`footerInfo${i}`)
        // console.log(currTruck.otherInfo[i])
        for (let str of currTruck.otherInfo){
            document.getElementById(`footerInfo${i}`).innerHTML=str;
            i++;
        }
    }
    filterList();
    footerInfo();
}


//Add for each truck to click in index
// document.getElementById("FIXME - TRUCK 1").addEventListener('click', () => selectTruck(0));


// //For testing
// console.log("started test");
// selectTruck(0);
// footerInfo;

