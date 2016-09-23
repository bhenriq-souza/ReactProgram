var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var UserDetails = require('../components/UserDetails');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../components/MainContainer');
var Loading = require('../components/Loading');

function ConfirmBattle(props){
  return props.isLoading === true
      ? <Loading text='One moment' time={200} />
    : <MainContainer>
            <h1>Confirm Player</h1>
            <div className='col-sm-8 col-sm-offset-2'>
              <UserDetailsWrapper header='Player 1'>
                  <UserDetails info={props.playersInfo[0]} />
              </UserDetailsWrapper>
              <UserDetailsWrapper header='Player 2'>
                  <UserDetails info={props.playersInfo[1]} />
              </UserDetailsWrapper>
            </div>
            <div className='col-sm-8 col-sm-offset-2'>
                <div className='col-sm-12' style={styles.space}>
                    <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
                </div>
                <div className='col-sm-12' style={styles.space}>
                  <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                  </Link>
                </div>
           </div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}
module.exports = ConfirmBattle;
