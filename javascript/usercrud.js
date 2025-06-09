let allData = []
//HOC
const saveData = ()=>{
    let n = document.frm.name.value
    let a = document.frm.age.value
    let id= document.frm.userid.value
    let data = JSON.parse(localStorage.getItem("userdata"))
    let len = data!=null ? data.length+1 :1
    if(id != ''){
        //update
        allData = data.map((i)=>{
                if(i.id == id){
                    i.name = n
                    i.age = a
                }
                return i
        })
        
    } else {
        //insert
        let obj = {
            id:len,
            name:n,
            age:a
        }
        allData.push(obj)
    }
    localStorage.setItem("userdata",JSON.stringify(allData))
    dispData()
    document.frm.reset()
    document.frm.userid.value = ''
}
const dispData = ()=>{
    let data = JSON.parse(localStorage.getItem("userdata"))
    let tr = ''
    data.map((i)=>{
        tr += `
                <tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.age}</td>
                <td>
                    <button onclick="editData(${i.id})">Edit</button>
                    <button onclick="deleteData(${i.id})">Delete</button>
                </td>
                </tr>
        `
    })
    document.getElementById("userdata").innerHTML = tr
}
const deleteData = (id)=>{
    let data = JSON.parse(localStorage.getItem("userdata"))
    let res = data.filter((i)=> i.id != id)
    localStorage.setItem("userdata",JSON.stringify(res))
    dispData()
}

const editData = (id)=>{
    let data = JSON.parse(localStorage.getItem("userdata"))
    //[1,2,3,4] = id =3  [3]
    let res = data.find((i)=> i.id == id)
    document.frm.name.value = res.name
    document.frm.age.value = res.age
    document.frm.userid.value = id
}

dispData()