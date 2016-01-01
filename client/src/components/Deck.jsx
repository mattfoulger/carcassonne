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

  render: function() {
    if (this.props.deck) {
      const tile = this.props.deck.last();
      var props = {}
      props.name = tile.get('name');
      props.id = tile.get('id');
      props.selected = tile.get('selected');
      props.placed = tile.get('placed');

      if (!props.selected) {
        props.handleClick = function() {
          return this.props.selectTile(props.id);
        }.bind(this, props);
      } else {
        props.handleClick = function() {
          return false;
        };
      }

      return <div className="deck">
        <div>({this.props.deck.size}) remaining</div>
        <Tile key={props.id} {...props} />
      </div>;
    } else {
      return null
    }
  }
});