const container = document.getElementById('result');

const url = 'https://63d304794abff88834170d21.mockapi.io/ss';
let originalData = [];


fetch(url)
    .then((response) => {
        if (!response.ok) {
            console.log('error');
        }
        return response.json();
    })
    .then((data) => {
        originalData = data;
        renderData(data);
    })
    .catch((err) => {
        console.log(err);
    });

function renderData(data) {
    container.innerHTML = '';
    data.forEach(item => {
        container.innerHTML += `<div class="block">
            <p>${item.name}</p> <p>${item.age}</p>
            <img src="${item.avatar}" />
            <p>${item.desprition}</p>
            <p>${item.adress}</p>
            <p>${item.id}</p>
        </div>`;
    });
}

document.getElementById('filterButton').addEventListener('click', () => {
    const nameFilter = document.getElementById('nameFilter').value.toLowerCase();
    const filteredData = originalData.filter(item => item.name.toLowerCase().includes(nameFilter));
    renderData(filteredData);
});

document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('nameFilter').value = '';
    renderData(originalData);
});