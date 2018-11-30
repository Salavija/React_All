import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
  },
};

const fruit = (props) => {
    // const { fruits } = props;
    // return (
//       <Card className={fruits.card}>
//         <CardActionArea>
//           <CardMedia
//             className={fruits.title}
//             image={fruits.image}
//             context={fruits.context}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               Lizard
//             </Typography>
//             <Typography component="p">
//               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//               across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//           <Button size="small" color="primary">
//             Learn More
//           </Button>
//         </CardActions>
//       </Card>
//     );
//   }
  
  return (
    <div className="card" style={styles.card}>
        <img className="card-img-top" src={props.image} alt={props.title} style={styles.media} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.info}</p>
            <a href={props.reference} className="btn btn-primary">Informacija</a>
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
