import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function SingleMessage({ message }) {
  return (
    <div>
      <Box m={2}>
        <Card className="chat-cardColor">
          <CardContent className="chat-cardContent">
            <Typography>
              {message.user}: {message.text}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default SingleMessage;
