
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);

list.append(li);



// Add click event listener to the Add Chapter button
button.addEventListener('click', function () {
  const chapterName = input.value.trim();

  // Check if input is not blank
  if (chapterName === '') {
    input.focus(); // Return focus to the input field
    return; // Stop the function
  }

  // Create new list item
  const li = document.createElement('li');
  li.textContent = chapterName;

  // Create and append delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('delete-btn');
  list.appendChild(deleteBtn);

  // Append list item to the chapter list
  list.appendChild(li);

  // Clear input and set focus back to it
  input.value = '';
  input.focus();
});

// Event delegation: Add event listener to the parent list
list.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});
