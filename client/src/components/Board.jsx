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
  getLegal: function(cell) {
    var tile = this.getSelectedTile();
    if (tile && cell.get('contents') == "empty") {
      const cellEdges = cell.get('edges');
      const tileEdges = tile.get('edges');
      if (
        (cellEdges.get('left') == "empty") &&
        (cellEdges.get('right') == "empty") &&
        (cellEdges.get('top') == "empty")  &&
        (cellEdges.get('bottom') == "empty")
      ) {
          return false
      }
      if (
        ((cellEdges.get('left') == tileEdges.get('left')) || (cellEdges.get('left') == "empty")) &&
        ((cellEdges.get('right') == tileEdges.get('right')) || (cellEdges.get('right') == "empty")) &&
        ((cellEdges.get('top') == tileEdges.get('top')) || (cellEdges.get('top') == "empty")) &&
        ((cellEdges.get('bottom') == tileEdges.get('bottom')) || (cellEdges.get('bottom') == "empty"))
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  handleClick: function(cell) {
    this.props.placeTile(this.getSelectedTile().get('id'), this.getPosition(cell));
  },
  render: function() {
    var board = this.props.board
    if (board) {
      return <div className="board">
        {board.map(function(cell, i) {
          var props = {};
          props.cell = cell;
          props.key = i;
          props.legal = false;
          props.handleClick = function() {return false};

          if (this.getLegal(cell)) {
            props.legal = true;
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