import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
    },
  };

const product = (props) => {
    return (
        <div className="card" style={styles.card}>
            <img className="card-img-top" src={props.image} alt={props.title} style={styles.media} />
            <div className="card-body">
            <h5 className="product-id">{props.id}</h5>
            &nbsp; &nbsp; &nbsp;
                <h5 className="card-title">{props.title}</h5>
                &nbsp;
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.describtion}</p>
                <a href={props.reference} className="btn btn-primary">Informacija</a>
                &nbsp; &nbsp; &nbsp;
                <h5 className="card-price">{props.price}</h5>
                <a href={props.reference} className="btn btn-success">Pirkti</a>
                <br></br>
                <h5 className="card-quantity"><strong>Likutis</strong>&nbsp;{props.quantity}</h5>
            </div>
        </div>
            );
    }

product.propTypes = {
    id: PropTypes.long.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    describtion: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
  };

export default product;