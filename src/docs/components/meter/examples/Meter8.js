// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Example from '../../../Example';

export default class Meter8 extends Component {

  render () {
    return (
      <Example align="center" code={
        <Meter type="circle" value={40} units="GB"
          min={{value: 0, label: '0 GB'}} max={{value: 100, label: '100 GB'}}
          threshold={90}
          a11yTitleId='meter-title' a11yDescId='meter-desc' />
      } />
    );
  }

};
