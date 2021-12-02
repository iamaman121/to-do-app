const Query = {
    tasks(parent, args, { db }, info) {
        return db.tasks
    }
}

export { Query as default }