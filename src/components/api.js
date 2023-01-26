export function readDataFromLocalStorage() {
  const todoList = localStorage.getItem("todoList");
  if (todoList) return JSON.parse(todoList);
  return [];
}
