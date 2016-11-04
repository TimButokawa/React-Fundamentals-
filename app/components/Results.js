var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var MainContainer = require('../components/MainContainer');
var Loading = require('../components/Loading');

function StartOver() {
    return (
        <div className='row'>
            <div className='col-sm-4 col-sm-offset-4'>
                <Link to='/playerOne'>
                    <button
                        type='button'
                        className='btn btn-lg btn-danger btn-block'>
                        Start Over
                    </button>
                </Link>
            </div>
        </div>
    );
}

function Results(props) {
    if(props.isLoading) {
        return (
            <Loading text='One Moment' speed={200}/>
        );
    }
    if(props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>It&#39;s a Tie!</h1>
                <StartOver />
            </MainContainer>
        );
    }

    var winningIdex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIdex === 0 ? 1 : 0;

    return(
        <MainContainer>
            <h1>Results</h1>
            <div className='row'>
                <div className='col-sm-8 col-sm-offset-2'>
                    <UserDetailsWrapper header='Winner'>
                        <UserDetails
                            score={ props.scores[winningIdex] }
                            info={ props.playersInfo[winningIdex] }/>
                    </UserDetailsWrapper>
                    <UserDetailsWrapper header='Loser'>
                        <UserDetails
                            score={ props.scores[losingIndex] }
                            info={ props.playersInfo[losingIndex] }/>
                    </UserDetailsWrapper>
                </div>
            </div>
            <StartOver />
        </MainContainer>
    );
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

module.exports  = Results;
