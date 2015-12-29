import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Tile from './Tile';

require('../../sass/Hand.scss');

export default React.createClass({
  mixins: [PureRenderMixin],
  getHand: function() {
    return this.props.hand;
  },

  render: function() {
    if (this.getHand) {
      return <div className="hand">
        {this.getHand().map(tile =>
          <Tile tile={tile}
                key={tile.get('id')}
                selectTile={this.props.selectTile}/>
        )}
      </div>;
    } else {
      return null
    }
  }
});