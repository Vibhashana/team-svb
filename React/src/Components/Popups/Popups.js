import React, {Component} from 'react';

class Popups extends Component {
    render() {
        return (
            <div className="popup popup--open">
                <div className="popup__header">
                    <div title="Close" className="close layout--center">
                        X
                    </div>
                </div>
                <div className="popup__body layout--center">
                    <div className="popup__body-inner">
                    </div>
                </div>
            </div>
        );
    }
}

export default Popups;