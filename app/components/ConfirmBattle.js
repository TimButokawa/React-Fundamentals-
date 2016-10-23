var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var Link = require('react-router').Link;
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');

function ConfirmBattle(props) {
    return props.isLoading === true ?
        <p>Is Loading!</p> :
        <div
            className='jumbotron col-sm-12 text-center'
            style={ transparentBg }>
            <h1>Confirm Players</h1>
            <div className='row'>
                <div className='col-sm-8 col-sm-offset-2'>
                    <div className='row'>
                        <UserDetailsWrapper header='Player One'>
                            <UserDetails info={ props.playersInfo[0] } />
                        </UserDetailsWrapper>
                        <UserDetailsWrapper header='Player Two'>
                            <UserDetails info={ props.playersInfo[1] } />
                        </UserDetailsWrapper>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-8 col-sm-offset-4'>
                    <div className='row'>
                        <div className='col-sm-6 form-group'>
                            <button
                                type='button'
                                className='btn btn-lg btn-success btn-block'
                                onClick={ props.onInitiateBattle }>
                                Initiate Battle
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 form-group'>
                            <Link to='/playerOne'>
                                <button
                                    type='button'
                                    className='btn btn-lg btn-danger btn-block'>
                                    Reselect Players
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
}

ConfirmBattle.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
};

module.exports = ConfirmBattle;
