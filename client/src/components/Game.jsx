import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {DeckContainer} from './Deck';
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
      <DeckContainer selectTile={this.props.selectTile}/>
      
      <button
        onClick={() => this.props.drawTile(this.props.currentPlayer)}>
        Draw a tile
      </button>
      <button
        onClick={() => this.props.endTurn(this.props.currentPlayer)}>
        End turn
      </button>
      
    </div>;
  }
});

// <Hands hands={this.props.hands} 
//              selectTile={this.props.selectTile}/>
// <Board board={this.props.board} placeTile={this.props.placeTile} />

function mapStateToProps(state) {
  return {
    // deck: state.get('deck'),
    topTile: state.get('topTile'),
    hands: state.get('hands'),
    players: state.get('players'),
    currentPlayer: state.get('currentPlayer'),
    board: state.get('board')
  };
}

export const GameContainer = connect(
  // deckTilesSelector,
  mapStateToProps,
  actionCreators
)(Game);
