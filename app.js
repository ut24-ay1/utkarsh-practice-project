// Get elements
const studentNameInput = document.getElementById('studentName');
const addStudentButton = document.getElementById('addStudent');
const studentList = document.getElementById('studentList');

// Add student function
function addStudent() {
    const name = studentNameInput.value.trim();
    if (name === '') {
        alert('Please enter a student name.');
        return;
    }

    // Create list item
    const listItem = document.createElement('li');
    listItem.textContent = name;

    // Append to the list
    studentList.appendChild(listItem);

    // Clear input
    studentNameInput.value = '';
}

// Event listener
addStudentButton.addEventListener('click', addStudent);
