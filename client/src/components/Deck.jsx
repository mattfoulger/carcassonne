import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Tile from './Tile';


export default React.createClass({
  mixins: [PureRenderMixin],
  getDeck: function() {
    return this.props.deck || [];
  },
  getDeckSize: function() {
    if (this.props.deck) {
      return this.props.deck.size
    } else {
      return 0;
    }
  },
  getTopTile: function() {
    return this.props.topTile || [];
  },

  render: function() {
    return <div className="deck">
      <div>({this.getDeckSize()}) remaining</div>
      <Tile tile={this.props.topTile}/>
    </div>;
  }
});