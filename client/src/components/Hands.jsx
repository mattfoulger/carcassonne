import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Hand from './Hand'

require('../../sass/HandsArea.scss');

export default React.createClass({
  mixins: [PureRenderMixin],
  getHands: function() {
    return this.props.hands || [];
  },
  render: function() {
    return <div className = "hands-area">
      {this.getHands().map(function (hand, player) {
          return <Hand hand={hand} player={player} selectTile={this.props.selectTile}/>
        }.bind(this))}
    </div> 
  }
});

