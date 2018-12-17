import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
  },
};

const fruit = (props) => {

  
  return (
    <div className="card" style={styles.card}>
        <img className="card-img-top" src={props.image} alt={props.title} style={styles.media} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.info}</p>
            <a href={props.reference} className="btn btn-primary">Informacija</a>
            &nbsp; &nbsp; &nbsp;
            <a href={props.reference} className="btn btn-success">Pirkti</a>
        </div>
    </div>
        );
}



  
  fruit.propTypes = {
    // classes: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
  };
  
//   export default withStyles(styles)(fruit);
  





//     return(
//         <div className="card" style={style.image}>
//             <img className="card-img-top" src={fruit.image} alt="Card image cap">
//             <div className="card-body">
//                 <h5 className="card-title">{fruit.title}</h5>
//                 <p className="card-text">{fruit.info}</p>
//                 <a href={fruit.reference} className="btn btn-primary"></a>
//             </div>
//         </div>
//     );
//     Vaisius.propTypes = {
//         paveiksliukas: PropTypes.string.isRequired,
//         pavadinimas: PropTypes.string.isRequired,
//         aprasymas: PropTypes.string.isRequired,
//         nuoroda: PropTypes.string.isRequired
//     }
// };

export default fruit;
