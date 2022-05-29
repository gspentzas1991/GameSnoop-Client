import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Select from 'react-select';



//Generates a filter object from each user input, and on submit it executes props.submitFilter to return the filter data
function Filter(props){

    const [serverTypeOpen, setServerTypeOpen] = useState(false);
    const [serverTypeSelectedOption, setServerTypeSelectedOption] = useState([]);
    const [clanSizeOpen, setclanSizeOpen] = useState(false);
    const [clanSizeSelectedOption, setClanSizeSelectedOption] = useState([]);
    var filters = {serverName:'',serverType:[],clanSize:[]}

    const clanSizeOptions = [
        { value: 'Two', label: 'Two' },
        { value: 'Four', label: 'Four' }
      ];
      
    const serverTypeOptions = [
        { value: 'PvP', label: 'PVP' },
        { value: 'PvE', label: 'PVE' },
        { value: 'Dedicated', label: 'Dedicated' },
        { value: 'Hardcore', label: 'Hardcore' }
      ];

     function sendFilters(){
        filters.clanSize = clanSizeSelectedOption.map(x=>x.value)
        filters.serverType = serverTypeSelectedOption.map(x=>x.value)
        props.submitFilter(filters)
     }
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
            <Col> 
                <Button
                    onClick={() => setclanSizeOpen(!clanSizeOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={clanSizeOpen}>
                    ClanSize
                </Button>
                <Collapse in={clanSizeOpen}>
                <Row>
                    <Select
                        defaultValue={clanSizeSelectedOption}
                        onChange={setClanSizeSelectedOption}
                        options={clanSizeOptions}
                        isMulti= {true}
                    />
                </Row>
                </Collapse>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button
                    onClick={() => setServerTypeOpen(!serverTypeOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={serverTypeOpen}>
                    ServerTypes
                </Button>
                <Collapse in={serverTypeOpen}>
                <Row>
                    <Col>
                        <Select
                            defaultValue={serverTypeSelectedOption}
                            onChange={setServerTypeSelectedOption}
                            options={serverTypeOptions}
                            isMulti= {true}
                        />
                    </Col>
                </Row>
                </Collapse>
                
            </Col>
        </Row>
        <Row>
            <Button onClick={sendFilters}>Search</Button>
        </Row>
    </Container>
    );
}
 
export default Filter;
