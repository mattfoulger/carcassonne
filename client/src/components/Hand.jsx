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
        {this.getHand().map(tile => {
          var props = {}
          props.name = tile.get('name');
          props.id = tile.get('id');
          props.selected = tile.get('selected');
          props.placed = tile.get('placed');

          if (!props.selected && this.props.current) {
            props.handleClick = function() {
              return this.props.selectTile(props.id);
            }.bind(this, props);
          } else {
            props.handleClick = function() {
              return false;
            };
          }
          return <Tile key={props.id} {...props}/>
        })}
      </div>;
    } else {
      return null
    }
  }
});