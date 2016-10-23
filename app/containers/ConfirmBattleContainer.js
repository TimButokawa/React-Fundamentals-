
var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            isLoading: true,
            playersInfo: []
        };
    },
    componentDidMount: function() {
        var query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(
            function Success(data) {
                this.setState({
                    isLoading: false,
                    playersInfo: [data[0], data[1]]
                });
            }.bind(this)
        );
    },
    handlInitiateBattle: function() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        });
    },
    render: function() {
        return (
            <ConfirmBattle
                isLoading={ this.state.isLoading }
                onInitiateBattle={ this.handlInitiateBattle }
                playersInfo={ this.state.playersInfo } />
        );
    }
});

module.exports = ConfirmBattleContainer;
