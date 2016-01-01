import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Tile from './Tile'

require('../../sass/Board.scss');

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    var cell = this.props.cell;
    var position = cell.get('position');
    var cellClass = classNames("cell", {legal: this.props.legal})
    var cellContents = "";
    
    if ( cell && cell.get('contents') != "empty" ) {
      var tile = cell.get('contents');
      var props = {}
      props.name = tile.get('name');
      props.id = tile.get('id');
      props.selected = tile.get('selected');
      props.placed = tile.get('placed');
      props.committed = tile.get('committed');
      props.rotation = tile.get('rotation');

      if (props.selected && props.placed && !props.committed) {
        if (this.props.legal && this.props.legal.length > 1) {
          props.handleClick = function() {
            return this.props.rotateTile(props.id, position);
          }.bind(this, props, position);
        }
      } else {
        props.handleClick = function() {
          return false;
        };
      }
      return <div className={cellClass} >
        <Tile key={props.id} {...props} />
      </div>;
    } else {
      return <div onClick={this.props.handleClick} className={cellClass} ></div>
    }
  }
});

// props.handleClick = function() {
//   return this.props.commitTile(props.id, position, props.rotation);
// }.bind(this, props, position);

