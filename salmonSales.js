'use strict';

var ampm = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
                    '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
];

//initializes our location objects using object literal notation        
var firstNPike = {
    
    locationName:'First and Pike',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiePer: 6.3,
    randCustomers: function() {
        var hrCust = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
        return hrCust;
    },
    record: function () {
        var purchaseRecord = [];
        var simCook;
        console.log('simPurchaseRecord called.');
        for (var i = 0; i < 15; i++) {
            simCook = Math.floor(this.randCustomers() * this.avgCookiePer);
            purchaseRecord.push(simCook);
            console.log(simCook);
        }
        console.log('day\'s purchaseRecord simmed: ' + purchaseRecord);
        return purchaseRecord;
    },
    totCookies: function(){
        var cookSum = 0;
        var cookieTally = this.record();
        console.log('cookieTally is ' + cookieTally);
        for (var i = 0; i < cookieTally.length; i++) {
            console.log('inside totalCookies for loop');
            cookSum += cookieTally[i];
        }
        console.log('total cookies: ' + cookSum);
        return cookSum;
    },
}


var seaTacAirPort = {
    locationName: 'Seatac Airport',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiePer: 1.2,
    randCustomers: function() {
        var hrCust = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
        return hrCust;
    },
    record: function () {
        var purchaseRecord = [];
        var simCook;
        console.log('simPurchaseRecord called.');
        for (var i = 0; i < 15; i++) {
            simCook = Math.floor(this.randCustomers() * this.avgCookiePer);
            purchaseRecord.push(simCook);
            console.log(simCook);
        }
        console.log('day\'s purchaseRecord simmed: ' + purchaseRecord);
        return purchaseRecord;
    },
    totCookies: function(){
        var cookSum = 0;
        var cookieTally = this.record();
        console.log('cookieTally is ' + cookieTally);
        for (var i = 0; i < cookieTally.length; i++) {
            console.log('inside totalCookies for loop');
            cookSum += cookieTally[i];
        }
        console.log('total cookies: ' + cookSum);
        return cookSum;
    },
}

var seattleCenter = {
    locationName: 'Seattle Center',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiePer: 3.7,
    randCustomers: function() {
        var hrCust = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
        return hrCust;
    },
    record: function () {
        var purchaseRecord = [];
        var simCook;
        console.log('simPurchaseRecord called.');
        for (var i = 0; i < 15; i++) {
            simCook = Math.floor(this.randCustomers() * this.avgCookiePer);
            purchaseRecord.push(simCook);
            console.log(simCook);
        }
        console.log('day\'s purchaseRecord simmed: ' + purchaseRecord);
        return purchaseRecord;
    },
    totCookies: function(){
        var cookSum = 0;
        var cookieTally = this.record();
        console.log('cookieTally is ' + cookieTally);
        for (var i = 0; i < cookieTally.length; i++) {
            console.log('inside totalCookies for loop');
            cookSum += cookieTally[i];
        }
        console.log('total cookies: ' + cookSum);
        return cookSum;
    },
}

var capitolHill = {
    locationName: 'Capitol Hill',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiePer: 2.3,
    randCustomers: function() {
        var hrCust = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
        return hrCust;
    },
    record: function () {
        var purchaseRecord = [];
        var simCook;
        console.log('simPurchaseRecord called.');
        for (var i = 0; i < 15; i++) {
            simCook = Math.floor(this.randCustomers() * this.avgCookiePer);
            purchaseRecord.push(simCook);
            console.log(simCook);
        }
        console.log('day\'s purchaseRecord simmed: ' + purchaseRecord);
        return purchaseRecord;
    },
    totCookies: function(){
        var cookSum = 0;
        var cookieTally = this.record();
        console.log('cookieTally is ' + cookieTally);
        for (var i = 0; i < cookieTally.length; i++) {
            console.log('inside totalCookies for loop');
            cookSum += cookieTally[i];
        }
        console.log('total cookies: ' + cookSum);
        return cookSum;
    },
}

var alki = {
    locationName: 'Alki',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiePer: 4.6,
    randCustomers: function() {
        var hrCust = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
        return hrCust;
    },
    record: function () {
        var purchaseRecord = [];
        var simCook;
        console.log('simPurchaseRecord called.');
        for (var i = 0; i < 15; i++) {
            simCook = Math.floor(this.randCustomers() * this.avgCookiePer);
            purchaseRecord.push(simCook);
            console.log(simCook);
        }
        console.log('day\'s purchaseRecord simmed: ' + purchaseRecord);
        return purchaseRecord;
    },
    totCookies: function(){
        var cookSum = 0;
        var cookieTally = this.record();
        console.log('cookieTally is ' + cookieTally);
        for (var i = 0; i < cookieTally.length; i++) {
            console.log('inside totalCookies for loop');
            cookSum += cookieTally[i];
        }
        console.log('total cookies: ' + cookSum);
        return cookSum;
    },
}

var allLocations = [firstNPike, seaTacAirPort, seattleCenter, capitolHill, alki];

//creates div objects for each location containing the location name and an unordered list of the day's simulated purchase record
function makeLists () {
    var elLocationLists = document.getElementsByClassName("displayLocations").item(0);
    for (var i = 0; i < allLocations.length; i++) {
        var elLoc = document.createElement('div');
        elLocationLists.appendChild(elLoc);

        var elLocName = document.createElement('h2');
        elLocName.textContent = allLocations[i].locationName;
        elLoc.appendChild(elLocName);

        var elUl = document.createElement('ul');
        elLoc.appendChild(elUl);

        var location = allLocations[i];

        for (var j = 0; j < 15; j++) {
            var elLi = document.createElement('li');
            elLi.textContent = ampm[j] + ': ' + location.record()[j] + ' cookies';
            elUl.appendChild(elLi);
        }
        var elTotal = document.createElement('li');
        elTotal.textContent = 'Total: ' + location.totCookies() + ' cookies';
        elUl.appendChild(elTotal);
    }
}

makeLists();




