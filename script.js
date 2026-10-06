const tasks = []

while(true) {
    let task = prompt("Enter a task (ortype 'done' to finish)")

    if (task.toLowerCase() === 'done') {
        break
    }

    tasks.push(task)
}

console.log("Your Todo List:")
tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`)
})

