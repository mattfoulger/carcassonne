import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Hand from './Hand';
import classNames from 'classnames';

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
  getCurrent: function() {
    if (this.props.current) {
      return "current-player";
    }
  },
  render: function() {
    if (this.getPlayer()) {
      var playerClass = classNames("player-name", this.getCurrent())
      return <div className="player">
        <div className={playerClass}>{this.getPlayerName()}</div>
        <div className="pieces-wrapper">Pieces go here</div>
        <div className="hand-wrapper">
          <Hand hand={this.getHand()}
                selectTile={this.props.selectTile}
                current={this.props.current}/>
        </div>
      </div>;
    }
  }
});