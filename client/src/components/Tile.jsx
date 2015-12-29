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
  getSelected: function() {
    if (this.props.tile) {
      if (this.props.tile.get('selected')) {
        return 'selected'
      } else {
        return false
      }
    } else {
      return false
    }
  },
  handleClick: function() {
    if (!this.getSelected() && !this.props.tile.get('played')) {
      return this.props.selectTile(this.props.tile.get('id'));
    } else {
      return false
    }
  },
  render: function() {
    var tileClass = classNames("tile", this.getTileName(), this.getSelected());
    if (this.props.tile) {
      return <div className={tileClass} onClick={() => this.handleClick()}>
        {this.getTileName()} <br/>
        id: {this.getTileId()}
        </div>
    } else {
      return null
    }
  }
});
