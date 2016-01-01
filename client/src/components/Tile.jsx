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
      return this.props.tile.get('selected');
    } else {
      return false
    }
  },
  getRotationClass: function() {
    if (this.props.tile) {
      switch (this.props.tile.get('rotation')) {
        case 2:
          return "rotation-2";
          break;
        case 3:
          return "rotation-3";
          break;
        case 4:
          return "rotation-4";
          break;
      }
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
    var tileClass = classNames("tile", this.getTileName(), {selected: this.getSelected()}, this.getRotationClass());
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
