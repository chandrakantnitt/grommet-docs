// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Base, Line, Layers } from 'grommet/components/chart/Chart';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

export default class LineDoc extends Component {

  render () {
    return (
      <DocsArticle title="Chart Line" colorIndex="neutral-3">

        <p>An line graphic in a <NavAnchor path={`/docs/chart`}>
          Chart</NavAnchor>.
          It should be placed inside a <NavAnchor path={`/docs/chart-layers`}>
          Layers</NavAnchor> component.
          There can be multiple Line components in the Chart.</p>

        <Example code={
          <Chart>
            <Base />
            <Layers>
              <Line values={[70, 10, 20, 100, 60]} />
            </Layers>
          </Chart>
        }/>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>activeIndex  {'{number}'}</code></dt>
            <dd>The currently active value index, if any.</dd>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the line color.
              For example: <code>"graph-1"</code></dd>
            <dt><code>max          {"{number}"}</code></dt>
            <dd>The largest possible value. Defaults to 100.</dd>
            <dt><code>min          {"{number}"}</code></dt>
            <dd>The smallest possible value. Defaults to 0.</dd>
            <dt><code>points       true|false</code></dt>
            <dd>Whether to show individual data points for each value.</dd>
            <dt><code>reverse      true|false</code></dt>
            <dd>When true, the indexes count right to left or bottom to
              top.</dd>
            <dt><code>smooth       true|false</code></dt>
            <dd>When true, the line is drawn smoothly.</dd>
            <dt><code>values       {"[{number}, ...]"}</code></dt>
            <dd>An array of number values.</dd>
            <dt><code>vertical     true|false</code></dt>
            <dd>Whether the graphic should be layed out horizontally
              or vertically.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
