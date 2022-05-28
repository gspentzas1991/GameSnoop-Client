import React,{useState,useEffect} from 'react'

//Generates a filter object from each user input, and on submit it executes props.submitFilter to return the filter data
function Filter(props){
    
    var filters = {serverName:'',serverRegion:''}

    return (
    <div>
        Server Filters
        <label>
            ServerName:
            <input type="text" name="serverName" onChange={(event) =>{filters.serverName = event.target.value;}} />
        </label>
        <label>
            ServerRegion:
            <input type="text" name="serverRegion" onChange={(event) =>{filters.serverRegion = event.target.value;}} />
        </label>
        <button onClick={()=>props.submitFilter(filters)}>Search</button>
    </div>
      );
}
 
export default Filter;
