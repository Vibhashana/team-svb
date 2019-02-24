import React from 'react';

const Popups = ({body}) => {
    return (
        <div className="popup popup--open">
            <div className="popup__header">
                <div title="Close" className="close layout--center">
                    X
                </div>
            </div>
            <div className="popup__body layout--center">
                <div className="popup__body-inner">{body}</div>
            </div>
        </div>
    );
};

export default Popups;