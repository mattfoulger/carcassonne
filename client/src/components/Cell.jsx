import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Tile from './Tile'

require('../../sass/Board.scss');

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    var cell = this.props.cell;
    var cellContents;
    if ( cell && cell.get('contents') != "empty" ) {
      cellContents = <Tile tile={cell.get('contents')} key={cell.getIn('contents', 'id')}/>;
    } else {
      cellContents = "empty";
    }
    return <div className="cell"
      onClick={() => this.props.placeTile(cell.get('position'))}>
        { cellContents }
      </div>
  }
});


