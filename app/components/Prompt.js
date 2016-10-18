var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;

function Prompt(props) {
    return (
        <div className='col-sm-6 col-sm-offset-3 jumbotron text-center' style={ transparentBg }>
            <h1>{ props.header }</h1>
            <div className='col-sm-12'>
                <form
                    onSubmit={ props.onSubmitUser }>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Github Username'
                            onChange={ props.onUpdateUser }
                            value={ props.username } />
                    </div>
                    <div className='col-sm-4 col-sm-offset-4 form-group'>
                        <button
                            type='submit'
                            className='btn btn-block btn-success'>
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = Prompt;
