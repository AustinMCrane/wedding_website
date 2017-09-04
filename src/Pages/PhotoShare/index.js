import React, { Component } from 'react';

import { getAllPosts } from '../../Api';
import Card, { CardHeader, CardBody } from '../../Components/Card';
import HeroImage from '../../Components/HeroImage';
import { ButtonLink } from '../../Components/Button';
import PostCreate from './PostCreate';
import Spinner from 'react-spinkit';
import {
  Route,
} from 'react-router';

class PostIndex extends Component {
  state = {
    timelines: [],
  };
  componentDidMount() {
    this.getTimelines();
  }
  getTimelines() {
    getAllPosts().then((response) => {
      this.setState({ timelines: response.data.list });
    });
  }
  render() {
    let timelines = this.state.timelines.map((t) => {
      return (
        <Card>
          <CardHeader>
            <a href={t.imageUrl}>
              <HeroImage src={ t.imageUrl }/>
            </a>
          </CardHeader>
          <CardBody>
            { t.body }
          </CardBody>
        </Card>
      );
    });
    if (timelines.length === 0)
      timelines.push(<Spinner />);
    return (
      <div>
        <div className="container">
          <h1>Photo Share</h1>
          <ButtonLink to="/photos/create">New</ButtonLink>
          <div className="row">
            { timelines }
          </div>
        </div>
      </div>
    );
  }
}

const PhotoShare = ({ match }) => {
  return (
    <div>
      <Route exact path={match.url} component={PostIndex} />
      <Route path={match.url + "/create"} component={PostCreate} />
    </div>
  );
};

export default PhotoShare;
