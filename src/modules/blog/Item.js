import React from 'react';
import PropTypes from 'prop-types'
import { white, black, grey2 } from '../../ui/common/colors';
import Card from '../../ui/card';
import { routeImage, routes } from '../../setup/routes'
import { H4 } from '../../ui/typography';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const {
        title, slug, description, image,
        type, featured, isActive, createdAt, updateAt
    } = props.blog

    return (
        <Link to={routes.blog.path(slug)}>
            <Card style={{ width: '25em', margin: '2.5em auto', backgroundColor: white }}>
                <img src={routeImage + image} alt={title} style={{ width: '100%' }} />
                <div style={{ padding: '1em 1.2em' }}>
                    <H4 font="secondary" style={{ colors: black }}>{title}</H4>
                    <p style={{ colors: grey2, marginTop: '1em' }}>{description}</p>
                    <p style={{ colors: grey2, marginTop: '1em' }}>Launch ON {new Date(parseInt(createdAt)).toDateString()}</p>
                </div>
            </Card>
        </Link>

    )
}

Item.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Item
