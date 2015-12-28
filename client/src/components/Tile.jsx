import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

require('../../sass/Tile.scss');

export default React.createClass({
  mixins: [PureRenderMixin],
  getTileName: function() {
    if (this.props.tile) {
      return this.props.tile.get('name');
    } else {
      return "";
    }
  },
  getTileId: function() {
    if (this.props.tile) {
      return this.props.tile.get('id');
    } else {
      return "";
    }
  },
  getTileStatus: function() {
    if (this.props.tile) {
      return this.props.tile.get('status');
    } else {
      return "";
    }
  },
  clickTile: function() {
    if (this.getTileStatus() === "unplayed") {
      return this.props.selectTile(this.props.tile);
    }
  },
  render: function() {
    var tileClass = classNames("tile", this.getTileName(), this.getTileStatus());
    if (this.props.tile) {
      return <div className={tileClass} onClick={() => this.clickTile()}>
        {this.getTileName()} <br/>
        id: {this.getTileId()}
        </div>
    } else {
      return null
    }
  }
});
