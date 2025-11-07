import {useState,useEffect} from 'react'
import axios from 'axios'
const Memo = ()=>{
    const [id,setId] = useState()
    const [writer,setWriter] = useState()
    const [text,setText] = useState()
    const [regdate,setRegdate] = useState()
    const [message,setMessage] = useState(null)
    const handleSubmit = ()=>{
        console.log({"id":id,"writer":writer,"text":text,"regdate":regdate})
        //서버로 요청하기 axios 
        axios.post(`http://localhost:8090/memo/add`,
            {"id":id,"writer":writer,"text":text,"regdate":regdate},
            {"Content-Type" : "application/json"})
            
            .then(resp=>{
                console.log(resp);
                setMessage(resp.data)
            })
            .catch(err=>{
                console.log(err);
                setMessage(err.response.data)
            })

    }
    return (
        <div>
            <h2>MEMO ADD</h2>
            <div>
                <label>ID : </label> <span>{ message && message.id}</span> <br />
                <input name="id"  onChange={e=>setId(e.target.value)} />
            </div>
            <div>
                <label>WRITER : </label> <span>{message && message.writer}</span> <br />
                <input name="writer"  onChange={e=>setWriter(e.target.value)}/>
            </div>
            <div>
                <label>TEXT : </label> <span>{message && message.text}</span> <br />
                <input name="text" onChange={e=>setText(e.target.value)}/>
            </div>
            <div>
                <label>REGDATE : </label> <span>{message && message.regdate}</span> <br />
                <input  type="datetime-local" name="regdate" onChange={e=>setRegdate(e.target.value)}/>
            </div>
            <div>
                <button onClick={handleSubmit}>전송</button>
            </div>
        </div>
    )
}

export default Memo;