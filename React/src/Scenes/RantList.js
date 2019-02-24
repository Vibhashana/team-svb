import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import Loader from "../Components/Loader/Loader";
import AddPost from "../Components/Popups/AddPost/AddPost";
import Rant from "../Components/Rant/Rant";

class RantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: false,
            showAddPopup: false,
        };
    }

    showAddPopup = () => {
        this.setState({
            showAddPopup: true
        });
    };

    hideAddPopup = () => {
        this.setState({
            showAddPopup: false
        });
    };

    render() {

        return (

                <div className="post-list">
                    <Link to="/rant/1">
                        <Rant/>
                    </Link>

                    <div className="rant__add" title="Add Rant"
                         onClick={this.showAddPopup}>+</div>

                    <Loader isLoading={this.state.showLoader}/>

                    <AddPost isOpen={this.state.showAddPopup}
                             close={this.hideAddPopup}/>

                </div>
        );
    }
}

export default RantList;