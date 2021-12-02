import React from 'react'
import {useQuery, useMutation} from '@apollo/client'
import { GET_TASK } from '../GraphQL/Query'
import {DELETE_TASK, UPDATE_TASK} from '../GraphQL/Mutation'
import '../Task.css'

export default function TaskList() {

    const {error, loading, data, refetch}= useQuery(GET_TASK)
    const [deleteTask] = useMutation(DELETE_TASK)

    const [updateIsDone] = useMutation(UPDATE_TASK)
    if(loading) return <div>Loading... Please wait</div>

    if(error) return <div>Something went wrong..Try again</div>

    function handleDelete(id) {
            deleteTask(
                {
                    variables : {
                        id
                    }
                }
            )
            refetch()  
        }

        const handleDone = (id, isDone) => {
            updateIsDone(
                { variables : { 
                    id : id,
                    isDone : !isDone
                }
            })
        } 
        

        return (
            <div className='ttask'>
                <h1>Tasks: </h1>
                {data.tasks.map(task =>{
    
                    return (
                    <div className='items-to-display'>
    
                         <span  
                         className={task.isDone?'todo-item':'false-todo-item'}
                         id = "item-id"
                         onClick={() => {
                             handleDone(task.id,task.isDone)
                         }}
                         >
                         <div className="ttask">
                        {task.title}
                        <br/>
                        {task.body}
                        </div>
                        </span>
                        <br />
                        <button className='todo-button' onClick={() => handleDelete(task.id)}>Delete</button>
                       
                       
                    </div>
                    
                    )
    
                })}
    
                
            </div>
        )
    
    }