// load worship data from localStorage
function loadWorshipData() {
    const worshipArr = JSON.parse(localStorage.getItem("worshipArr")) || [];
    return worshipArr;
}

// render the table
function renderTable() {
    let total = document.getElementById('total-number');
    total.innerHTML = parseInt(localStorage.getItem("totalJs")) || 0;
    
    const worshipArr = loadWorshipData();
    const tableBody = document.querySelector("#worshipTable tbody");
    tableBody.innerHTML = ""; 
    
    // Loop through worshipArr and create rows
    worshipArr.forEach((item) => {
        const row = document.createElement("tr");

        const phrase = Object.keys(item)[0];
        const count = item[phrase];

        // Create and append the phrase cell
        const phraseCell = document.createElement("td");
        phraseCell.textContent = phrase;
        row.appendChild(phraseCell);

        // Create and append the count cell
        const countCell = document.createElement("td");
        countCell.textContent = count;
        row.appendChild(countCell);

        tableBody.appendChild(row);
    });
}

// Render the table when the page loads
document.addEventListener("DOMContentLoaded", renderTable);
