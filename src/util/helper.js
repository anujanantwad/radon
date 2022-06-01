function printDate() {
    let d=new Date();
    let date=d.getDate();

    console.log("todays date is",date)
}
const mo= ["January","February","March","April","May","June","July","August","September","October","November","December"];
function printMonth() {
   const dt = (new Date);
    console.log("and month is",mo[dt.getMonth()])
}
function getBatchInfo() {
    console.log("RADON ,W3D1, the topic for today is node js module system")
} 
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo