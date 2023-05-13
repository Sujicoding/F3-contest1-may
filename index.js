const fetchDataBtn = document.getElementById("fetchDataBtn");
const dataTable = document.getElementById("dataTable");

// Function to fetch data from the first API endpoint
function promiseAPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
        .then((response) => response.json())
        .then((data) => {
          // Show data in UI
          dataTable.innerHTML += generateTableHTML(data);
          // Resolve the promise
          resolve(true);
        });
    }, 1000);
  });
}

// Function to fetch data from the second API endpoint
function promiseAPI2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          // Show data in UI
          dataTable.innerHTML += generateTableHTML(data);
          // Resolve the promise
          resolve(true);
        });
    }, 2000);
  });
}

// Function to fetch data from the third API endpoint
function promiseAPI3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/todos")
        .then((response) => response.json())
        .then((data) => {
          // Show data in UI
          dataTable.innerHTML += generateTableHTML(data);
          // Resolve the promise
          resolve(true);
        });
    }, 3000);
  });
}

// Helper function to generate HTML table from data
function generateTableHTML(data) {
  let html = "<tr>";
  for (const key in data[0]) {
    html += `<th>${key}</th>`;
  }
  html += "</tr>";
  data.forEach((item) => {
    html += "<tr>";
    for (const key in item) {
      html += `<td>${item[key]}</td>`;
    }
    html += "</tr>";
  });
  return html;
}

// Add click listener to button
fetchDataBtn.addEventListener("click", () => {
  // Start promise chain
  promiseAPI1()
    .then(() => {
      // Only go to the next promise if previous resolve is true
      return promiseAPI2();
    })
    .then(() => {
      return promiseAPI3();
    })
    .catch((error) => console.error(error));
});
