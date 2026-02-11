/**
 * Simple To-Do App
 * Focused on DOM Manipulation and Event Handling
 */

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

/**
 * Creates a new task element
 * @param {string} taskText
 */
const createTodoElement = (taskText) => {
    // 1. Create the wrapper <li>
    const li = document.createElement('li');
    li.className = 'todo-item';

    // 2. Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    // 3. Create the text label
    const span = document.createElement('span');
    span.textContent = taskText;

    // 4. Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    // Assemble and return
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
};

/**
 * Handle form submission
 */
const handleAddTodo = (event) => {
    event.preventDefault();

    const taskValue = todoInput.value.trim();

    if (taskValue !== '') {
        const todoItem = createTodoElement(taskValue);
        todoList.appendChild(todoItem);

        // Reset input
        todoInput.value = '';
        todoInput.focus();
    }
};

// Event Listeners
todoForm.addEventListener('submit', handleAddTodo);