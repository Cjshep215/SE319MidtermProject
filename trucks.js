// ISU Food Truck Tracker - Connor and Luke

var searchString = new URLSearchParams(window.location.search);
var currTruckID = searchString.get('currTruckID');
console.log(currTruckID);




function footerInfo() {
    let i = 1;
    // console.log(`footerInfo${i}`)
    // console.log(currTruck.otherInfo[i])
    for (let str of currTruck.otherInfo) {
        document.getElementById(`footerInfo${i}`).innerHTML = str;
        i++;
    }
}