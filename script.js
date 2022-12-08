var addTaskButton = document.getElementById('add-task');
var newTaskInput = document.getElementById('new-task');
var taskList = document.getElementById('task-list');

// Add a new task to the list
addTaskButton.addEventListener('click', function() {
  var task = newTaskInput.value;

  if (task) {
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function() {
      li.classList.toggle('completed');
    });
    var deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      li.remove();
    });
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task));
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    newTaskInput.value = '';
  }
});
