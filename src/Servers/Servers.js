import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Displays the server list that it receives from props
function Servers(props)
{

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
