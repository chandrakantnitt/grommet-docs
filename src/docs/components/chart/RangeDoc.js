// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Base, Range, Layers } from 'grommet/components/chart/Chart';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

export default class RangeDoc extends Component {

  render () {
    return (
      <DocsArticle title="Chart Range" colorIndex="neutral-3">

        <p>A means of selecting a range within
          a <NavAnchor path={`/docs/chart`}>Chart</NavAnchor>. It is structured
          as a specified number of slots that the user can select by clicking
          and dragging across.
          It should be placed inside a <NavAnchor path={`/docs/chart-layers`}>
          Layers</NavAnchor> component.</p>

        <Example code={
          <Chart>
            <Base />
            <Layers>
              <Range count={5} active={{ start: 1, end: 3 }} />
            </Layers>
          </Chart>
        }/>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>active       {'{start: {number}, end: {number}}'}
              </code></dt>
            <dd>The starting and ending selected slot indexes.</dd>
            <dt><code>count        {'{number}'}</code></dt>
            <dd>The number of slots, including both ends.
              This property is required.</dd>
            <dt><code>onActive     {"{function ({start: {number}, " +
              "end: {number}})}"}</code></dt>
            <dd>This function is called when the user changes the selected
              range.</dd>
            <dt><code>vertical     true|false</code></dt>
            <dd>Whether the slots should be layed out horizontally
              or vertically.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
