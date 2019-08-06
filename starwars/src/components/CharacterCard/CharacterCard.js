
// React Imports
import React from 'react';

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

// Custom Styles
import '../CharacterCard/CharacterCard.scss';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button: {
	padding: 0,
	margin: 0
  }
});

export default function CharacterCard({ character }) {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} CardContainer`}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
			<Typography variant="body2" color="textSecondary" component="p">
				Birth Year: {character.birth_year}
          </Typography>
			 <Typography variant="body2" color="textSecondary" component="p">
				Gender: {character.gender}
          </Typography>
			 <Typography variant="body2" color="textSecondary" component="p">
				Hair Color: {character.eye_color}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
				Hair Color: {character.skin_color}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
				Hair Color: {character.hair_color}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
				Height: {character.height}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="Actions">
        <Button size="small" variant="outlined" color="primary">
          Filmography
        </Button>
        <Fab size="small" className={classes.button} color="secondary">
          <Icon>favorite</Icon>
        </Fab>
      </CardActions>
    </Card>
  );
}