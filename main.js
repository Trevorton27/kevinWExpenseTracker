// sum of all amounts
// pie chart from categories
document.getElementById("form").addEventListener('submit', addExpense);
document.getElementById("form").addEventListener('submit', resetForm);
document.getElementById("form").addEventListener('submit', amountTotal);
document.getElementById("table").addEventListener('click', removeItem);


function addExpense (e) {
    e.preventDefault();
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const table = document.getElementById("table-body")
    const deleteButton = "<button class='delete-button'>X</button>"
    
    const row = table.insertRow(0);
    row.className = 'table-row'
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    
    cell1.innerHTML = date;
    cell2.innerHTML = location;
    cell3.innerHTML = description;
    // cell4.innerHTML = amount;
    cell4.innerHTML = '$' + amount;
    cell5.innerHTML = category;
    cell6.innerHTML = deleteButton;
}

function removeItem(e){
    if(e.target.classList.contains('delete-button')){
    const taskToRemove = e.target.parentNode.parentNode;
    taskToRemove.remove();
    }
}

function resetForm() {
    document.getElementById("form").reset();
}

function amountTotal(){
    const table = document.getElementById("table-body")
    let amountSum = 0;

    for(i=0; i < table.rows.length; i++){
        amountSum = amountSum + parseInt(table.rows[i].cells[3].innerHTML.replace(/\$/, ''));
    }
    document.getElementById("total-number").innerHTML = '$' + amountSum;
    console.log(amountSum)
}