/* eslint-disable no-console */
const dataCreation = document.querySelector('.data-creation');
const getAllData = document.querySelector('.getAllData');
console.log(22222222);

fetch('/getData')
  .then((res) => res.json())
  .then((data) => {
    console.log(111);
    console.log(data);
    // eslint-disable-next-line prefer-destructuring
    for (let i = 0; i < data.length; i += 1) {
      const div = document.createElement('div');
      const category = document.createElement('div');
      category.textContent = data[i].category;
      div.appendChild(category);
      const note = document.createElement('div');
      note.textContent = data[i].note;
      div.appendChild(note);
      const title = document.createElement('div');
      title.textContent = data[i].title;
      div.appendChild(title);
      dataCreation.appendChild(div);
    }
  });

getAllData.addEventListener('click', () => {
  dataCreation.textContent = '';
  console.log('Enter event Listener ');
  fetch('/getData')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // eslint-disable-next-line prefer-destructuring
      for (let i = 0; i < data.length; i += 1) {
        const div = document.createElement('div');
        const category = document.createElement('div');
        category.textContent = data[i].category;
        div.appendChild(category);
        const note = document.createElement('div');
        note.textContent = data[i].note;
        div.appendChild(note);
        const title = document.createElement('div');
        title.textContent = data[i].title;
        div.appendChild(title);
        dataCreation.appendChild(div);
      }
    });
});
