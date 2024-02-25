// Get the container for tasks and the input field for new tasks
const tasksContainer = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  // Trim the input value
  const taskName = newTaskInput.value.trim();

  // Check if the input is not empty
  if (taskName !== '') {
    // Create a new task object
    const task = {
      id: Date.now(),
      name: taskName,
    };

    // Add the task to the array
    tasks.push(task);
    // Clear the input field
    newTaskInput.value = '';

    // Render the task on the screen
    renderTask(task);
  }
}

// Function to render a task on the screen
function renderTask(task) {
  // Create a new list item for the task
  const taskElement = document.createElement('li');
  taskElement.id = `task-${task.id}`;
  taskElement.innerHTML = `
    <span>${task.name}</span>
    <button onclick="deleteTask(${task.id})">Delete</button>
    <button onclick="editTask(${task.id})">Edit</button>
  `;

  // Append the task to the task container
  tasksContainer.appendChild(taskElement);
}

// Function to delete a task
function deleteTask(id) {
  const taskElement = document.getElementById(`task-${id}`);
  if (taskElement) {
    // Remove the task from the screen
    taskElement.remove();
    // Remove the task from the array
    tasks = tasks.filter(task => task.id !== id);
  }
}

// Function to edit a task
function editTask(id) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    // Prompt the user for a new task name
    const newName = prompt('Enter new task name:', task.name);
    if (newName) {
      // Update the task name
      task.name = newName;
      // Update the task name on the screen
      const span = document.querySelector(`#task-${id} span`);
      span.innerText = task.name;
    }
  }
}
