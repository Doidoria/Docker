import {useState,useEffect} from 'react'
import axios from 'axios'

const Join  = ()=>{
    const [username ,setUsername] = useState()
    const [password ,setPassword] = useState()

    const handleJoin = (e)=>{
        axios
            .post(
                'http://localhost:8090/join',
                 {"username" : username, "password" : password},
                 {headers:{ 'Content-Type' : 'application/json' }}
            )
            .then(resp=>{
                console.log(resp)
            })
            .catch(err=>{console.log(err)})
    }
    return (
        <>
            <h1>JOIN PAGE</h1>
            Username : <input type="text" name="username"     onChange={e=>setUsername(e.target.value)} /><br />
            Password : <input type="password" name="password" onChange={e=>setPassword(e.target.value)} /><br />
            <button onClick={handleJoin}>회원가입</button>
        </>
    )
}

export default Join