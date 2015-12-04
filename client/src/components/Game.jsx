import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Deck from './Deck';
import Hands from './Hands';
import Board from './Board';
import * as actionCreators from '../action_creators';

export const Game = React.createClass({
  mixins: [PureRenderMixin],
  getPlayers: function() {
    return this.props.players || [];
  },
  render: function() {
    return <div>
      <Deck deck={this.props.deck}
            topTile={this.props.topTile}
            selectTile={this.props.selectTile}/>
      <Hands hands={this.props.hands} 
             selectTile={this.props.selectTile}/>
      <button
        onClick={() => this.props.drawTile(this.props.currentPlayer)}>
        Draw a tile
      </button>
      <button
        onClick={() => this.props.endTurn(this.props.currentPlayer)}>
        End turn
      </button>
      <Board board={this.props.board} placeTile={this.props.placeTile} />
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    deck: state.get('deck'),
    topTile: state.get('topTile'),
    hands: state.get('hands'),
    players: state.get('players'),
    currentPlayer: state.get('currentPlayer'),
    board: state.get('board')
  };
}

export const GameContainer = connect(
  mapStateToProps,
  actionCreators
)(Game);
