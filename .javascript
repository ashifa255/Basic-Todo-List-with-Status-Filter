// Basic Todo List with Status Filter

// Create an array of todo items
const todos = [
    { title: "Complete JavaScript project", done: true },
    { title: "Read a book", done: false },
    { title: "Go for a run", done: false },
    { title: "Buy groceries", done: true },
    { title: "Call mom", done: false },
    { title: "Prepare presentation", done: true },
    { title: "Learn React basics", done: false },
    { title: "Clean the house", done: true },
    { title: "Write blog post", done: false },
    { title: "Plan weekend trip", done: true }
];

// Filter todos into completed and ongoing tasks
const completedTodos = todos.filter(todo => todo.done === true);
const ongoingTodos = todos.filter(todo => todo.done === false);

// Display the tasks in the console
console.log("%c✅ Completed Tasks", "color: green; font-size: 16px; font-weight: bold;");
if (completedTodos.length > 0) {
    completedTodos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.title}`);
    });
} else {
    console.log("No completed tasks yet!");
}

console.log("\n%c⏳ Ongoing Tasks", "color: orange; font-size: 16px; font-weight: bold;");
if (ongoingTodos.length > 0) {
    ongoingTodos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.title}`);
    });
} else {
    console.log("No ongoing tasks! Everything is done! 🎉");
}

// Additional statistics
console.log("\n%c📊 Statistics", "color: blue; font-size: 14px; font-weight: bold;");
console.log(`Total tasks: ${todos.length}`);
console.log(`Completed: ${completedTodos.length} (${Math.round((completedTodos.length / todos.length) * 100)}%)`);
console.log(`Ongoing: ${ongoingTodos.length} (${Math.round((ongoingTodos.length / todos.length) * 100)}%)`);
