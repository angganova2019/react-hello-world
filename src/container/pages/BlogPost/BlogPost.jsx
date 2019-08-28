import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../../component/Post/Post';
import Axios from 'axios';
import API from '../../../services';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comment: []
    }



    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost).then(result => {
            console.log(result)
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
    }

    putDataToAPI = () => {
        API.putNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then(res => {
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
    }

    getPostAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })

        API.getComments().then(result => {
            this.setState({
                comment: result
            })
        })
    }

    handleRemove = (data) => {
        API.deleteNewsBlog(data).then(res => {
            this.getPostAPI();
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timeStamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount() {
        this.getPostAPI();
    }


    render() {
        return (
            <Fragment>
                <p>Halaman Blog Post</p>
                <hr />
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comment.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;