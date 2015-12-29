import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Hand from './Hand';

require('../../sass/Player.scss');

export default React.createClass({
  mixins: [PureRenderMixin],
  getHand: function() {
    return this.props.player.get('hand')
  },
  getPlayer: function() {
    return this.props.player
  },
  getPlayerName: function() {
    return this.props.player.get('name');
  },

  render: function() {
    if (this.getPlayer()) {
      return <div className="player">
        <div className="player-name-wrapper">{this.getPlayerName()}</div>
        <div className="pieces-wrapper">Pieces go here</div>
        <div className="hand-wrapper">
          <Hand hand={this.getHand()}
                selectTile={this.props.selectTile}/>
        </div>
      </div>;
    }
  }
});