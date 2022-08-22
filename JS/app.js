const topFiveArray = [];
function displayTopFiveToTable(arr) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const playerName = arr[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${playerName}</td>
        `
        tableBody.appendChild(tr);
    }
}

function addToTopFive(element) {
    if (topFiveArray.length < 5) {
        const playerName = element.parentNode.parentNode.children[0].innerText;
        const playerListObj = {
            playerName: playerName,
        }
        topFiveArray.push(playerListObj);
        displayTopFiveToTable(topFiveArray);
        element.style.backgroundColor = "darkgrey";
        element.disabled = true;
    } else {
        alert('Alraedy Top 5 Player selected')
    }
}