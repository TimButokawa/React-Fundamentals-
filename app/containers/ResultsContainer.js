var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            scores: []
        };
    },
    componentDidMount: function() {
        githubHelpers.battle(this.props.location.state.playersInfo).then(
            function Success(scores) {
                this.setState({
                    isLoading: false,
                    scores: scores
                });
            }.bind(this)
        );
    },
    render: function() {
        return (
            <Results
                playersInfo={ this.props.location.state.playersInfo }
                isLoading={ this.state.isLoading }
                scores= { this.state.scores } />
        );
    }
});

module.exports = ResultsContainer;
