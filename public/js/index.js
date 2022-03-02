/* eslint-disable no-unused-vars */

const renderAllData = (data) => {
  const dataCreation = document.querySelector('.data-creation');
  const card = document.createElement('div');
  card.className = 'card';
  const title = document.createElement('h3');
  title.textContent = data.title;
  card.appendChild(title);
  const category = document.createElement('span');
  category.textContent = data.category;
  card.appendChild(category);
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete Note';
  deleteBtn.className = 'delete';
  card.appendChild(deleteBtn);
  const note = document.createElement('p');
  note.textContent = data.note;
  card.appendChild(note);
  dataCreation.appendChild(card);
};
// Function To Render All The Data From The DB
const fetchToGetAllData = () => {
  fetch('/getData')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        renderAllData(data[i]);
      }
    });
};

const renderCategoryData = (data) => {
  const dataCreation = document.querySelector('.data-creation');
  const card = document.createElement('div');
  card.className = 'card';
  const title = document.createElement('h3');
  title.textContent = data.title;
  card.appendChild(title);
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete Note';
  deleteBtn.className = 'delete';
  card.appendChild(deleteBtn);
  const note = document.createElement('p');
  note.textContent = data.note;
  card.appendChild(note);
  dataCreation.appendChild(card);
};

// Function To Render All Category From The DB
const grtDataForSpecificCategory = (id) => {
  const value = new Headers();
  value.append('value', id);
  fetch('/getJSCategory', {
    headers: value,
  })
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        renderCategoryData(data[i]);
      }
    });
};
