import React, {Component} from 'react';
import Comment from "./Comment";

class CommentList extends Component {

    render() {

        return (
            <section className="comments layout--center">

                <h1 className="comments__title"><span>#</span>Comments</h1>

                <Comment/>

            </section>
        );
    }
}

export default CommentList;