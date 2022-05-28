import React,{useState,useEffect} from 'react'

//Displays the server list that it receives from props
function Servers(props)
{

    return(
        <div>
            <h2>Servers</h2>
            <div>
            {(typeof props.servers === 'undefined') ? (
                <p>Loading...</p>
            ):(
                props.servers.map((server,i)=>(
                <p key={i}>{server['name']} - players : {server['players']} / {server['max_players']}</p>
                ))
            )}
            </div>
        </div>
    );
}
export default Servers;
