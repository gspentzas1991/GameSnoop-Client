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
    function getClanSize(gameTypes){
        var clanSize=0
        var csGameType = gameTypes.filter((element)=>{console.log(element);return element.includes('cs')})[0]
        console.log(csGameType)
        if(csGameType){
            clanSize = csGameType.split('cs')[1]
        }
        return clanSize
    }

    return(
        <Container>
            <Row>
                <Col><h2>Servers</h2></Col>
            </Row>
            {(typeof props.servers === 'undefined') ? (
                <Row>Loading...</Row>
            ):
            (<ListGroup>
                {
                    props.servers.map((server,i)=>(
                        <ListGroup.Item key={i}>
                            <b>{server['name']}</b> - players : {server['players']} / {server['max_players']}
                            <ReactTooltip />
                            <div className='serverIconList'>
                                {server['isSecure']?<FaLock data-tip="Password Protected" />:<span></span>}
                                {server['isDedicated']?<FaUserSecret data-tip="Dedicated" />:<span></span>}
                                {server['gametypes'].some((element)=>element=='pve')?<GiMonsterGrasp data-tip="PvE" />:<span></span>}
                                {server['gametypes'].some((element)=>element=='pvp')?<RiSwordLine data-tip="PvP" />:<span></span>}
                            </div>
                            {getClanSize(server['gametypes'])>0?<div>Clan Size : {getClanSize(server['gametypes'])}</div>:<span></span>}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
            )}
        </Container>
    );
}
export default Servers;
