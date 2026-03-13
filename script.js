let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense(){

let type = document.getElementById("type").value;
let category = document.getElementById("category").value;
let amount = document.getElementById("amount").value;

if(amount === "") return;

let expense = {
type:type,
category:category,
amount:parseFloat(amount)
};

expenses.push(expense);

localStorage.setItem("expenses",JSON.stringify(expenses));

displayExpenses();

document.getElementById("amount").value="";
}

function displayExpenses(){

let table = document.getElementById("tableBody");
table.innerHTML="";

let income = 0;
let expense = 0;

expenses.forEach(e=>{

let row = `<tr>
<td>${e.type}</td>
<td>${e.category}</td>
<td>${e.amount}</td>
</tr>`;

table.innerHTML += row;

if(e.type === "Income")
income += e.amount;
else
expense += e.amount;

});

let balance = income - expense;

document.getElementById("income").innerText = income;
document.getElementById("expense").innerText = expense;
document.getElementById("balance").innerText = balance;

}

displayExpenses();