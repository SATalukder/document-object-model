// console.log('append js');
//1. Where to add
const placesList = document.getElementById('places-list');
// console.log(placesList);
//2. what to be added
const li = document.createElement('li');
li.innerText = 'Pahartoli bon';
placesList.appendChild(li);

// 1. where to add
const mainContainer = document.getElementById('main-contint');
// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);
const ul = document.createElement('ul');

const li1 = document.createElement('li')
li1.innerText = 'biryani';
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'kassi';
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'burhani';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


//set inner Html Directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Pant</li>
    <li>Ganji</li>
</ul>    
`

mainContainer.appendChild(sectionDress);