// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

var dayOfYear = function(date) {
    const nDate=new Date(date)
    const startOfYear=new Date(nDate.getFullYear(),0,1)
    const milliSeconds = 24*60*60*1000;
    const dayNumber=Math.ceil((nDate-startOfYear)/milliSeconds)+1;
    return dayNumber;
};