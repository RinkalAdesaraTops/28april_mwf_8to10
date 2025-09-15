import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useApi from './useApi'

const Customhook = () => {
    const [user] = useApi("https://jsonplaceholder.typicode.com/users")
    const [post] = useApi("https://jsonplaceholder.typicode.com/posts")
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then((res)=>setUser(res.data))
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((res)=>setPost(res.data))
    // },[])
  return (
    <div>
        <h3>User Data</h3>
        <table border={'2'}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((i)=>{
                        return (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <h3>Post Data</h3>
        <table border={'2'}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    post.map((i)=>{
                        return (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.body}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Customhook
