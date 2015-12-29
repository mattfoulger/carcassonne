import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Tile from './Tile';


export default React.createClass({
  mixins: [PureRenderMixin],
  getDeckSize: function() {
    if (this.props.deck) {
      return this.props.deck.size
    } else {
      return 0;
    }
  },
  getTopTile: function() {
    return this.props.deck.last();
  },

  render: function() {
    if (this.props.deck) {
      return <div className="deck">
        <div>({this.getDeckSize()}) remaining</div>
        <Tile tile={this.getTopTile()}
              selectTile={this.props.selectTile} />
      </div>;
    } else {
      return null
    }
  }
});