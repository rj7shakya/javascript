import React, { useState, useEffect } from 'react'

const Logs = () => {
  const [logs,setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getLogs();
    //eslint-disable-next-line
  },[])

  const getLogs = async ()=>{
    setLoading(true);
    const res = await fetch('/logs')
    const data = await res.json()

    setLogs(data);
    setLoading(false);
  }

  if(loading){
    return <h4>Loaing....</h4>  
  }

  return (
    <div>
      
    </div>
  )
}

export de
  const [logs,setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLogs = async ()=>{
    setLoading(true);
    const res = await fetch('/logs')
    const data = awa
  }
fault Logs
