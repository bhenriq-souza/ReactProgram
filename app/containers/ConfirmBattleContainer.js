var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

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
    //console.log('QUERY', query);
    // Fetch info from Github then update state.
  },
  render: function(){
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;
