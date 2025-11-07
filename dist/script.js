function domLoaded() {
    const addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', addBtnClick);


    const textbox = document.getElementById('taskInput');
    textbox.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addBtnClick();
        }
    });


    document.querySelectorAll('.done-btn').forEach(btn => btn.addEventListener('click', removeTask));
}


function addBtnClick() {
    const textbox = document.getElementById('taskInput');
    const text = textbox.value.trim();
    if (text === '') {
        textbox.focus();
        return;
    }
    addTask(text);
    textbox.value = '';
    textbox.focus();
}


function addTask(newTask) {
    const li = document.createElement('li');
    li.innerHTML = '<span class="task-text"></span><button class="done-btn">&#10006;</button>';
    li.querySelector('.task-text').textContent = newTask;


    const list = document.querySelector('ol');
    list.appendChild(li);


    const lastBtn = li.querySelector('.done-btn');
    lastBtn.addEventListener('click', removeTask);
}


function removeTask(event) {
    const li = event.target.parentNode;
    li.parentNode.removeChild(li);
}


window.addEventListener('DOMContentLoaded', domLoaded);
