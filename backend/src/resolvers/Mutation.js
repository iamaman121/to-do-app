import uuidv4 from 'uuid/v4'

const Mutation = {
    createTask(parent, args, { db }, info) {
        const task = {
            id: uuidv4(),
            ...args.data
        }
        db.tasks.push(task)
        return task
    },
    deleteTask(parent, args, { db }, info) {
        const taskIndex = db.tasks.findIndex((task) => task.id === args.id)
        if (taskIndex === -1) {
            throw new Error('Task not found')
        }
        const deletedTasks = db.tasks.splice(taskIndex, 1)
        return deletedTasks[0]
    },
    updateTask(parent, args, { db }, info) {
        const { id, data } = args
        const task = db.tasks.find((task) => task.id === id)
        if (!task) {
            throw new Error('Task not found')
        }
        if (typeof data.title === 'string') {
            task.title = data.title
        }
        if (typeof data.body === 'string') {
            task.body=data.body
        }
        

        if (typeof data.isDone === 'boolean') {
            task.isDone = data.isDone
        }

        return task
    }
}

export { Mutation as default }