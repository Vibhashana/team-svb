import React, {Component} from 'react';

class Alert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: this.props.show,
        }
    }

    render() {

        return (
            <div className={"popup " + (this.props.show ? "popup--open" : "")}>
                <div className="popup__header">
                    <div title="Close" className="close layout--center"
                         onClick={this.props.close}>
                        X
                    </div>
                </div>
                <div className="popup__body layout--center">
                    <div className="popup__body-inner">

                        <div className="form">
                            <div className="form__title">
                                <span className="highlight">#</span>
                                {this.props.title}
                            </div>
                            <div className="form__description">
                                {this.props.description}
                            </div>
                            <form name="alert">
                                <div className="alert">
                                    <input type="button" className="btn" value="OK"
                                           onClick={this.props.close}/>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Alert;