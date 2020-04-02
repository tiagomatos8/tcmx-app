import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = props => {
    return (
        <div className="Card-component card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.imageUrl} alt="Placeholder"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{props.title}</p>
                        <p className="subtitle is-6">{props.subtitle}</p>
                    </div>
                </div>

                <div className="content">
                    {props.content}
                    <div className='content__tags'>
                        {props.tags}
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    tags: PropTypes.array
}

export default Card;
