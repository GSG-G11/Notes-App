/* eslint-disable no-unused-vars */

const deleteNote = (id) => {
  fetch(`/deleteData/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// Function To Render All The Data From The DB
const fetchToGetAllData = () => {
  const dataCreation = document.querySelector('.data-creation');
  fetch('/getData')
    .then((res) => res.json())
    .then((data) => {
      // eslint-disable-next-line prefer-destructuring
      console.log(data);
      for (let i = 0; i < data.length; i += 1) {
        const div = document.createElement('div');
        const title = document.createElement('h1');
        title.textContent = data[i].title;
        div.appendChild(title);
        const category = document.createElement('h3');
        category.textContent = data[i].category;
        div.appendChild(category);
        const note = document.createElement('p');
        note.textContent = data[i].note;
        div.appendChild(note);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        div.appendChild(deleteBtn);
        dataCreation.appendChild(div);

        deleteBtn.onclick = () => {
          deleteNote(data[i].id);
          dataCreation.removeChild(div);
        };
      }
    });
};

const grtDataForSpecificCategory = (id) => {
  const value = new Headers();
  value.append('value', id);
  const dataCreation = document.querySelector('.data-creation');
  fetch('/getJSCategory', {
    headers: value,
  })
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        const div = document.createElement('div');
        const title = document.createElement('h1');
        title.textContent = data[i].title;
        div.appendChild(title);
        const note = document.createElement('p');
        note.textContent = data[i].note;
        div.appendChild(note);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        div.appendChild(deleteBtn);
        dataCreation.appendChild(div);

        deleteBtn.onclick = (e) => {
          deleteNote(e.target.id);
          dataCreation.removeChild(div);
        };
      }
    });
};
