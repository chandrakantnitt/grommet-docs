// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Example from '../../../Example';

const SERIES = [
  {label: 'Gen 7', value: 50},
  {label: 'Gen 8', value: 20},
  {label: 'Gen 9', value: 10},
  {label: 'Gen 10', value: 30}
];

export default class Meter13a extends Component {

  constructor () {
    super();
    this.state = {};
  }

  render () {
    const { index } = this.state;

    let value, label;
    if (index >= 0) {
      value = SERIES[index].value;
      label = SERIES[index].label;
    } else {
      value = 0;
      SERIES.forEach(serie => value += serie.value);
      label = 'Total';
    }

    return (
      <Example align="center" code={
        <Box>
          <Meter type="circle" series={SERIES} label={false} max={100}
            threshold={90}
            onActive={(index) => this.setState({ index: index })} />
          <Box direction="row" justify="between" align="center">
            <Label size="small">0 GB</Label>
            <Value value={value} units="GB" align="center" label={label} />
            <Label size="small">100 GB</Label>
          </Box>
        </Box>
      } />
    );
  }

};
