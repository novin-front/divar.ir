import React from 'react'
import {Link} from 'react-router-dom'
export default function NewAdvertisLink() {
    return (
      <div className="add-new-post">
        <Link to="/new" className="btn-divar rounded-pill shadow-sm">
          <span className="nav-link-inner--text ml-1">ثبت رایگان آگهی</span>
        </Link>
      </div>
    );
}
