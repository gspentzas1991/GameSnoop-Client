import React,{useState,useEffect} from 'react'

function Filter(props){

    const [serverName, setServerName] = useState('');
    const [serverRegion, setServerRegion] = useState('');
    const [filters,setFilters] = useState({serverName:serverName,serverRegion:serverRegion});

    React.useEffect(() => {
        setFilters({serverName:serverName,serverRegion:serverRegion})
        props.onFilterChange(filters);  
      }, [filters,serverName,serverRegion]);
    


    return (
    <div>
        Server Filters
        <div>
            <form>
                <label>
                    ServerName:
                    <input type="text" name="serverName" onChange={(event) =>{setServerName(event.target.value)}} />
                </label>
                <label>
                    ServerRegion:
                    <input type="text" name="serverRegion" onChange={(event) =>{setServerRegion(event.target.value)}} />
                </label>
                <button type="submit" value="Submit">Search</button>
            </form>
        </div>
    </div>
      );
}
 
export default Filter;
