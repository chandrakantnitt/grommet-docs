// (C) Copyright 2015-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';
import Paragraph from 'grommet/components/Paragraph';

Paragraph.displayName = 'Paragraph';

const TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`;

export default class ParagraphDoc extends Component {

  render () {
    return (
      <DocsArticle title="Paragraph" colorIndex="neutral-3">

        <p>A paragraph of text.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>size       small|medium|large|xlarge</code></dt>
            <dd>The size of the Paragraph text.
              Defaults to <code>medium</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>
          <Example name="Default" code={
            <Paragraph>{TEXT} <a>link</a></Paragraph>
          } />
          <Example name="Small" code={
            <Paragraph size="small">{TEXT} <a>link</a></Paragraph>
          } />
          <Example name="Large" code={
            <Paragraph size="large">{TEXT} <a>link</a></Paragraph>
          } />
          <Example name="XLarge" code={
            <Paragraph size="xlarge">{TEXT} <a>link</a></Paragraph>
          } />
        </section>

      </DocsArticle>
    );
  }
};
