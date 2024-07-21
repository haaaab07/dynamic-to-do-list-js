document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if the task input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add an event listener to the remove button to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item, then append the list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to the task input field to allow adding tasks with the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
