import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Tile from './Tile';
import {connect} from 'react-redux';


import { deckTilesSelector } from '../selectors/tileSelectors'


export const Deck = React.createClass({
  mixins: [PureRenderMixin],
  getDeck: function() {
    return this.props.deck || [];
  },
  getDeckSize: function() {
    if (this.props.deck) {
      debugger;
      return this.props.deck.size
    } else {
      return 0;
    }
  },
  getTopTile: function() {
    return this.props.topTile || [];
  },

  render: function() {
    console.log(this.props.deck)
    return <div className="deck">
      <div>({this.getDeckSize()}) remaining</div>
      
    </div>;
  }
});

export const DeckContainer = connect(
  deckTilesSelector
)(Deck);

// <Tile tile={this.props.topTile}/>