document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete" onclick="deleteTask(this.parentNode)">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function deleteTask(task) {
        task.parentNode.removeChild(task);
    }
});
