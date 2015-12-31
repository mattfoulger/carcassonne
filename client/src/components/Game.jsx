import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Deck from './Deck';
import Players from './Players';
import Board from './Board';
import * as actionCreators from '../action_creators';
import {deckSelector, boardSelector, playersSelector, selectedTileSelector} from '../selectors';

require('../../sass/Game.scss');

export const Game = React.createClass({
  mixins: [PureRenderMixin],
  getPlayers: function() {
    return this.props.players || [];
  },
  render: function() {
    if (this.props.deck) {
      return <div>
        <div className="controls">
          <Deck deck={this.props.deck}
                selectTile={this.props.selectTile}/>
          <Players players={this.props.players}
                selectTile={this.props.selectTile}
                currentPlayer={this.props.currentPlayer}/>        
          <button
            onClick={() => this.props.drawTile(this.props.currentPlayer)}>
            Draw a tile
          </button>
          <button
            onClick={() => this.props.endTurn()}>
            End turn
          </button>
        </div>
        <Board  board={this.props.board} 
                placeTile={this.props.placeTile}
                selectedTile={this.props.selectedTile} />

        
      </div>;
    } else {
      return null
    }
  }
});

function mapStateToProps(state) {
  return {
    deck: deckSelector(state),
    tiles: state.get('tiles'),
    players: playersSelector(state),
    currentPlayer: state.get('currentPlayer'),
    board: boardSelector(state),
    selectedTile: selectedTileSelector(state)
  };
}

export const GameContainer = connect(
  mapStateToProps,
  actionCreators
)(Game);
