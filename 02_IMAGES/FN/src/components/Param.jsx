
import {useState,useEffect} from 'react'
import axios from 'axios'

const Param = ()=>{

    
    const handleParam1 = ()=>{
        axios.get(`http://localhost:8090/param/01`, 
                {
                    params:{name:'홍길동'},
                    headers:{'Content-Type':'application/json'}
                })
            .then(resp=>{console.log(resp);})
            .catch(err=>{console.log(err);})
    }
    const handleParam2 = ()=>{
        axios.get(`http://localhost:8090/param/02/${'홍길동'}/${55}/${'대구'}`)
            .then(resp=>{console.log(resp);})
            .catch(err=>{console.log(err);})
    }
    const handleParam3 = ()=>{
        axios.post(`http://localhost:8090/param/03`,
            {"name":"하하","age":56,"addr":"서울"},
            {"Content-Type" : "application/json"})
            .then(resp=>{console.log(resp);})
            .catch(err=>{console.log(err);})
    }
    return (
        <div>
                <button onClick={handleParam1}> GET /param/01?name=홍길동</button>
                <hr/>
                <button onClick={handleParam2}> GET /param/02/홍길동/55/대구</button>
                <hr/>
                <button onClick={handleParam3}> POST /param/03/홍길동/55/대구</button>
                <hr/>
        </div>
    )

}

export default Param