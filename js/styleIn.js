const sectionALL = document.querySelectorAll('section');
// console.log(sectionALL);
for (const section of sectionALL) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '5px';
    section.style.paddingLeft = '15px';
    section.style.backgroundColor = 'lightgray';
    // console.log(section);
}
const placesContainer = document.getElementById('places-container');
// console.log(placesContainer);
// placesContainer.style.backgroundColor = 'yellow';
placesContainer.classList.add('text-center');
// placesContainer.classList.add('text-size');
placesContainer.classList.remove('text-size');
