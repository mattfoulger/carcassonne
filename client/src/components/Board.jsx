import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Column from './Column'

require('../../sass/Board.scss');

export default React.createClass({
  mixins: [PureRenderMixin],
  // getBoard: function() {
  //   return this.props.board || [[]];
  // }
  render: function() {
    var board = this.props.board || [];
    if (board.size > 0) {
      return <div className="board">
        {board.map(column =>
          <Column column={column} placeTile={this.props.placeTile}/>
        )}
        </div>
    } else {
      return <div></div>;
    }
  }
});