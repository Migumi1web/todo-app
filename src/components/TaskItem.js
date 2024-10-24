import React from 'react';

const TaskItem = React.memo(({ task, onToggleComplete, onDelete }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={() => onToggleComplete(task.id)}>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </li>
  );
});

export default TaskItem;