import Servers from './Servers/Servers'
import Navbar from './Navbar/Navbar'
import Filter from './Filter/Filter'
import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/esm/Button'


function App(){

  const [servers,setServers]=useState([])
  const [loadingServers,setLoadingServers]=useState(false)

  /*
    Makes a request to /servers with the received filters from the Filters componen 
    and updates the data.servers object
  */
  function getServers(filters){
    setLoadingServers(true)
    setServers([])
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
            setLoadingServers(false)
        }
    )
  }

  //Makes a request to /allServers and updates the data.servers object
  function getFullServerList(){
    setLoadingServers(true)
    setServers([])
    fetch(`/allServers`)
    .then(
        res => res.json()
    )
    .then(
        data => {
            setServers(data.servers)
            setLoadingServers(false)
        }
    )
  }

  return(
    <div className="App">
      <Navbar />
      <div className="content">

        <Filter submitFilter={(filters)=> getServers(filters)}/>
        <Servers loadingServers={loadingServers} servers = {servers}/>
      </div>
    </div>
  )
}

export default App