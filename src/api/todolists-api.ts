import axios from "axios";

const settings ={
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "API-KEY": "a22037d2-5c98-4d70-ad45-1b7b1066eaea"
    }
}
const instance = axios.create({
    ...settings
})
//-------TodolistType-------
export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
export type ResponseType<D={}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
//-------TaskType-------
export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
export type GetTasksResponse = {
    error: string | null
    items: Array<TaskType>
    totalCount: number
}
// export type UpdateTaskType = {
//     description: string
//     title: string
//     completed: boolean
//     status: number
//     priority: number
//     startDate: string
//     deadline: string
//     id: string
//     todoListId: string
//     order: number
//     addedDate: string
// }
export const todolistsApi = {
    getTodolists(){
        return instance.get<Array<TodolistType>>(`todo-lists`)

    },
    postTodolists(title: string){
        return instance.post<ResponseType<{item: TodolistType}>>(`todo-lists`, {title: title})
    },
    deleteTodolists(todolistId: string){
    return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    putTodolists(todolistId: string, title: string){
      return  instance.put<ResponseType>(`todo-lists/${todolistId}`,{title: title})
    },
    getTasks(todolistId: string){
        return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
    },
    postTask(todolistId: string, title: string){
        return instance.post<ResponseType>(`todo-lists/${todolistId}/tasks`,{title: title})
    },
    deleteTask(todolistId: string, taskId: string){
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    putTask(todolistId: string, taskId: string, title: string){
        return instance.put<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`, {title: title})
    },
}