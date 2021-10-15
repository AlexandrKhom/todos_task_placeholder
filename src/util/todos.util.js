export const sortTodos = (arr) => arr.sort((a, b) => a.completed - b.completed || b.id - a.id);
