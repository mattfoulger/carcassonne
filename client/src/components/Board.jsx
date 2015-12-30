import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Cell from './Cell'

require('../../sass/Board.scss');

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    var board = this.props.board
    if (board) {
      return <div className="board">
        {board.flatten(true).map(cell =>
            <Cell cell={cell} 
                  placeTile={this.props.placeTile}
                  selectedTile={this.props.selectedTile} />
        )}
        </div>
    } else {
      return <div></div>;
    }
  }
});