import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Select from 'react-select';
import TooltipSlider, { handleRender } from 'rc-slider';

//Generates a filter object from each user input, and on submit it executes props.submitFilter to return the filter data
function Filter(props){

    //Selection options

    const clanSizeOptions = [
        { value: 'Two', label: 'Two' },
        { value: 'Four', label: 'Four' }
      ];
      
    const serverMultiplayerOptions = [
        { value: 'PvP', label: 'PVP' },
        { value: 'PvE', label: 'PVE' }
      ];

      const dedicatedServerOptions=[
        { value: '', label: 'Any' },
        { value: 'Dedicated', label: 'Dedicated' },
        { value: 'Public', label: 'Public' }
      ]

      const SecureServerOptions=[
        { value: '', label: 'Any' },
        { value: 'Locked', label: 'Password Protected' },
        { value: 'Open', label: 'Open' }
      ]

      const DifficultyServerOptions=[
        { value: '', label: 'Any' },
        { value: 'Hardcore', label: 'Hardcore' },
        { value: 'Casual', label: 'Casual' }
      ]

    //states for expanding the GUI of filters
    const [expandMultiplayer, setExpandMultiplayer] = useState(false);
    const [expandOptions, setExpandOptions] = useState(false);
    
    //states for values in filters
    const [serverName, setServerName] = useState([]);
    const [multiplayerSelection, setMultiplayerSelection] = useState(serverMultiplayerOptions);
    const [clanSize, setClanSize] = useState([2, 4])
    const [dedicationSelection, setDedicationSelection] = useState(dedicatedServerOptions[0]);
    const [securitySelection, setSecuritySelection] = useState(SecureServerOptions[0]);
    const [difficultySelection, setDifficultySelection] = useState(DifficultyServerOptions[0]);
    //to be deleted
    const [clanSizeSelection, setClanSizeSelection] = useState([]);

    //Generates a filter object from the values of filter inputs
    function sendFilters(){
        var filters = {serverName:'',serverType:[],clanSize:[],dedicated:'',secure:'',difficulty:''}
        filters.serverName = serverName
        filters.clanSize = clanSize
        filters.serverType = multiplayerSelection.map(x=>x.value)
        filters.dedicated = dedicationSelection.value
        filters.secure = securitySelection.value
        filters.difficulty = difficultySelection.value
        props.submitFilter(filters)
    }
    return (
    <Container className='filterContainer'>
        <Row>
            ServerName
            <input type="text" name="serverName" value={serverName} onChange={e => setServerName(e.target.value)} />
        </Row>
        <Row>
            <Col> 
                Clan Size
                <TooltipSlider
                    range
                    min={0}
                    max={10}
                    value={clanSize} 
                    onChange={setClanSize}
                    tipFormatter={(value) => `${value}!`}
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <Button
                    onClick={() => setExpandMultiplayer(!expandMultiplayer)}
                    aria-controls="example-collapse-text"
                    aria-expanded={expandMultiplayer}>
                    Multiplayer Mode
                </Button>
                <Collapse in={expandMultiplayer}>
                <Row>
                    <Col>
                        <Select
                            defaultValue={multiplayerSelection}
                            onChange={setMultiplayerSelection}
                            options={serverMultiplayerOptions}
                            isMulti= {true}
                        />
                    </Col>
                </Row>
                </Collapse>
                
            </Col>
        </Row>
        <Row>
            <Col>
                <Button
                    onClick={() => setExpandOptions(!expandOptions)}
                    aria-controls="example-collapse-text"
                    aria-expanded={expandOptions}>
                    Options
                </Button>
                <Collapse in={expandOptions}>
                <Row>
                    <Col>
                        Dedicated Server
                        <Select
                            defaultValue={dedicationSelection}
                            onChange={setDedicationSelection}
                            options={dedicatedServerOptions}
                        />
                    </Col>
                    <Col>
                        Password Protection
                        <Select
                            defaultValue={securitySelection}
                            onChange={setSecuritySelection}
                            options={SecureServerOptions}
                        />
                    </Col>
                    <Col>
                        Difficulty
                        <Select
                            defaultValue={difficultySelection}
                            onChange={setDifficultySelection}
                            options={DifficultyServerOptions}
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
