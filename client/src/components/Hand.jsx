import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Tile from './Tile';


export default React.createClass({
  mixins: [PureRenderMixin],
  getHand: function() {
    return this.props.hand || [];
  },

  render: function() {
    return <div>
      <h1>{this.props.player}</h1>
      <ul>
      {this.getHand().map(tile =>
        <Tile tile={tile}/>
      )}
      </ul>
    </div>;
  }
});