'use strict';
let container = document.getElementById('container');

let table = document.createElement('table');
container.appendChild(table);

let perHour = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let arrayOfObjects = [];


function Countries(cityName, minCust, maxCust, avgCookie) {
  this.cityName = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.customer = 0;
  this.cookiPerHour = [];
  this.custPerHour = [];
  this.totalSum=0;
  arrayOfObjects.push(this);

}


let seattle = new Countries('seattle', 23, 56, 3.6);
console.log(seattle);


let Tokyo = new Countries('Tokyo', 3, 24, 1.2);
console.log(Tokyo);

let Dubai = new Countries('Dubai', 11, 38, 3.7);
console.log(Dubai);

let Paris = new Countries('Paris', 20, 38, 2.3);
console.log(Paris);

let Lima = new Countries('Lima', 2, 16, 4.6);
console.log(Lima);



Countries.prototype.getcustomerPerHour = function () {
  for (let a = 0; a < perHour.length; a++) {
    this.custPerHour.push(randomValue(this.minCust, this.maxCust));
  }
};

seattle.getcustomerPerHour();
Tokyo.getcustomerPerHour();
Dubai.getcustomerPerHour();
Paris.getcustomerPerHour();
Lima.getcustomerPerHour();

Countries.prototype.getAvgCookiePerHour = function () {
  for (let s = 0; s < this.custPerHour.length; s++) {
    this.cookiPerHour.push(Math.ceil(this.avgCookie * this.custPerHour[s]));
  }
};


seattle.getAvgCookiePerHour();
Tokyo.getAvgCookiePerHour();
Dubai.getAvgCookiePerHour();
Paris.getAvgCookiePerHour();
Lima.getAvgCookiePerHour();


Countries.prototype.render = function () {

  let firstRow = document.createElement('tr');
  table.appendChild(firstRow);

  let tdElement = document.createElement('td');
  firstRow.appendChild(tdElement);
  tdElement.textContent = this.cityName;


  let v = 0;
  for (let i = 0; i < this.cookiPerHour.length; i++) {

    let tdElement = document.createElement('td');
    firstRow.appendChild(tdElement);
    tdElement.textContent = this.cookiPerHour[i];
    v = this.cookiPerHour[i] + v;
  }

  let totalRow = document.createElement('td');
  firstRow.appendChild(totalRow);
  totalRow.textContent = v;

};

function headerRender() {

  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);


  for (let i = -1; i < perHour.length; i++) {
    if (i === -1) {
      let thElement = document.createElement('th');
      headerRow.appendChild(thElement);
      thElement.textContent = ' ';
    }
    else {
      let thElement = document.createElement('th');
      headerRow.appendChild(thElement);
      thElement.textContent = perHour[i];

    }

  }
  let lastColu = document.createElement('th');
  headerRow.appendChild(lastColu);
  lastColu.textContent = 'Daily Location Total';
}


headerRender();
seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
console.log(arrayOfObjects);

function footerRender() {

  let footerRow = document.createElement('tr');
  table.appendChild(footerRow);
  let footertotal = document.createElement('td');
  footerRow.appendChild(footertotal);
  footertotal.textContent = 'Total';

  let total = 0;
  let n=0;
  for (let m = 0; m < perHour.length; m++) {
    let td = document.createElement('td');
    footerRow.appendChild(td);
    n=0;
    for (let l = 0; l < arrayOfObjects.length; l++) {
      console.log(arrayOfObjects[1]);
      n += arrayOfObjects[l].cookiPerHour[m] ;
    }

    td.textContent = n;
    total = total + n;


  }
  let lastColu = document.createElement('td');
  footerRow.appendChild(lastColu);
  lastColu.textContent = total;

}

footerRender();

// seattle.getAvgCookiePerHour();
// console.log(seattle);


// const seattle ={
//     cityName:'Seattle',
//     minCust:23,
//     maxCust:65,
//     avgCookie:6.3,
//     customer:0,
//     cookiePerHour:[],
//     custperHour:[],

