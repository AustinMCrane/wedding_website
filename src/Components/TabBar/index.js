import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heart from './heart.png';
import photo from './photo.png';
import car from './car.png';

const Bottom = styled.div`
  width: 100%;
  bottom: 0px;
  position: fixed;
  background: white;
`;
const TabBarItem = styled(Link)`
  text-align: center;
  font-size: 1em;
  border: 1px solid #eee;
`;
const TabBar = () => {
  return (
    <Bottom>
      <div className="row">
        <TabBarItem to="/" className="col-xs-4 col-sm-4 col-md-4">
          <img src={heart} />
          <div>
            Bulletin
          </div>
        </TabBarItem>
        <TabBarItem to="/photos" className="col-xs-4 col-sm-4 col-md-4">
          <img src={photo} />
          <div>
            Photo Share
          </div>
        </TabBarItem>
        <TabBarItem to="/locations" className="col-xs-4 col-sm-4 col-md-4">
          <img src={car} />
          <div>
            Directions
          </div>
        </TabBarItem>
      </div>
    </Bottom>
  );
};

export default TabBar;
