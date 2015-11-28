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
  render: function() {
    console.log(this.props.tile);
    var tileClass = classNames("tile", this.getTileName());
    return <li className={tileClass}>{this.getTileName()}</li>
  }
});

