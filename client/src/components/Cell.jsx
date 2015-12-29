import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Tile from './Tile'

require('../../sass/Board.scss');

export default React.createClass({
  mixins: [PureRenderMixin],

  getPosition: function() {
    return this.props.cell.get('position');
  },

  getSelectedTile: function() {
    return this.props.selectedTile;
  },

  handleClick: function() {
    if (this.props.cell && this.props.cell.get('contents') === "empty" && this.getSelectedTile() ) {
      this.props.placeTile(this.getSelectedTile().get('id'), this.getPosition());
    }
  },

  render: function() {
    var cell = this.props.cell;
    var cellContents;
    if ( cell && cell.get('contents') != "empty" ) {
      cellContents = <Tile tile={cell.get('contents')} key={cell.getIn('contents', 'id')}/>;
    } else {
      cellContents = "empty";
    }
    return <div className="cell"
      onClick={() => this.handleClick()}>
        { cellContents }
      </div>
  }
});


