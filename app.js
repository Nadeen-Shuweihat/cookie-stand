'use strict';

let perHour = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

const seattle ={
    cityName:'Seattle',
    minCust:23,
    maxCust:65,
    avgCookie:6.3,
    customer:0,
    cookiePerHour:[],
    custperHour:[],

    getcustomerPerHour:function(){
        for (let a =0; a< perHour.length; a++){
            this.custperHour.push(randomValue(this.minCust,this.maxCust));
        }
        console.log(this.custperHour);
    },
    getAvgCookiePerHour: function(){
        for (let s = 0; s < this.custperHour.length; s++) {
            this.cookiePerHour.push(Math.ceil(this.avgCookie*this.custperHour[s]))   
        }
        console.log(this.cookiePerHour);
    },

    Data:function () {
        let container=document.getElementById('container');
        let title=document.createElement('h2');
        container.appendChild(title);
        title.textContent=this.cityName;
        let seattleUnorderedlist=document.createElement('ul')
          container.appendChild(seattleUnorderedlist);
          let d=0;
          for(let f=0; f<perHour.length;f++){
              let li=document.createElement('li');
              seattleUnorderedlist.appendChild(li);
              li.textContent=perHour[f]+':'+this.cookiePerHour[f]+'cookies'
              d=this.cookiePerHour[f]+d;
          }
          let totalli=document.createElement('li')
          seattleUnorderedlist.appendChild(totalli);
          totalli.textContent='total :' + d + ' cookies'
    }
}

function randomValue(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
seattle.getcustomerPerHour();
seattle.getAvgCookiePerHour();
seattle.Data();

const Tokyo ={
    cityName:'Tokyo',
    minCust:3,
    maxCust:24,
    avgCookie:1.2,
    customer:0,
    cookiePerHour:[],
    custperHour:[],

    getcustomerPerHour:function(){
        for (let z =0; z< perHour.length; z++){
            this.custperHour.push(randomValue(this.minCust,this.maxCust));
        }
        console.log(this.custperHour);
    },
    getAvgCookiePerHour: function(){
        for (let x = 0; x < this.custperHour.length; x++) {
            this.cookiePerHour.push(Math.ceil(this.avgCookie*this.custperHour[x]))   
        }
        console.log(this.cookiePerHour);
    },

    Data:function () {
        let container1=document.getElementById('container');
        let title1=document.createElement('h2');
        container1.appendChild(title1);
        title1.textContent=this.cityName;
        let TokyoUnorderedlist=document.createElement('ul')
          container1.appendChild(TokyoUnorderedlist);
          let c=0;
          for(let v=0; v<perHour.length;v++){
              let li=document.createElement('li');
              TokyoUnorderedlist.appendChild(li);
              li.textContent=perHour[v]+':'+this.cookiePerHour[v]+'cookies'
              d=this.cookiePerHour[v]+c;
          }
          let totalli=document.createElement('li')
          TokyoUnorderedlist.appendChild(totalli);
          totalli.textContent='total :' + c + ' cookies'
    }
}


Tokyo.getcustomerPerHour();
Tokyo.getAvgCookiePerHour();
Tokyo.Data();