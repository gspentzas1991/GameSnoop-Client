import Servers from './Servers/Servers'
import Navbar from './Navbar/Navbar'
import Filter from './Filter/Filter'
import React,{useState,useEffect} from 'react'


function App(){

  const title = "GameSnoop"

  const [servers,setServers]=useState([])


  function getServers(filters){
    console.log(filters)
    //We create the url parameters for the request
    var url = `/servers?serverName=${filters.serverName}`
    url += `&serverType=${filters.serverType.join()}`
    url += `&clanSize=${filters.clanSize.join()}`
    fetch(url)
    .then(
        res => res.json()
    )
    .then(
        data => {
            setServers(data.servers)
        }
    )
  }

  function getFullServerList(){
    fetch(`/allServers`)
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
        <button onClick={getFullServerList}>Get All Servers</button>
      </div>
    </div>
  )
}

export default App