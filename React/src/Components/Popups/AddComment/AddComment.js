import React, {Component} from 'react';

import FormErrors from '../../Form/FormErrors';
import Loader from '../../Loader/Loader';

class AddComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoader: false,

            username: '',
            password: '',

            formErrors: {
                username: '',
                password: ''
            },
            userValid: false,
            passwordValid: false,
            formValid: false
        };
    }

    render() {

        return (
            <div className={"popup " + (this.props.isOpen ? "popup--open" : "")}>
                <div className="popup__header">
                    <div title="Close"
                         className="close layout--center"
                         onClick={this.props.close}>
                        X
                    </div>
                </div>
                <div className="popup__body layout--center">
                    <div className="popup__body-inner">

                        <div className="form">
                            <div className="form__title">
                                NEW <span className="highlight">#</span>COMMENT
                            </div>
                            <div className="form__description">
                                Comment with 140 characters.
                            </div>
                            <form name="new-comment">
                                <div className="new-comment">
                                    <textarea maxLength="140"
                                              ref={(input) => { this.addCommentInput = input }}></textarea>

                                    <Loader isLoading={this.state.showLoader}/>

                                    <FormErrors formErrors={this.state.formErrors}/>

                                    <input type="submit" value="COMMENT"/>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        this.addCommentInput.focus();
    }
}

export default AddComment;