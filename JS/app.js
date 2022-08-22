// For top 5 selection 

const topFiveArray = [];
function displayTopFiveToTable(arr) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${arr[i]}</td>
        `
        tableBody.appendChild(tr);
    }
}

function addToTopFive(element) {
    if (topFiveArray.length < 5) {
        const playerName = element.parentNode.parentNode.children[0].innerText;
        topFiveArray.push(playerName);
        displayTopFiveToTable(topFiveArray);
        element.style.backgroundColor = "darkgrey";
        element.disabled = true;
    } else {
        alert('Alraedy Top 5 Player selected')
    }
}

// Budget section 

// Calculate button 
document.getElementById('calculate').addEventListener('click', function totalPlayerExpense() {
    const avgPlayerExpenses = getFieldValueById('player-expense-field');
    const playesExpenses = document.getElementById('players-cost');
    // playesExpenses.innerText = avgPlayerExpenses * topFiveArray.length;
    if (topFiveArray.length == 0) {
        alert('please add some player first')
    } else if (avgPlayerExpenses != '' && avgPlayerExpenses > 0) {
        playesExpenses.innerText = avgPlayerExpenses * topFiveArray.length;
    }
    else {
        alert('please insurt a valid player expense')
    }

})

// calculate total button 
document.getElementById('calculate-total-btn').addEventListener('click', function totalExpense() {
    const playersExpenseString = document.getElementById('players-cost').innerText;
    const playersExpense = parseFloat(playersExpenseString);
    const managerExpense = getFieldValueById('manager-expense-field');
    const coachExpense = getFieldValueById('coach-expense-field');
    const totalExpense = document.getElementById('total-cost');
    if (playersExpenseString == '') {
        alert('Please calculate player expense first')
    } else if (managerExpense > 0 && coachExpense > 0) {
        totalExpense.innerText = playersExpense + managerExpense + coachExpense;
    }
    else {
        alert('Please add valid input inside the input field');
    }
})

//------------------------ End---------------------------------- 