import React, { Component } from 'react';
import Axios from 'axios';
import './DetailPost.css';

class DetailPost extends Component {

    state = {
        title: '',
        body: ''
    }

    componentDidMount() {
        let id = this.props.match.params.postID;
        // console.log(this.props);
        Axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            this.setState({
                title: res.data.title,
                body: res.data.body
            })
        })
    }
    render() {
        return (
            <div className="p-detail-post">
                <p className="detail-title">{this.state.title}</p>
                <p className="detail-body">{this.state.body}</p>
            </div>
        )
    }
}

export default DetailPost;