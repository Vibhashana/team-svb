import React, {Component} from 'react';

class Loader extends Component {
    render() {

        return (
            <div className="loader"
                 style={this.props.isLoading ? {} : { display: 'none' }}>
                <div className="spinner"></div>
            </div>
        );
    }
}

export default Loader;