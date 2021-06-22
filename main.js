//make sure all inputs are filled in order to send
// clear inputs after submission
// add inputs to table
// delete expense row 
// sum of all amounts
// pie chart from categories
document.getElementById("form").addEventListener('submit', addExpense);
document.getElementById("form").addEventListener('submit', resetForm);


function addExpense (e) {
    e.preventDefault();
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const table = document.getElementById("table")
    const deleteButton = createDeleteButton();
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    
    cell1.innerHTML = date;
    cell2.innerHTML = location;
    cell3.innerHTML = amount;
    cell4.innerHTML = description;
    cell5.innerHTML = category;
    cell6.innerHTML = deleteButton;
}

// function createTableRow(){
//     const table = document.getElementById("table")
//     const row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";


// }

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.appendChild(document.createTextNode('X'));
    return deleteButton;
}

// function clearFields() {
//     document.getElementsByClassName("expense-input").value = "";
// }
function resetForm() {
    document.getElementById("form").reset();
}
