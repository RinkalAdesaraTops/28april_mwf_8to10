let userData = []
const saveData = ()=>{
    let data = JSON.parse(localStorage.getItem('userInfo'))
    let nm = document.getElementById('name').value
    let age = document.frm.age.value
    let sal = document.frm.salary.value
    let id = document.frm.uid.value
    if(id!=''){
        //update
        let res = data.map((i,index)=>{
                    if(index == id){
                        i.name = nm
                        i.age = age
                        i.salary = sal
                    }
                    return i
                })
            userData = res
    } else {
        //insert
        let obj = {
        "name":nm,
        "age":age,
        "salary":sal
        }
        userData.push(obj)
    }
    
    localStorage.setItem("userInfo",JSON.stringify(userData))
    disp()
    document.frm.uid.value = ''
    document.frm.reset()
}
const disp = ()=>{
    let data = JSON.parse(localStorage.getItem('userInfo'))
    // let a = JSON.parse(data)
    let tr = ''
    data.map((i,index)=>{
        // template literal 
        tr += `<tr>
                <td>${index+1}</td>
                <td>${i.name}</td>
                <td>${i.age}</td>
                <td>${i.salary}</td>
                <td>
                <button class="btn btn-primary" onclick="editData(${index})">Edit</button>
                <button class="btn btn-danger" onclick= ">Delete</button></td>
        </tr>`
    })
    document.getElementById('alldata').innerHTML = tr
}
const delData = (id)=>{
    let data = JSON.parse(localStorage.getItem('userInfo'))
    let res = data.filter((i,index)=>{
                return index!=id
    })
    localStorage.setItem('userInfo',JSON.stringify(res))
    disp()
}
const editData = (id)=>{
    let data = JSON.parse(localStorage.getItem('userInfo'))
    let res = data.find((i,index)=>{
                return index==id
    })
    document.frm.name.value = res.name
    document.frm.age.value = res.age
    document.frm.salary.value = res.salary
    document.frm.uid.value = id
}
// CRUD
disp()