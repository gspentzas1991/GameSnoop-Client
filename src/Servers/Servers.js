import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Servers(props)
{

    const [data,setData]=useState({})
    
    useEffect(()=>{
        fetch("/servers").then(
        res => res.json()
        ).then(
        data => {
            setData(data)
            console.log(data)
        }
        )

    },[])

    return(
        <Container>
            <Row>
                <Col><h2>Servers</h2></Col>
            </Row>
            {(typeof props.servers === 'undefined') ? (
                <Row>Loading...</Row>
            ):(
                props.servers.map((server,i)=>(
                <Row key={i}>{server['name']} - players : {server['players']} / {server['max_players']}</Row>
            )))}
        </Container>
    );
}
export default Servers;
