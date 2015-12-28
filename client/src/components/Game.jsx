import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Deck from './Deck';
import Hands from './Hands';
import Board from './Board';
import * as actionCreators from '../action_creators';
import {deckSelector, boardSelector} from '../selectors';

export const Game = React.createClass({
  mixins: [PureRenderMixin],
  getPlayers: function() {
    return this.props.players || [];
  },
  render: function() {
    if (this.props.deck) {
      return <div>
        <Deck deck={this.props.deck}
              selectTile={this.props.selectTile}/>
        <Board board={this.props.board} placeTile={this.props.placeTile} />
        
        <button
          onClick={() => this.props.drawTile(this.props.currentPlayer)}>
          Draw a tile
        </button>
        <button
          onClick={() => this.props.endTurn(this.props.currentPlayer)}>
          End turn
        </button>
        
      </div>;
    } else {
      return null
    }
  }
});

// <Hands hands={this.props.hands}
//              selectTile={this.props.selectTile}/>

function mapStateToProps(state) {
  return {
    deck: deckSelector(state),
    tiles: state.get('tiles'),
    players: state.get('players'),
    currentPlayer: state.get('currentPlayer'),
    board: boardSelector(state)
  };
}

export const GameContainer = connect(
  mapStateToProps,
  actionCreators
)(Game);
