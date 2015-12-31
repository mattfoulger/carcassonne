import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Tile from './Tile'

require('../../sass/Board.scss');

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    var cell = this.props.cell;
    var cellClass = classNames("cell", {legal: this.props.legal})

    var cellContents = "";
    var cellPos = "";
    var cellEdges = "";
    if ( cell && cell.get('contents') != "empty" ) {
      cellContents = <Tile tile={cell.get('contents')} key={cell.getIn('contents', 'id')}/>;
    } else {
      cellContents = "";
    }

    return <div onClick={this.props.handleClick} className={cellClass} >
        { cellContents }
      </div>
  }
});