//     getcustomerPerHour:function(){
//         for (let a =0; a< perHour.length; a++){
//             this.custperHour.push(randomValue(this.minCust,this.maxCust));
//         }
//         console.log(this.custperHour);
//     },
//     getAvgCookiePerHour: function(){
//         for (let s = 0; s < this.custperHour.length; s++) {
//             this.cookiePerHour.push(Math.ceil(this.avgCookie*this.custperHour[s]))
//         }
//         console.log(this.cookiePerHour);
//     },

//     Data:function () {
//         let container=document.getElementById('container');
//         let title=document.createElement('h2');
//         container.appendChild(title);
//         title.textContent=this.cityName;
//         let seattleUnorderedlist=document.createElement('ul')
//           container.appendChild(seattleUnorderedlist);
//           let d=0;

//           for(let f=0; f<perHour.length;f++){
//               let li=document.createElement('li');
//               seattleUnorderedlist.appendChild(li);
//               li.textContent=perHour[f]+':'+this.cookiePerHour[f]+'cookies'
//               d=this.cookiePerHour[f]+d;
//           }
//           let totalli=document.createElement('li')
//           seattleUnorderedlist.appendChild(totalli);
//           totalli.textContent='total :' + d + ' cookies'
//     }
// }

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// seattle.getcustomerPerHour();
// seattle.getAvgCookiePerHour();
// seattle.Data();

// const Tokyo ={
//     cityName:'Tokyo',
//     minCust:3,
//     maxCust:24,
//     avgCookie:1.2,
//     customer:0,
//     cookiePerHour:[],
//     custperHour:[],

//     getcustomerPerHour:function(){
//         for (let z =0; z< perHour.length; z++){
//             this.custperHour.push(randomValue(this.minCust,this.maxCust));
//         }
//         console.log(this.custperHour);
//     },
//     getAvgCookiePerHour: function(){
//         for (let x = 0; x < this.custperHour.length; x++) {
//             this.cookiePerHour.push(Math.ceil(this.avgCookie*this.custperHour[x]))
//         }
//         console.log(this.cookiePerHour);
//     },

//     Data:function () {
//         let container1=document.getElementById('container');
//         let title1=document.createElement('h2');
//         container1.appendChild(title1);
//         title1.textContent=this.cityName;
//         let TokyoUnorderedlist=document.createElement('ul')
//           container1.appendChild(TokyoUnorderedlist);
//           let c=0;
//           for(let v=0; v<perHour.length;v++){
//               let li=document.createElement('li');
//               TokyoUnorderedlist.appendChild(li);
//               li.textContent=perHour[v]+':'+this.cookiePerHour[v]+'cookies'
//               c=this.cookiePerHour[v]+c;
//           }
//           let totalli=document.createElement('li')
//           TokyoUnorderedlist.appendChild(totalli);
//           totalli.textContent='total :' + c + ' cookies'
//     }
// }


// Tokyo.getcustomerPerHour();
// Tokyo.getAvgCookiePerHour();
// Tokyo.Data();



// const Dubai ={
//     cityName:'Dubai',
//     minCust:11,
//     maxCust:38,
//     avgCookie:3.7,
//     customer:0,
//     cookiePerHour:[],
//     custperHour:[],

//     getcustomerPerHour:function(){
//         for (let q =0; q< perHour.length; q++){
//             this.custperHour.push(randomValue(this.minCust,this.maxCust));
//         }
//         console.log(this.custperHour);
//     },
//     getAvgCookiePerHour: function(){
//         for (let w = 0; w < this.custperHour.length; w++) {
//             this.cookiePerHour.push(Math.ceil(this.avgCookie*this.custperHour[w]))
//         }
//         console.log(this.cookiePerHour);
//     },

