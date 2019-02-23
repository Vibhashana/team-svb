import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div className="form">
                <div className="form__title">
                    NEW <span className="highlight">#</span>RANT
                </div>
                <div className="form__description">
                    Express yourself with 140 characters.
                </div>
                <form name="new-rant">
                    <div className="new-rant">
                        <textarea maxLength="140"></textarea>

                        <div className="loader">
                            <div className="spinner"></div>
                        </div>

                        <div className="form__error">
                            Some fields are missing !
                        </div>

                        <input type="submit" value="POST">
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;