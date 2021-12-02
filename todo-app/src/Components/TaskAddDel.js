import React from 'react'
import {useMutation} from '@apollo/client'
import { useState } from 'react'
import {CREATE_TASK} from '../GraphQL/Mutation'
import { GET_TASK } from '../GraphQL/Query'
import '../Task.css'

export default function TodoCrud() {

    const [addTask] = useMutation(CREATE_TASK, {
        refetchQueries: [
            GET_TASK
          ],
      }
        
        )
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [isDone, setIsDone] = useState(false)

    return (
        <div className = "TaskAdd">
            <input value={title} placeholder='Title...'
                onChange={e => setTitle(e.target.value)}>
            </input>
            <br/>
            <input value={body} placeholder='Description...'
                onChange={e => setBody(e.target.value)}>
            </input>
            <br/>
            <button 
                onClick={e => {
                    e.preventDefault()
                    if(title==='' || body===''){
                        alert("Title or Description not found..")
                        return
                    }
                    addTask({ variables: { title,body, isDone } })
                    setTitle('')
                    setBody('')
                    setIsDone(false)
                }}
            >
            Add Task</button>
        </div>
    )
}