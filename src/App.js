import Servers from './Servers/Servers'
import Navbar from './Navbar/Navbar'
import Filter from './Filter/Filter'
import React,{useState,useEffect} from 'react'


function App(){

  const title = "GameSnoop"
  const [filters, setFilters] = useState({serverName:'',serverRegion:''});

  return(
    <div className="App">
      <Navbar />
      <div className="content">

        <Filter onFilterChange={(value)=> {setFilters(value)}}/>
        <Servers  filters={filters}/>
      </div>
    </div>
  )
}

export default App