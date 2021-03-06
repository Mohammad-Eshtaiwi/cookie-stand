/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
"use strict";
function GenarateBranches(
  location,
  minHourlyCustomers,
  maxHourlyCustomers,
  avgCookieForEachCustomer,
  openingHours = 14,
  workStartHour = 6
) {
  this.location = location;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookieForEachCustomer = avgCookieForEachCustomer;
  this.customersPerHour = [];
  this.avgSalePerHour = [];
  this.openingHours = openingHours;
  this.workStartHour = workStartHour;
  this.sum = 0;
}
// - function to calculate a avg of the sales
GenarateBranches.prototype.genarateCustomers = function () {
  console.log("max", this.maxHourlyCustomers);
  console.log("min", this.minHourlyCustomers);
  for (let hour = 0; hour < this.openingHours; hour++) {
    this.customersPerHour.push(
      Math.floor(
        Math.random() *
          (this.maxHourlyCustomers - this.minHourlyCustomers + 1) +
          this.minHourlyCustomers
      )
    );
  }
};
GenarateBranches.prototype.calculateAvgSales = function () {
  for (let hour = 0; hour < this.openingHours; hour++) {
    this.avgSalePerHour.push(
      Math.round(this.customersPerHour[hour] * this.avgCookieForEachCustomer)
    );
  }
};
// calculate the sum of the avg sales
GenarateBranches.prototype.calculateSum = function () {
  this.sum = sum(this.avgSalePerHour);
};
// render the body of the table
GenarateBranches.prototype.render = function () {
  let tableBody = document.querySelector(".sales-table tbody");
  console.log(tableBody);
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = this.location;
  tr.appendChild(th);
  for (let i = 0; i < this.openingHours; i++) {
    th = document.createElement("td");
    th.innerHTML = this.avgSalePerHour[i];
    tr.appendChild(th);
  }
  th = document.createElement("td");
  th.innerHTML = this.sum;
  tr.appendChild(th);
  tableBody.appendChild(tr);
  console.log(tr);
};
// make instance of my objects
const branches = [
  new GenarateBranches("Seattle", 23, 65, 6.5),
  new GenarateBranches("Tokyo", 3, 24, 1.2),
  new GenarateBranches("Dubai", 11, 38, 3.7),
  new GenarateBranches("paris", 20, 38, 2.3),
  new GenarateBranches("Lima", 2, 16, 4.6),
];
// genarate custumers and
// calculate the avarage sales per hour for each branch

// sum function
function sum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
}
console.log(branches);
let openingHours = branches[0].openingHours;
let openAt = branches[0].workStartHour;
// function to create a table structure that ready to add data from my objects
function tableStructure() {
  let salesTable = document.querySelector(".sales-table .container");
  salesTable.innerHTML = `
    <table>
    <thead>
    <tr>
    </tr>
    </thead>
    <tbody></tbody>
    <tfoot>
    <tr>
    </tr>
    </tfoot>
  </table>
  `;
}
function tableHeader(workingHours = openingHours, startHour = openAt) {
  let tableHeader = document.querySelector(".sales-table thead tr");
  let format = "am";
  let trTexts = [""];
  for (let i = 0; i < workingHours; i++) {
    trTexts.push(`${startHour}:00${format}`);
    if (startHour === 11 && format === "am") format = "pm";
    else if (startHour === 11 && format === "pm") format = "am";
    ++startHour;
    if (startHour === 13) startHour = 1;
  }

  trTexts.push("Daily Location Total");
  console.log(trTexts);
  console.log(tableHeader);
  trTexts.map((tr) => {
    let th = document.createElement("th");
    th.innerHTML = tr;
    tableHeader.appendChild(th);
  });
}
function tableFooter(workingHours = openingHours) {
  let tablefooter = document.querySelector(".sales-table tfoot tr");
  let th = document.createElement("th");
  th.innerHTML = "Totals";
  console.log(th);
  tablefooter.appendChild(th);
  for (let hour = 0; hour < openingHours; hour++) {
    let arr = [];
    let add = 0;
    for (let col = 0; col < branches.length; col++) {
      arr.push(branches[col].avgSalePerHour[hour]);
    }
    console.log(arr);
    add = sum(arr);
    console.log(add);
    let td = document.createElement("td");
    td.innerHTML = add;
    console.log(td);
    tablefooter.appendChild(td);
  }
  let add = 0;
  for (let col = 0; col < branches.length; col++) {
    add += branches[col].sum;
  }
  console.log(add);
  let td = document.createElement("td");
  td.innerHTML = add;
  tablefooter.appendChild(td);
}

branches.forEach((branch) => {
  branch.genarateCustomers();
  branch.calculateAvgSales();
  branch.calculateSum();
});
//function to create new location and render it in the table
function addNewLocation(location, min, max, avg) {
  console.log(location, min, max, avg);
  branches.push(new GenarateBranches(location, min, max, avg));
  console.log(branches[branches.length - 1]);
  branches[branches.length - 1].genarateCustomers();
  branches[branches.length - 1].calculateAvgSales();
  branches[branches.length - 1].calculateSum();
  tableConstructor();
}
let form = document.querySelector(".add-location form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const location = e.target[1].value;
  const min = parseInt(e.target[2].value);
  const max = parseInt(e.target[3].value);
  const avg = Number(e.target[4].value);
  console.log(location, min, max, avg);
  addNewLocation(location, min, max, avg);
});
console.log(form);

function tableConstructor() {
  tableStructure();
  tableHeader();
  branches.forEach((branch) => {
    branch.render();
  });
  tableFooter();
}
tableConstructor();
