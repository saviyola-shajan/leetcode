// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".


var defangIPaddr = function(address) {
    let add = address.split('')
    for(let i=0;i<add.length;i++){
       if(add[i]==="."){
           add[i]="[.]"
       }
    }
    return add.join('')
};