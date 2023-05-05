import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistsApi} from "../../api/todolists-api";

export default {
    title: 'API'
}
const settings ={
    withCredentials: true,
    headers: {
        "API-KEY": "a22037d2-5c98-4d70-ad45-1b7b1066eaea"
    }
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistsApi.getTodolists()
            .then((res)=>{
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.postTodolists("Wow")
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.deleteTodolists('dbda022a-ccdf-48a5-b92c-3851248d186e')
            .then((res)=>{
                setState(res.data)
            })


    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.putTodolists('123=r3fds-34tgd', "WOW")
            .then((res)=>{
                setState(res.data)
            })


    }, [])

    return <div>{JSON.stringify(state)}</div>
}
//<-------TASK-API--------->
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        const todolistId = '4344cf36-8e5d-4157-b126-0e24c1c84137'
        todolistsApi.getTasks(todolistId)
            .then((res)=>{
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '4344cf36-8e5d-4157-b126-0e24c1c84137'
        const title = 'Task - 3'
        todolistsApi.postTask(todolistId, title)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<any>('')
    const [todolistId, setTodolistId] = useState<any>('')
    const deleteTask =()=>{
        todolistsApi.deleteTask(todolistId,taskId)
            .then((res)=>{
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
    <div>
        <input placeholder={"todolistId"} value={todolistId} onChange={(e)=>{setTodolistId(e.currentTarget.value)}}/>
        <input placeholder={"taskId"} value={taskId} onChange={(e)=>{setTaskId(e.currentTarget.value)}}/>
        <button onClick={deleteTask}>delete task</button>
    </div>
    </div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '4344cf36-8e5d-4157-b126-0e24c1c84137'
        const taskId = 'c237ed06-2f02-4361-9209-00c68d0c1699'
        const title = 'Task - upDate'
        todolistsApi.putTask(todolistId, taskId, title)
            .then((res)=>{
                setState(res.data)
            })


    }, [])

    return <div>{JSON.stringify(state)}</div>
}