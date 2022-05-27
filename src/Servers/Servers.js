import React,{useState,useEffect} from 'react'

function Servers()
{

    const [data,setData]=useState({})
    
    useEffect(()=>{
        //will add params to the query. Example fetch("/servers?name=myServer")
        fetch("/servers")
        .then(
            res => res.json()
        )
        .then(
            data => {
                setData(data)
                console.log(data)
            }
        )

    },[])

    return(
        <div>
            <h2>Servers</h2>
            <div>
            {(typeof data.servers === 'undefined') ? (
                <p>Loading...</p>
            ):(
                data.servers.map((server,i)=>(
                <p key={i}>{server['name']} - players : {server['players']} / {server['max_players']}</p>
                ))
            )}
            </div>
        </div>
    );
}
export default Servers;
