import React, {Component, Fragment} from 'react';
import './BlogPost.css';

class BlogPost extends Component {
  render (){
    return(
      <Fragment>
      <div className="section-title">
      <div className="post"> 
      <div className="img-thumb"> 
      <img src="https://placeimg.com/200/150/tech" alt="tech"/>
       </div>
      <div className="content">
          <p className="title"> Judul </p>
          <p className="desc"> Deskripsi</p>
          <button id="read-more"> Read More </button>
      </div>
          
      </div>
     
      </div>


    </Fragment>
    )
  }
}

export default BlogPost;