import React from 'react';
import './styles/landingPage.css'
import { Jumbotron } from 'react-bootstrap';
import {TwoButtonTextSubmission} from '../modules/textInputs'
import { isValidAddress } from '../js_modules/ethereumUtils.js'
import { Form, Button } from 'react-bootstrap';
import { InvalidTextInputError } from '../modules/errors';


const INVALID_ADDRESS_MSG = 'ERROR: Ethereum address provided is not a valid address'

/**
 * The module for the landing page. Uses a two button submission
 * 
 * @param {object}  props       Properties passed in from the App. Should have a 
 *                              onSubmit:   function that takes payload {ethereumAddress: string, role: string}
 *                                          role is either 'rider' or 'driver'
 *                              show:       boolean to render the component
 *                              
 * 
 * @returns {React.Component}   The react component for the entire page
 */
class LandingPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ethereumAddress: '',
            validEthereumAddress: true,
        }
        //this.onChange = this.onChange.bind(this);
        this.onRiderSubmit = this.onRiderSubmit.bind(this);
        this.onDriverSubmit = this.onDriverSubmit.bind(this);
        this.checkAndSubmitAddress = this.checkAndSubmitAddress.bind(this);
    }
    // keep tracking the user input to use for submission

    componentDidMount(){
        //this.setState({ethereumAddress: event.target.value})
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id'); //Sample address: http://localhost:3000/?id=55&name=test
        console.log(id);
        this.setState({ethereumAddress: id}) // here it will be id
    }
    // onChange(event) {
    //     this.setState({ethereumAddress: event.target.value})
    //     const queryParams = new URLSearchParams(window.location.search);
    //     const id = queryParams.get('id'); //Sample address: http://localhost:3000/?id=55&name=test
    //     console.log(id);
    //     //this.setState({ethereumAddress:"0x456BD0F3417C6b61DD54AEF063152c2a3FAb6239"}) // here it will be id
    // }

    /**
     * Check if the ethereum is valid. if not, show a warning, otherwise pass it up
     * 
     * @param {string} role either 'rider' or 'driver' 
     */
    checkAndSubmitAddress(role){
        console.log("Check Submit is called");
        if (!isValidAddress(this.state.ethereumAddress) && !this.props.DEV){
            this.setState({
                ethereumAddress: null,
                validEthereumAddress: false
            })
        }
        else {
            this.props.onSubmit({ethereumAddress: this.state.ethereumAddress, role: role});
        }

    }

    // Do different things based on which button is clicked
    onRiderSubmit(event) {
        // const queryParams = new URLSearchParams(window.location.search);
        // const id = queryParams.get('id'); //Sample address: http://localhost:3000/?id=55&name=test
        // console.log(id + " Rider");
        // this.setState({ethereumAddress:"0x456BD0F3417C6b61DD54AEF063152c2a3FAb6239"}); // here it will be id
        
        event.preventDefault();
        this.checkAndSubmitAddress('rider');
    }
    onDriverSubmit(event) {
        // const queryParams = new URLSearchParams(window.location.search);
        // const id = queryParams.get('id'); //Sample address: http://localhost:3000/?id=55&name=test
        // console.log(id + " driver");
        // this.setState({ethereumAddress:"0x456BD0F3417C6b61DD54AEF063152c2a3FAb6239"}); // here it will be id
        
        event.preventDefault();
        this.checkAndSubmitAddress('driver');
    }

    // render the input field
    renderAddressInput () {
        const primary = {
            submitFunction: this.onRiderSubmit, label: 'Rider'
        }
        const secondary = {
            submitFunction: this.onDriverSubmit, label: 'Driver'
        }
        return (
            <div className="LandingPageInputsContainer">
                <Form onSubmit={primary.submitFunction}> 
                    {/* <Form.Group controlId="formBasicPassword">
                        <Form.Label>Ethereum Address</Form.Label>
                        <Form.Control onChange={this.onChange}/>
                    </Form.Group> */}
                    <InvalidTextInputError
                            show={!this.state.validEthereumAddress}
                            errorMessage={INVALID_ADDRESS_MSG}
                    ></InvalidTextInputError>
                    <div className="TwoButtonTextSubmissionButtonContainer">
                        <Button className="PrimaryButton" type="submit" size="lg" block>{primary.label}</Button>
                        <Button className="SecondaryButton" size="lg" onClick={secondary.submitFunction} block>{secondary.label}</Button>
                    </div>
                </Form>
                {/* <TwoButtonTextSubmission 
                    inputLabel="Ethereum Address"
                    primary={primary}
                    secondary={secondary}
                    onChange={this.onChange}
                    validInput={this.state.validEthereumAddress}
                    invalidInputMessage={INVALID_ADDRESS_MSG}
                ></TwoButtonTextSubmission> */}
            </div>
            
        )
    }
    render () {
        if (!this.props.show){
            return (<div className="emtpy"></div>)
        }
        return (
            <div className='LandingPage'>
                <Jumbotron fluid>
                    <h1 className='DerisHeader'>Decentralised Ride Sharing with SSI</h1>
                </Jumbotron>
                <div className='AddressInputContainer'>{this.renderAddressInput()}</div>
            </div>
            
        )
    }
}

export default LandingPage;