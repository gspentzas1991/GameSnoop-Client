import React,{useState,useEffect} from 'react'

//Generates a filter object from each user input, and on submit it executes props.submitFilter to return the filter data
function Filter(props){
    
    var filters = {serverName:'',pvp: false, pve:false, secure:false, clanSize:0}

    return (
    <div>
        Server Filters
        <label>
            ServerName:
            <input type="text" name="serverName" onChange={(event) =>{filters.serverName = event.target.value;}} />
        </label>
        <label>
            ClanSize:
            <input type="number" name="clanSize" onChange={(event) =>{filters.clanSize = event.target.value;}} />
        </label>
        <label>
            ServerType:
            <label>
                PVP
                <input type="checkbox" onChange={(event)=>{filters.pvp=event.target.checked;} }/>
            </label>
            <label>
                PVE
                <input type="checkbox" onChange={(event)=>filters.pve=event.target.checked} />
            </label>
        </label>
        <label>
            Private Servers:
            <input type="checkbox" onChange={(event)=>{filters.secure=event.target.checked} }/>
        </label>
        <button onClick={()=>props.submitFilter(filters)}>Search</button>
    </div>
      );
}
 
export default Filter;
