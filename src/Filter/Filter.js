import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';


//Generates a filter object from each user input, and on submit it executes props.submitFilter to return the filter data
function Filter(props){

    const [open, setOpen] = useState(false);
    var filters = {serverName:'',pvp: false, pve:false, secure:false, clanSize:0}

    return (
    <Container>
        <Row>
            <Col>Server Filters</Col>
        </Row>
        <Row>
            <Col sm={3}> 
                <label>
                    ServerName:
                </label>
            </Col>
            <Col sm={9}>
                <input type="text" name="serverName" onChange={(event) =>{filters.serverName = event.target.value;}} />
            </Col>
        </Row>
        <Row>
            <Col sm={3}> 
                <label>
                    ClanSize:
                </label>
            </Col>
            <Col sm={9}>
                <input type="number" name="clanSize" onChange={(event) =>{filters.clanSize = event.target.value;}} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>
                    ServerTypes
                </Button>
                <Collapse in={open}>
                <Row>
                    <Col>
                        <label>
                            PVP
                            <input type="checkbox" onChange={(event)=>{filters.pvp=event.target.checked;} }/>
                        </label>
                    </Col>
                    <Col>
                        <label>
                            PVE
                            <input type="checkbox" onChange={(event)=>filters.pve=event.target.checked} />
                        </label>
                    </Col>
                    <Col>
                        <label>
                            Private Servers:
                            <input type="checkbox" onChange={(event)=>{filters.secure=event.target.checked} }/>
                        </label>
                    </Col>
                </Row>
                </Collapse>
            </Col>
        </Row>
        <Row>
            <Button onClick={()=>props.submitFilter(filters)}>Search</Button>
        </Row>
    </Container>
    );
}
 
export default Filter;
