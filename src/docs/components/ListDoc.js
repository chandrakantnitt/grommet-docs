// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

const DATA = [
  {uid: 1, face: '', name: 'Alan', mood: 'happy'},
  {uid: 2, face: '', name: 'Chris', mood: 'cool'},
  {uid: 3, face: '', name: 'Eric', mood: 'odd'}
];

export default class ListDoc extends Component {

  constructor () {
    super();
    this._onSingleSelect = this._onSingleSelect.bind(this);
    this._onMultipleSelect = this._onMultipleSelect.bind(this);

    this.state = { singleSelected: [0] };
  }

  // single selection is managed by the caller via state.singleSelection
  _onSingleSelect (selection) {
    this.setState({singleSelected: selection});
  }

  // multiple selection is managed by the List
  _onMultipleSelect (selection) {
    // no-op
  }

  render () {

    let items = DATA.map((datum) => {
      return (
        <ListItem key={datum.uid} justify="between">
          <span>{datum.name}</span>
          <span className="secondary">{datum.mood}</span>
        </ListItem>
        );
    });

    return (
      <DocsArticle title="List" colorIndex="neutral-3">

        <section>
          <p>A list of items. The preferred method of populating items in the
          List is to use ListItem children.</p>
          <List>{items}</List>
        </section>

        <section>
          <h2>List Options</h2>
          <dl>
            <dt><code>onMore         {"{function ()}"}</code></dt>
            <dd>Function that will be called when more data is needed.</dd>
            <dt><code>onSelect       {"{function (selected)}"}</code></dt>
            <dd>Function that will be called when the user selects something.
              When only one item is selected, it returns the zero based index
              for that item. When multiple items are selected, it returns an
              array of those {"item's"} zero based indexes.</dd>
            <dt><code>selectable     true|false|multiple</code></dt>
            <dd>Whether rows are selectable. <code>multiple</code> indicates
              that multiple rows may be selected</dd>
            <dt><code>selected       {"{number}|[{number}, ...]"}</code></dt>
            <dd>The currently selected item(s) using a zero based index.</dd>
          </dl>
        </section>

        <section>
          <h2>ListItem Options</h2>
          <dl>
            <dt><code>onClick     {"function () {...}"}</code></dt>
            <dd>Called when the user clicks on the item. Callers should bind
              an identifier to the function to distinguish between multiple
              items. For example
              <code>{"onClick={this._onClick.bind(this, id)}"}</code></dd>
            <dt><code>selected    true|false</code></dt>
            <dd>Whether this item is currently selected.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
            also available for ListItem.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <List>{items}</List>
          } />
          <Example name="Selectable" code={
            <List selectable={true} selected={this.state.singleSelected}
              onSelect={this._onSingleSelect}>
              {items}
            </List>
          } />
          <Example name="Multi-select" code={
            <List selectable="multiple" onSelect={this._onMultipleSelect}>
              {items}
            </List>
          } />
        </section>

      </DocsArticle>
    );
  }
}
