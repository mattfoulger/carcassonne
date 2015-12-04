import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Tile from './Tile';

require('../../sass/Hand.scss');

export default React.createClass({
  mixins: [PureRenderMixin],
  getHand: function() {
    return this.props.hand || [];
  },
  getPlayer: function() {
    return this.props.player || "";
  },

  render: function() {
    return <div className="hand">
      <div className="player-name-wrapper">{this.props.player}</div>
      <div className="pieces-wrapper">Pieces go here</div>
      <div className="tiles-wrapper">
        {this.getHand().map(tile =>
          <Tile tile={tile} key={tile.get('id')} selectTile={this.props.selectTile}/>
        )}
      </div>
    </div>;
  }
});