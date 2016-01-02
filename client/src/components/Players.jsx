import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Player from './Player'

require('../../sass/Players.scss');

export default React.createClass({
  mixins: [PureRenderMixin],
  getPlayers: function() {
    return this.props.players
  },
  render: function() {
    if (this.props.players) {
      return <div className = "players">
        {this.getPlayers().map(function (player, key) {
          var props = {};
          props.player = player;
          props.key = player.get('name');
          props.selectTile = this.props.selectTile;
          props.placedTilePosition = this.props.placedTilePosition;
          props.commitTile = this.props.commitTile;

          if (key == this.props.currentPlayer) {
            props.current = true;
          } else {
            props.current = false;
          }
          return <Player {...props} />
        }.bind(this))}
      </div>
    } else {
      return null
    }
  }
});

