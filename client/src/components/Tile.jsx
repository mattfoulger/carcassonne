import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

require('../../sass/Tile.scss');

export default React.createClass({
  mixins: [PureRenderMixin],
  
  getRotationClass: function() {
    switch (this.props.rotation) {
      case 1:
        return "rotation-1";
        break;
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
  },

  render: function() {
    var rotatorOverlay = "";
    if (this.props.rotator) {
      rotatorOverlay = <div className="rotator"></div>
    }
    var tileClass = classNames("tile", this.props.name, {selected: this.props.selected}, this.getRotationClass());
    return <div className={tileClass} onClick={() => this.props.handleClick()}>{rotatorOverlay}</div>;
  }
});
