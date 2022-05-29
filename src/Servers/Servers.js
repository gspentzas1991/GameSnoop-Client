import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import { FaBeer } from 'react-icons/fa';
import {RiSwordLine} from 'react-icons/ri'
import {GiMonsterGrasp} from 'react-icons/gi'
import {FaUserSecret} from 'react-icons/fa'
import {FaLock} from 'react-icons/fa'
import ReactTooltip from 'react-tooltip';



//Displays the server list that it receives from props
function Servers(props)
{
    useEffect(() => {
        ReactTooltip.rebuild()
      });

    return(
        <Container>
            <Row>
                <Col><h2>Servers</h2></Col>
            </Row>
            {(typeof props.servers === 'undefined' || props.loadingServers) ? (
                <Row>Loading...</Row>
            ):
            (<ListGroup>
                <ReactTooltip />
                {
                    props.servers.map((server,i)=>(
                        <ListGroup.Item key={i}>
                            <b>{server['name']}</b> - players : {server['players']} / {server['max_players']}
                            <div className='serverIconList'>
                                {server['isSecure']?<b className='serverIcon'><FaLock data-tip="Password Protected" /></b>:null}
                                {server['isDedicated']?<b className='serverIcon'><FaUserSecret data-tip="Dedicated" /></b>:null}
                                {server['isPVE']?<b className='serverIcon'><GiMonsterGrasp data-tip="PvE" /></b>:null}
                                {server['isPVP']?<b className='serverIcon'><RiSwordLine data-tip="PvP" /></b>:null}
                            </div>
                            <div>Clan Size : {server['clanSize']}</div>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
            )
            }
            {(props.servers.length == 0 && !props.loadingServers) &&
                <h2>No Servers Found</h2>
            }
        </Container>
    );
}
export default Servers;
