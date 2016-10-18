var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className='col-sm-12 jumbotron text-center' style={ transparentBg }>
                <h1>Github Battle</h1>
                <p className='lead'>fancy motto</p>
                <Link to='/playerOne'>
                    <button
                        type='button'
                        className='btn btn-large btn-success'>
                        Get Started
                    </button>
                </Link>
            </div>
        );
    }
});

module.exports = Home;
