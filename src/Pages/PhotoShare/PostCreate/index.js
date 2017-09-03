import React, { Component } from 'react';

import { createPost } from '../../../Api';
import Card, { CardHeader, CardBody } from '../../../Components/Card';
import HeroImage from '../../../Components/HeroImage';
import Button from '../../../Components/Button';
import Dropzone from 'react-dropzone';

export default class PostCreate extends Component {
  state = {
    imageData: null,
    imageUrl: null,
    imageName: null,
    body: "",
  };
  imageUpload(image) {
    console.log("HERE");
    const file = image[0];
    console.log(file);
    const reader = new FileReader();
    this.setState({ loading: true, imageUrl: file.preview, imageName: file.name});
    reader.onload = (event) => {
      this.setState({ loading: false, imageData: event.target.result });
      console.log(this.state);
    };
    reader.readAsDataURL(file);

  }
  submit() {
    var base64result = this.state.imageData.split(',')[1];
    createPost(this.state.body, this.state.imageName, base64result).then((response) => {
      console.log(response);
    });
  }
  render() {
   return (
      <div className="container">
        <div className="row">
          <Card>
            <CardHeader>
              Create Post
            </CardHeader>
            <CardBody>
              <Dropzone
                styles="width: 100px; height: 100px;"
                onDrop={this.imageUpload.bind(this)}
              >
              </Dropzone>
              <div>
                <textarea onChange={(event) => this.setState({ body: event.target.value })}>
                    {this.state.body}
                </textarea>
                <Button onClick={this.submit.bind(this)}>Submit</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
