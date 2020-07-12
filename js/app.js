/* eslint-disable quotes */
// function GenarateBranches(
//   minHourlyCustomers,
//   maxHourlyCustomers,
//   openingHours = 13,
//   avgCookieForEachCustomer = 6.3
// ) {
//   this.minHourlyCustomers = minHourlyCustomers;
//   this.maxHourlyCustomers = maxHourlyCustomers;
//   this.avgCookieForEachCustomer = avgCookieForEachCustomer;
//   this.customersPerHour = [];
//   this.avgSalePerHour = [];
//   this.openingHours = openingHours;
//   // function to add customers randomly
//   this.genarateCustomers = function () {
//     for (let hour = 0; hour < this.openingHours; hour++) {
//       this.customersPerHour.push(
//         Math.floor(
//           Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) +
//             this.minHourlyCustomers
//         )
//       );
//     }
//   };
//   //  - function to calculate a avg of the sales
//   this.calculateAvgSales = function () {
//     for (let hour = 0; hour < this.openingHours; hour++) {
//       this.avgSalePerHour.push(
//         Math.round(
//           (this.customersPerHour[hour] * this.avgCookieForEachCustomer) /
//             this.openingHours
//         )
//       );
//     }
//   };
// }

const seattle = {
  openingHours: 14,
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookieForEachCustomer: 6.3,
  customersPerHour: [],
  avgSalePerHour: [],
  // function to add customers randomly
  genarateCustomers: function () {
    for (let hour = 0; hour < this.openingHours; hour++) {
      this.customersPerHour.push(
        Math.floor(
          Math.random() *
            (this.maxHourlyCustomers - this.minHourlyCustomers + 1) +
            this.minHourlyCustomers
        )
      );
    }
  },
  //  - function to calculate a avg of the sales
  calculateAvgSales: function () {
    for (let hour = 0; hour < this.openingHours; hour++) {
      this.avgSalePerHour.push(
        Math.round(
          (this.customersPerHour[hour] * this.avgCookieForEachCustomer) /
            this.openingHours
        )
      );
    }
  },
};
seattle.genarateCustomers();
seattle.calculateAvgSales();
console.log("seattle", seattle);
const tokyo = {
  openingHours: 14,
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookieForEachCustomer: 6.3,
  customersPerHour: [],
  avgSalePerHour: [],
  // function to add customers randomly
  genarateCustomers: function () {
    for (let hour = 0; hour < this.openingHours; hour++) {
      this.customersPerHour.push(
        Math.floor(
          Math.random() *
            (this.maxHourlyCustomers - this.minHourlyCustomers + 1) +
            this.minHourlyCustomers
        )
      );
    }
  },
  //  - function to calculate a avg of the sales
  calculateAvgSales: function () {
    for (let hour = 0; hour < this.openingHours; hour++) {
      this.avgSalePerHour.push(
        Math.round(
          (this.customersPerHour[hour] * this.avgCookieForEachCustomer) /
            this.openingHours
        )
      );
    }
  },
};
tokyo.genarateCustomers();
tokyo.calculateAvgSales();
console.log("tokyo", tokyo);
const dubai = {
  openingHours: 14,
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookieForEachCustomer: 6.3,
  customersPerHour: [],
  avgSalePerHour: [],
  // function to add customers randomly
  genarateCustomers: function () {
    for (let hour = 0; hour < this.openingHours; hour++) {
      this.customersPerHour.push(
        Math.floor(
          Math.random() *
            (this.maxHourlyCustomers - this.minHourlyCustomers + 1) +
            this.minHourlyCustomers
        )
      );
    }
  },
  //  - function to calculate a avg of the sales
  calculateAvgSales: function () {
    for (let hour = 0; hour < this.openingHours; hour++) {
      this.avgSalePerHour.push(
        Math.round(
          (this.customersPerHour[hour] * this.avgCookieForEachCustomer) /
            this.openingHours
        )
      );
    }
  },
};
dubai.genarateCustomers();
dubai.calculateAvgSales();
console.log("dubai", dubai);
const paris = {
  openingHours: 14,
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookieForEachCustomer: 6.3,
  customersPerHour: [],
  avgSalePerHour: [],
  // function to add customers randomly
  genarateCustomers: function () {
    for (let hour = 0; hour < this.openingHours; hour++) {
      this.customersPerHour.push(
        Math.floor(
          Math.random() *
            (this.maxHourlyCustomers - this.minHourlyCustomers + 1) +
            this.minHourlyCustomers
        )
      );
    }
  },
  //  - function to calculate a avg of the sales
  calculateAvgSales: function () {
    for (let hour = 0; hour < this.openingHours; hour++) {
      this.avgSalePerHour.push(
        Math.round(
          (this.customersPerHour[hour] * this.avgCookieForEachCustomer) /
            this.openingHours
        )
      );
    }
  },
};
paris.genarateCustomers();
paris.calculateAvgSales();
console.log("paris", paris);
const lima = {
  openingHours: 14,
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookieForEachCustomer: 6.3,
  customersPerHour: [],
  avgSalePerHour: [],
  // function to add customers randomly
  genarateCustomers: function () {
    for (let hour = 0; hour < this.openingHours; hour++) {
      this.customersPerHour.push(
        Math.floor(
          Math.random() *
            (this.maxHourlyCustomers - this.minHourlyCustomers + 1) +
            this.minHourlyCustomers
        )
      );
    }
  },
  //  - function to calculate a avg of the sales
  calculateAvgSales: function () {
    for (let hour = 0; hour < this.openingHours; hour++) {
      this.avgSalePerHour.push(
        Math.round(
          (this.customersPerHour[hour] * this.avgCookieForEachCustomer) /
            this.openingHours
        )
      );
    }
  },
};
lima.genarateCustomers();
lima.calculateAvgSales();
console.log("lima", lima);

function createSalesList(location = {}, name) {
  const { avgSalePerHour } = location;
  let hour = 6;
  let format = "am";
  let textForLi = [];
  let article = document.createElement("article");
  let headding = document.createElement("h2");
  headding.innerHTML = name;
  article.appendChild(headding);
  for (let i = 0; i < avgSalePerHour.length; i++) {
    textForLi.push(`${hour}${format}: ${avgSalePerHour[i]} cookies`);
    console.log(hour);
    if (hour === 11 && format === "am") format = "pm";
    else if (hour === 11 && format === "pm") format = "am";
    ++hour;
    if (hour === 13) hour = 1;
  }
  let sum = 0;
  for (let avg = 0; avg < avgSalePerHour.length; avg++) {
    sum += avgSalePerHour[avg];
  }
  sum = `Total: ${sum}`;
  textForLi.push(sum);
  //   textForLi.push()
  console.log(textForLi);
  for (let i = 0; i < textForLi.length; i++) {
    let ul = document.createElement("ul");
    let list = document.createElement("li");
    list.innerHTML = textForLi[i];
    ul.appendChild(list);
    article.appendChild(ul);
    document.body.appendChild(article);
  }
}
createSalesList(seattle, "seattle");
createSalesList(tokyo, "tokyo");
createSalesList(dubai, "dubai");
createSalesList(paris, "paris");
createSalesList(lima, "lima");
