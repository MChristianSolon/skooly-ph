import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Chat from './Chat/Chat';
import { UserContext } from '../../UserContext';
import './Stage.css';
import Questions from './Questions/Questions';
function Stage() {
  const { globalUser } = useContext(UserContext);
  //test
  console.log('user: ', globalUser);
  //
  return (
    <div>
      <Grid container>
        <Grid item xs={9} className="stage-middle-scroll">
          <div className="stage-jumbotron">
            <iframe
              width="100%"
              height="95%"
              src="//www.youtube.com/embed/1sIWez9HAbA"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <Questions />
        </Grid>
        <Grid item xs={3}>
          <Chat />
        </Grid>
      </Grid>
    </div>
  );
}

export default Stage;
