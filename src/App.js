import React,{useState,useEffect} from 'react'

function App(){

  const [data,setData]=useState({})

  useEffect(()=>{
    fetch("/servers").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )

  },[])

  return(
    <div>
      {(typeof data.servers === 'undefined') ? (
        <p>Loading...</p>
      ):(
        data.servers.map((server,i)=>(
          <p key={i}>{server['name']} - players : {server['players']} / {server['max_players']}</p>
        ))
      )}
      <div><a></a></div>
    </div>
  )
}

export default App