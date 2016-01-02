import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Tile from './Tile';
import PlacePiece from './PlacePiece';


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
      if (!tile) {
        return <div className="deck">
          <div>({this.props.deck.size}) remaining</div>
        </div>;
      }

      var props = {}
      props.id = tile.get('id');

      if (tile.get('placed')) {
        props.handleClick = function() {
          return this.props.commitTile(props.id, this.props.placedTilePosition, tile.get('rotation'));
        }.bind(this);
        return <div className="deck">
            <div>({this.props.deck.size}) remaining</div>
            <PlacePiece key={props.id} {...props} />
          </div>
      }

      props.name = tile.get('name');
      props.selected = tile.get('selected');
      
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