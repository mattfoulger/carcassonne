import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Cell from './Cell'

require('../../sass/Board.scss');

export default React.createClass({
  mixins: [PureRenderMixin],
  getPosition: function(cell) {
    return cell.get('position');
  },
  getSelectedTile: function() {
    return this.props.selectedTile;
  },
  getLegalMoves: function(cell) {
    return cell.get('legal');
  },
  handleClick: function(cell) {
    this.props.placeTile(this.getSelectedTile().get('id'), this.getPosition(cell), this.getLegalMoves(cell)[0]);
  },
  render: function() {
    var board = this.props.board
    if (board) {
      return <div className="board">
        {board.map(function(cell, i) {
          var props = {};
          props.cell = cell;
          props.key = i;
          props.legal = this.getLegalMoves(cell);
          props.commitTile = this.props.commitTile;
          props.rotateTile = this.props.rotateTile;

          if (props.legal) {
            props.handleClick = this.handleClick.bind(this, cell);
          }
          
          return <Cell {...props} />
        }.bind(this))}
        </div>
    } else {
      return <div></div>;
    }
  }
});