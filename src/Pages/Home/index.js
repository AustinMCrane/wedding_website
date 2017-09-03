import React, { Component } from 'react';

import { getAllTimelines } from '../../Api';
import Card, { CardHeader, CardBody } from '../../Components/Card';
import HeroImage from '../../Components/HeroImage';
import image from './homepicture.png';

export default class Home extends Component {
  state = {
    timelines: [],
  };
  componentDidMount() {
    this.getTimelines();
  }
  getTimelines() {
    getAllTimelines().then((response) => {
      this.setState({ timelines: response.data.list });
      console.log(response);
    });
  }
  render() {
    let timelines = this.state.timelines.map((t) => {
      return (
        <Card>
          <CardHeader>
            { t.time }
          </CardHeader>
          <CardBody>
            { t.body }
          </CardBody>
        </Card>
      );
    });
    return (
      <div className="container">
        <h1>Bulleton</h1>
        <HeroImage src={image} />
        <div className="row">
          { timelines }
        </div>
      </div>
    );
  }
}
