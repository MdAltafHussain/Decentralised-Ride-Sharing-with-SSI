import React from 'react';
import './styles/riderPage.css'
import { TwoButtonTwoTextSubmission } from '../modules/textInputs.jsx'
import { withScriptjs } from "react-google-maps";
import  Map  from '../modules/googleMap.jsx'
import { totalRouteDistance } from '../js_modules/googleMapUtils.js'
/**
 * The module for the rider page
 * 
 * @param {object}  props       Properties passed in from the App. Should have 
 *                              onSubmit: function that takes payload 
 *                                  {
 *                                      startLocation:  string, 
 *                                      endLocation:    string,
 *                                      requestType:    string
 *                                  }
 *                                  request type is either 'request' or 'cancel'
 *                              show: boolean to render the page
 * 
 * @returns {React.Component}   The react component for the entire page
 */

const API_KEY = 'AIzaSyChykMQlbWKcQy-qixkVnXCrGVoy-vdlM4'
const MapLoader = withScriptjs(Map);
class RiderPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            startLocation: '',
            endLocation: '',
            startAddress: '',
            endAddress: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onRequestSubmit = this.onRequestSubmit.bind(this);
        this.onCancelSubmit = this.onCancelSubmit.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.onRouteMade = this.onRouteMade.bind(this);
    }
    // keep tracking the user input to use for submission. need to discern by name
    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
    // submit functions for the request and cancel buttons
    onRequestSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({
            startLocation:  this.state.startLocation,
            endLocation:    this.state.endLocation,
            requestType:    'request'
        });
    }
    onCancelSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({
            startLocation:  this.state.startLocation,
            endLocation:    this.state.endLocation,
            requestType:    'cancel'
        });
    }

    onMapClick(payload) {
        if (!this.state.startLocation) {
            this.setState({
                startLocation: payload.location,
                startAddress: payload.address
            })
        }
        else {
            this.setState({
                endLocation: payload.location,
                endAddress: payload.address
            })
        }

    }

    onRouteMade(payload) {
        const {directions} = payload;
        console.log(directions)
        const totalDistance = totalRouteDistance(directions.routes[0]);
        console.log(totalDistance);
    }

    render() {
        if (!this.props.show){
            return (<div class="empty"></div>)
        }
        const inputFieldOne = {label: 'Pick-up Location', value: this.state.startAddress};
        const inputFieldTwo = {label: 'Drop-off Location', value: this.state.endAddress};
        const primaryButton = {submitFunction: this.onRequestSubmit, label: 'Request'};
        const secondaryButton = {submitFunction: this.onCancelSubmit, label: 'Cancel'};
        const directions = this.state.startLocation && this.state.endLocation ? {startLoc: this.state.startLocation, endLoc: this.state.endLocation} : null;

        return (
            <div class="RiderPage">
            <TwoButtonTwoTextSubmission
                inputFieldOne={inputFieldOne}
                inputFieldTwo={inputFieldTwo}
                primaryButton={primaryButton}
                secondaryButton={secondaryButton}
                onChange={this.onChange}
            ></TwoButtonTwoTextSubmission>
            <MapLoader
                googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + API_KEY }
                loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
                onClick={this.onMapClick}
                onRouteMade={this.onRouteMade}
                directions={directions}
            />
            </div>
        )
    }
}

export default RiderPage;