// var date= new Date;
// console.log("Todays Work"+date);

var friendsAge= [15,17,18,20];
var friendsName = ['samia', 'lamia','chadny'];
friendsAge[0]= 16;
var position= friendsAge.indexOf(17);
console.log(friendsAge[0]);
console.log(position);
friendsAge.push(0); //last a add hoiche
console.log(friendsAge.length);
friendsName.pop();
console.log(friendsName);
//add elements begining or remove

friendsName.unshift('babu');
console.log(friendsName);

friendsName.shift('babu');
console.log(friendsName);