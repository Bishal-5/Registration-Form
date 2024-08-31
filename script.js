// Get form data
let form = document.getElementById('form');
let Name = document.getElementById('name');
let DOB = document.getElementById('dob');
let Email = document.getElementById('email');
let Mobile = document.getElementById('mobile');
let viewData = document.getElementsByClassName('viewData');

// Get Table Access
let table = document.getElementById('form-data'); // Table
// Get the tbody's first content/element from 'table'
let tableBody = table.getElementsByTagName('tbody')[0]; 
let form_table = document.getElementsByClassName('form-table'); // Table div


form.addEventListener('submit', (event) =>{
    event.preventDefault();

    // Extract user input data from input field
    name = Name.value;
    dob = DOB.value;
    email = Email.value;
    mobile = Mobile.value;
    
    // Store the data in a table
    let addRow = tableBody.insertRow(); // Add a new row in a table

    // Add some new cell/block in the new row
    let cell1 = addRow.insertCell(0);
    let cell2 = addRow.insertCell(1);
    let cell3 = addRow.insertCell(2);
    let cell4 = addRow.insertCell(3);

    // Add the form data to these cell/block
    cell1.textContent = name;
    cell2.textContent = dob;
    cell3.textContent = email;
    cell4.textContent = mobile;

    saveLocalStorage(); // Save data to local storage
    form_table[0].style.display="block"; // Display the table
    viewData[0].style.display="none"; // Hide 'Show Stored Data' button
    form.reset(); // Reset form after submit
})

// Function to save the data to local storage
function saveLocalStorage() {
    const rows = tableBody.getElementsByTagName('tr'); // Get tr from tbody
    const data = []; // Create a empty array

    // Store data to localstorage using loop
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td'); // Get td from tr
        // Add td's data to the array
        data.push({
            name: cells[0].textContent,
            dob: cells[1].textContent,
            email: cells[2].textContent,
            mobile: cells[3].textContent
        });
    }
    // Save data to localstorage
    localStorage.setItem('Form-Data', JSON.stringify(data));
}

// Function to restore/show the data from local storage
function showLocalStorage() {
    // Retrive items from local storage
    const data = JSON.parse(localStorage.getItem('Form-Data')) || []; // If there have no data, it's return empty array

    // Add data in the table using forEach loop
    data.forEach(items => {
        const addRow = tableBody.insertRow(); // Add a new row in the table

        // Add cells in the new row
        const cell1 = addRow.insertCell(0);
        const cell2 = addRow.insertCell(1);
        const cell3 = addRow.insertCell(2);
        const cell4 = addRow.insertCell(3);

        // Add the data to these cells
        cell1.textContent = items.name;
        cell2.textContent = items.dob;
        cell3.textContent = items.email;
        cell4.textContent = items.mobile;

        form_table[0].style.display="block"; // Display the table
        viewData[0].style.display="none"; // Hide 'Show Stored Data' button
    });
}