//     Data:function () {
//         let container2=document.getElementById('container');
//         let title2=document.createElement('h2');
//         container2.appendChild(title2);
//         title2.textContent=this.cityName;
//         let DubaiUnorderedlist=document.createElement('ul')
//           container2.appendChild(DubaiUnorderedlist);
//           let e=0;
//           for(let r=0; r<perHour.length;r++){
//               let li=document.createElement('li');
//               DubaiUnorderedlist.appendChild(li);
//               li.textContent=perHour[r]+':'+this.cookiePerHour[r]+'cookies'
//               e=this.cookiePerHour[r]+e;
//           }
//           let totalli=document.createElement('li')
//           DubaiUnorderedlist.appendChild(totalli);
//           totalli.textContent='total :' + e + ' cookies'
//     }
// }


// Dubai.getcustomerPerHour();
// Dubai.getAvgCookiePerHour();
// Dubai.Data();



// const Paris ={
//     cityName:'Paris',
//     minCust:20,
//     maxCust:38,
//     avgCookie:2.3,
//     customer:0,
//     cookiePerHour:[],
//     custperHour:[],

//     getcustomerPerHour:function(){
//         for (let q =0; q< perHour.length; q++){
//             this.custperHour.push(randomValue(this.minCust,this.maxCust));
//         }
//         console.log(this.custperHour);
//     },
//     getAvgCookiePerHour: function(){
//         for (let w = 0; w < this.custperHour.length; w++) {
//             this.cookiePerHour.push(Math.ceil(this.avgCookie*this.custperHour[w]))
//         }
//         console.log(this.cookiePerHour);
//     },

//     Data:function () {
//         let container2=document.getElementById('container');
//         let title2=document.createElement('h2');
//         container2.appendChild(title2);
//         title2.textContent=this.cityName;
//         let ParisUnorderedlist=document.createElement('ul')
//           container2.appendChild(ParisUnorderedlist);
//           let e=0;
//           for(let r=0; r<perHour.length;r++){
//               let li=document.createElement('li');
//               ParisUnorderedlist.appendChild(li);
//               li.textContent=perHour[r]+':'+this.cookiePerHour[r]+'cookies'
//               e=this.cookiePerHour[r]+e;
//           }
//           let totalli=document.createElement('li')
//           ParisUnorderedlist.appendChild(totalli);
//           totalli.textContent='total :' + e + ' cookies'
//     }
// }


// Paris.getcustomerPerHour();
// Paris.getAvgCookiePerHour();
// Paris.Data();


// const Lima ={
//     cityName:'Lima',
//     minCust:2,
//     maxCust:16,
//     avgCookie:4.6,
//     customer:0,
//     cookiePerHour:[],
//     custperHour:[],

//     getcustomerPerHour:function(){
//         for (let q =0; q< perHour.length; q++){
//             this.custperHour.push(randomValue(this.minCust,this.maxCust));
//         }
//         console.log(this.custperHour);
//     },
//     getAvgCookiePerHour: function(){
//         for (let w = 0; w < this.custperHour.length; w++) {
//             this.cookiePerHour.push(Math.ceil(this.avgCookie*this.custperHour[w]))
//         }
//         console.log(this.cookiePerHour);
//     },

//     Data:function () {
//         let container2=document.getElementById('container');
//         let title2=document.createElement('h2');
//         container2.appendChild(title2);
//         title2.textContent=this.cityName;
//         let LimaUnorderedlist=document.createElement('ul')
//           container2.appendChild(LimaUnorderedlist);
//           let e=0;
//           for(let r=0; r<perHour.length;r++){
//               let li=document.createElement('li');
//               LimaUnorderedlist.appendChild(li);
//               li.textContent=perHour[r]+':'+this.cookiePerHour[r]+'cookies'
//               e=this.cookiePerHour[r]+e;
//           }
//           let totalli=document.createElement('li')
//           LimaUnorderedlist.appendChild(totalli);
//           totalli.textContent='total :' + e + ' cookies'
//     }
// }


// Lima.getcustomerPerHour();
// Lima.getAvgCookiePerHour();
// Lima.Data();
