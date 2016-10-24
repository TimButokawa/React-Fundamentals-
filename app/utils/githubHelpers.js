var axios = require('axios');

var id = 'YOUR_CLIENT_ID';
var sec = 'YOUR_SECRET_ID';
var param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars(repos) {
    return repos.data.reduce(function(prev, current) {
        return prev + current.stargazers_count;
    }, 0);
}

function getPlayerData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function Success(totalStars) {
            return {
                followers: player.followers,
                totalStars: totalStars
            };
        });
}

function calculateScores(players) {
    return [
        players[1].followers * 3 + players[1].totalStars,
        players[0].followers * 3 + players[0].totalStars
    ];
}

var helpers = {
    getPlayersInfo: function(players) {
        return axios.all(players.map(function(username) {
            return getUserInfo(username);
        })).then(
            function Success(data) {
                return data.map(function(user) {
                    return user.data;
                });
            }).catch(function Failure(error) {
                console.warn('error', error);
            });
    },
    battle: function(players) {
        var playerOneData = getPlayerData(players[0]);
        var playerTwoData = getPlayerData(players[1]);

        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(function Failure(error) {
                console.warn('error', error);
            });
    }
};

module.exports = helpers;
