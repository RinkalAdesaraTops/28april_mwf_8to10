export const ins = "INSERT"
export const upd = "UPDATE"
export const del = "DELETE"
export const addFunc = (data)=>{
    return { 
        type:ins,
        payload:data

    }
}
// delFunc(10)
export const delFunc = (id)=>{
    return { type:del,
            payload:id

    }
}
export const updFunc = (id,data)=>{
    return { type:upd,
                payload:{id,data}

    }
}