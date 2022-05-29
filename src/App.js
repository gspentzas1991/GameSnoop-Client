import Servers from './Servers/Servers'
import Navbar from './Navbar/Navbar'
import Filter from './Filter/Filter'
import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/esm/Button'


function App(){

  const [servers,setServers]=useState([])

  /*
    Makes a request to /servers with the received filters from the Filters componen 
    and updates the data.servers object
  */
  function getServers(filters){
    //We create the url parameters for the request
    var url = `/servers?serverName=${filters.serverName}`
    url += `&serverType=${filters.serverType.join()}`
    url += `&clanSize=${filters.clanSize.join()}`
    url += `&dedicated=${filters.dedicated}`
    url += `&secure=${filters.secure}`
    url += `&difficulty=${filters.difficulty}`
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

  //Makes a request to /allServers and updates the data.servers object
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
      </div>
    </div>
  )
}

export default App