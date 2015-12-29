import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Cell from './cell'

require('../../sass/Board.scss');

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    var column = this.props.column || [];
    if (column.size > 0) {
      return <div className="column">
          {column.map(cell =>
            <Cell cell={cell} 
                  placeTile={this.props.placeTile}
                  selectedTile={this.props.selectedTile} />
          )}
        </div>
    } else {
      return null
    }
  }
});


