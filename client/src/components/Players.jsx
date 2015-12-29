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
      return <div className = "hands-area">
        {this.getPlayers().map(function (player) {
          return <Player player={player}
                         key={player.get('name')}
                         selectTile={this.props.selectTile}/>
        }.bind(this))}
      </div>
    } else {
      return null
    }
  }
});

