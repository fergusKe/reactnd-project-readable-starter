import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Layout from '../../components/Layout/Layout';

import {
  getAllCategories,
  addPost
} from '../../actions';

class NewPostForm extends Component {
  formRef = React.createRef();
  state = {
    category: 'react',
    author: '',
    title: '',
    content: ''
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  handleChange = (e) => {
    const name = e.target.name;

    if (name === 'category') {
      this.setState({
        category: e.target.value
      });
    } else if (name === 'author') {
      this.setState({
        author: e.target.value
      });
    } else if (name === 'title') {
      this.setState({
        title: e.target.value
      });
    } else if (name === 'content') {
      this.setState({
        content: e.target.value
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const form = this.formRef.current;
    const post = {
      category: this.state.category,
      author: this.state.author,
      title: this.state.title,
      body: this.state.content,
      timestamp: Date.now(),
      id: String(Date.now()),
      commentCount: 0,
      voteScore: 0
    };

    if (form.checkValidity() === false) {
      e.stopPropagation();
      form.classList.add('was-validated');
    } else {
      this.props.addPost(post);
      this.props.history.push('/');
    }
  }

  render() {
    const { categories } = this.props;
    const { author, title, content } = this.state;

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
                onChange={this.handleChange}
              >
                {
                  categories.map(category => (
                    <option
                      key={category.name}
                      value={category.name}
                    >
                      {category.name}
                    </option>
                  ))
                }
              </select>
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
              <label htmlFor="content">content</label>
              <textarea
                className="form-control"
                id="content"
                rows="3"
                name="content"
                value={content}
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
  categories: state.categories
});

const mapDispatchToProps = {
  getAllCategories,
  addPost
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);
