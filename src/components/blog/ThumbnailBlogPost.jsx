import React from 'react'

export default function ThumbnailBlogPost({postData,image}) {
    return (
      <div className="post-content">
        <div className="fakeimg-thumbnail">
          <img
            className="img-fluid"
            src={image}
            alt=""
          />
        </div>
        <h4>{postData.title}</h4>
      </div>
    );
}
