import Servers from './Servers/Servers'
import Navbar from './Navbar/Navbar'
import Filter from './Filter/Filter'
import React,{useState,useEffect} from 'react'


function App(){

  const title = "GameSnoop"

  const [servers,setServers]=useState([])


  function getServers(filters){
    //temporary check to make sure we don't ask for the entire server list
    if(!filters.serverName && !filters.serverRegion){
      return;
    }
    fetch(`/servers?name=${filters.serverName}`)
    .then(
        res => res.json()
    )
    .then(
        data => {
            setServers(data.servers)
        }
    )
}

  return(
    <div className="App">
      <Navbar />
      <div className="content">

        <Filter submitFilter={(filters)=> getServers(filters)}/>
        <Servers  servers = {servers}/>
      </div>
    </div>
  )
}

export default App