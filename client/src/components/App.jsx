import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { ConnectionStateContainer } from './ConnectionState';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      <ConnectionStateContainer />
      {this.props.children}
    </div>
  }
});
