import React, { Component } from 'react';
import actions from  '../actions';
import Analytics from './Analytics';

const AnalyticsSummary = (props) => (
  <div className="analytics-bar">
    <Analytics updates={props.updates} />
  </div>
);

export default AnalyticsSummary;
