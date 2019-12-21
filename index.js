import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import BlogPost from './component/BlogPost/BlogPost.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <p> Blog Post </p>
       <hr/>
       <BlogPost/>


      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
