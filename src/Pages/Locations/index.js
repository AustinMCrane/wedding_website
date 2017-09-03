import React, { Component } from 'react';
// import _ from 'lodash';
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";

import { getAllLocations } from '../../Api';
import Card, { CardHeader, CardBody } from '../../Components/Card';
import HeroImage from '../../Components/HeroImage';
import './styles.css';

const googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyBdnAVuK01rPveHiHBzPEsjMLWic8oO_eY"

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      googleMapURL={googleMapURL}
      defaultZoom={3}
      defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      onClick={props.onMapClick}
    >
      {props.markers.map((marker, index) => (
        <Marker
          {...marker}
          onRightClick={() => null}
        />
      ))}
  </GoogleMap>
));

export default class Locations extends Component {
  state = {
    timelines: [],
  };
  componentDidMount() {
    this.getTimelines();
  }
  getTimelines() {
    getAllLocations().then((response) => {
      this.setState({ timelines: response.data.list });
    });
  }
  render() {
    let timelines = this.state.timelines.map((t) => {
      return (
        <Card key={t.id}>
          <CardHeader>
            <HeroImage src={ t.imageUrl } />
          </CardHeader>
          <CardBody className="mapBody">
            <GettingStartedGoogleMap
              containerElement={
              <div style={{ height: `100%` }} />
              }
              mapElement={
              <div style={{ height: `100%` }} />
              }
              markers={[]}
            />
         </CardBody>
        </Card>
      );
    });
    return (
      <div className="container">
        <h1>Directions</h1>
        <div className="row">
          { timelines }
        </div>
      </div>
    );
  }
}
