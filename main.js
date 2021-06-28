document.getElementById("form").addEventListener('submit', addExpense);
document.getElementById("form").addEventListener('submit', resetForm);
document.getElementById("table").addEventListener('click', removeExpense);
const dateInput = document.getElementById("date");
const locationInput = document.getElementById("location");
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");


function addExpense(e){
    e.preventDefault();

    const newExpense = {
        amount: amountInput.value,
        date: dateInput.value,
        location: locationInput.value,
        description: descriptionInput.value,
        category: categoryInput.value
    };

    renderExpenseRow(newExpense);
}

function renderExpenseRow(expense) {
   
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.innerHTML = "X"
    
    const row = document.getElementById("table-body").insertRow(0);
    row.className = 'table-row';
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);

    updateTotal(expense.amount);
    
    cell1.textContent = expense.date;
    cell2.textContent = expense.location;
    cell3.textContent = expense.description;
    cell4.textContent = '$' + expense.amount;
    cell5.textContent = expense.category;
    cell6.appendChild(deleteButton);
}

function removeExpense(e){
    e.preventDefault();

    if(e.target.classList.contains('delete-button')){
    const expenseToRemove = e.target.parentNode.parentNode;
    let amountToRemove = parseFloat(expenseToRemove.childNodes[3].textContent.split('').filter((x) => x ==="$"? '': x).join(''));

    updateTotal(-Math.abs(amountToRemove))
    
    expenseToRemove.remove();   

    }
}

function resetForm() {
    document.getElementById("form").reset();
}

function updateTotal(amount) {
    const currentTotal = parseFloat(document.getElementById("total-number").textContent);
    const updatedTotal = (currentTotal + parseFloat(amount)).toFixed(2);
    document.getElementById("total-number").textContent = `${updatedTotal}`;
}