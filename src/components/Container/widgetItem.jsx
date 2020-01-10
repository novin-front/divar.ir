import React from 'react'
import { Link } from 'react-router-dom';

export default function WidgetItem(props) {
    return (
        <>
            <Link className="col-xs-12 col-sm-6 col-xl-4 post-list-card" {...props} to={`/view/${props.data.title}`}>
                <div className="post-list-card__content">
                    <h4 className="post-list-card__title">
                        {props.data.title}
              </h4>
                    <div className="post-list-card__description">
                        {props.data.description}
              </div>
                    <div className="post-list-card__info">
                        <span className="post-list-card__info-label">
                            {props.data.normal_text}
                </span>
                        <span className="post-list-card__info-chat">
                            <i className="fa fa-comments-o px-2"></i>
                        </span>
                    </div>
                </div>
                <div className="post-list-card__image">
                    <img
                        src={props.data.image}
                        className="post-card__image img-fluid rounded"
                        alt={props.data.title}
                        title={props.data.title}
                    />
                </div>
            </Link>    
        </>
    )
}
