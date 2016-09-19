var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubhelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // seta o estado inicial
  getInitialState: function(){
      return {
        isLoading: true,
        playersInfo: []
      }
  },
  // ocorre quando o componente acabou de ser montado. Logo. do PromptContainer eu recebo as informações do handleSubmitUser.
  componentDidMount: function(){
    var query = this.props.location.query;
    githubhelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players){
      //console.log('PLAYERS', players);
      this.setState({
        isLoading: false,
          playersInfo: [players[0], players[1]]
      })
    }.bind(this))
  },
  handleInitiateBattle: function(){
    this.context.router.push({
      pathname: '/result',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function(){
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;
