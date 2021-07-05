document.getElementById('form').addEventListener('submit', addExpense);
const dateInput = document.getElementById('date');
const locationInput = document.getElementById('location');
const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');
const categoryInput = document.getElementById('category');

function addExpense(e) {
  e.preventDefault();

  // if (
  //   !descriptionInput.value ||
  //   !amountInput.value ||
  //   !dateInput.value ||
  //   !locationInput.value
  // ) {
  //   alert('Please fill out all input fields before submitting. ');
  //   return;
  // }

  const newExpense = {
    id: Date.now(),
    amount: amountInput.value,
    date: formatDate(dateInput.value),
    location: locationInput.value,
    description: descriptionInput.value,
    category: categoryInput.value
  };

  const expenseArray = getExpenses();
  renderExpenseRow(newExpense);
  expenseArray.push(newExpense);
  pushToLocalStorage(expenseArray);
  updateTotal();
  document.getElementById('form').reset();
}

function pushToLocalStorage(array) {
  localStorage.setItem('expenseArray', JSON.stringify(array));
}

function getExpenses() {
  return (expenseArray =
    JSON.parse(localStorage.getItem('expenseArray')) || []);
}

function renderExpenseRow(expense) {
  const deleteButton = createDeleteButton(expense);

  const row = document.getElementById('table-body').insertRow(0);
  row.className = 'table-row';
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);

  cell1.textContent = expense.date;
  cell2.textContent = expense.location;
  cell3.textContent = expense.description;
  cell4.textContent = '$' + expense.amount;
  cell5.textContent = expense.category;
  cell6.appendChild(deleteButton);
}

function createDeleteButton(expense) {
  const expenseArray = getExpenses();
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'x';
  deleteButton.classList.add('DeleteButton');
  deleteButton.addEventListener('click', () => {
    deleteExpense(deleteButton, expense.id);
  });
  return deleteButton;
}

const deleteExpense = (deleteButton, id) => {
  const expenseArray = getExpenses();
  deleteButton.parentElement.parentElement.remove();
  for (let i = 0; i < expenseArray.length; i++) {
    if (expenseArray[i].id === id) {
      expenseArray.splice(i, 1);
      updateTotal();
      pushToLocalStorage(expenseArray);
      if (expenseArray.length === 0)
        document.getElementById('total-number').textContent = '0';
    }
  }
};

function updateTotal() {
  let sum = 0;
  const expenseArray = getExpenses();
  expenseArray.forEach(({ amount }) => {
    sum += parseFloat(amount);
    document.getElementById('total-number').textContent = sum;
    console.log('sum tho: ', sum);
  });
}

function formatDate(dateInput) {
  let date = new Date(dateInput);
  const options = {
    dateStyle: 'full',
    timeZone: 'UTC'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

window.addEventListener('load', () => {
  const expenseArray = getExpenses();
  expenseArray.forEach((expense) => {
    renderExpenseRow(expense);
  });
});
