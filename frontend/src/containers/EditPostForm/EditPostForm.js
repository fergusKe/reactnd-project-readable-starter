import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Layout from '../../components/Layout/Layout';

import {
  getAllCategories,
  getAllPosts,
  updatePost
} from '../../actions';

class EditPostForm extends Component {
  formRef = React.createRef();
  state = {
    post: {},
    category: '',
    title: '',
    author: '',
    body: ''
  }

  componentDidMount() {
    this.props.getAllCategories();
    this.props.getAllPosts().then(() => {
      const { posts } = this.props;
      const { id } = this.props.match.params;
      const post = posts.filter(p => (
        p.id === id
      ))[0];

      this.setState({
        post,
        category: post.category,
        title: post.title,
        author: post.author,
        body: post.body
      });
    });
  }

  handleChange = (e) => {
    const name = e.target.name;

    if (name === 'category') {
      this.setState({
        category: e.target.value
      });
    } else if (name === 'title') {
      this.setState({
        title: e.target.value
      });
    } else if (name === 'author') {
      this.setState({
        author: e.target.value
      });
    } else if (name === 'body') {
      this.setState({
        body: e.target.value
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { id } = this.props.match.params;
    const form = this.formRef.current;
    const post = {
      ...this.state.post,
      category: this.state.category,
      author: this.state.author,
      title: this.state.title,
      body: this.state.body,
      timestamp: Date.now()
    };

    if (form.checkValidity() === false) {
      e.stopPropagation();
      form.classList.add('was-validated');
    } else {
      this.props.updatePost(post, id).then(() => {
        this.props.history.push('/');
      });
    }
  }

  render() {
    const { categories } = this.props;
    const {
      category,
      title,
      author,
      body
    } = this.state;
    console.log('state = ', this.state);

    return (
      <Layout>
        <div className="container mt-4">
          <form
            className="needs-validation"
            noValidate
            ref={this.formRef}
          >
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">category</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="category"
                value={category}
                onChange={this.handleChange}
              >
                {
                  categories.map(c => (
                    <option
                      key={c.name}
                      value={c.name}
                    >
                      {c.name}
                    </option>
                  ))
                }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="title">title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder=""
                name="title"
                value={title}
                onChange={this.handleChange}
                required
              />
              <div className="invalid-feedback">
                Please enter title.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="author">author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder=""
                name="author"
                value={author}
                onChange={this.handleChange}
                required
              />
              <div className="invalid-feedback">
                Please enter author.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="body">content</label>
              <textarea
                className="form-control"
                id="body"
                rows="3"
                name="body"
                value={body}
                onChange={this.handleChange}
                required
              />
              <div className="invalid-feedback">
                Please enter content.
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-info"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
            <Link to="/">
              <button type="button" className="btn btn-outline-danger ml-3">Cancel</button>
            </Link>
          </form>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  posts: state.posts
});

const mapDispatchToProps = {
  getAllCategories,
  getAllPosts,
  updatePost
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);
