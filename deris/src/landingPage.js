import React from 'react';
import ReactDOM from 'react-dom';

function EthereumAddressInput (props){
    return (
        <form onSubmit={props.onSubmit}>
        <div>Ethereum Addresss:</div>
        <label>
            <input type="text" onChange={props.onChange}/>
        </label>
        <input type="submit" value="Submit" />
        </form>
    );
}

// Class for the entire landing page. Shows a header and receives input for the address
class LandingPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ethereumAddress: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    // eventually make this inherited from the app in order to move to the new page
    onSubmit(event) {
        alert('changing to ' + this.state.ethereumAddress)
    }
    // keep tracking the user input to use for submission
    onChange(event) {
        this.setState({ethereumAddress: event.target.value})
    }
    // render the input feild
    renderAddressInput () {
        return <EthereumAddressInput 
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                ></EthereumAddressInput>
    }
    render () {
        return (
            <div class='LandingPage'>
                <div class='DerisHeader'>DERIS</div>
                <div class='AddressInputContainer'>{this.renderAddressInput()}</div>
                <div>Your ethereumAddress is: {this.state.ethereumAddress}</div>
            </div>
            
        )
    }
}

export default LandingPage;