console.log('second file');

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitle = document.getElementsByClassName('section-title');

console.log(allTitle);
for (const title of allTitle) {
    console.log(title.innerText);
}

const firstSection = document.getElementById('first-section');

// console.log(firstSection);
firstSection.style.color = 'violet';
firstSection.style.backgroundColor = 'yellow';