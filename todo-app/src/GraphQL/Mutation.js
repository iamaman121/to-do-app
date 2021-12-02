import { gql } from '@apollo/client'

const CREATE_TASK = gql`
   mutation createTask($body : String! $title: String! $isDone: Boolean!) {
        createTask(data:{body : $body, title : $title , isDone : $isDone}) {
            id
            body
            title
            isDone
        }
    }
`

const DELETE_TASK = gql`
    mutation deleteTask($id : ID!) {
        deleteTask(id : $id) {
            id
        }
    }
`


const UPDATE_TASK = gql`
mutation updateTask($id : ID!, $isDone : Boolean!) {
        updateTask(id : $id, data:{isDone : $isDone}) {
            id
            isDone
        }
    }
`
export {DELETE_TASK,CREATE_TASK, UPDATE_TASK}