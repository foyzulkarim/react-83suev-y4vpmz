import React from 'react';
import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack'; // Import Stack
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // For details icon

import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '15px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  boldTitle: {
    fontWeight: 'bold',
  },
});

const GitStreamCard = ({ type, title }) => {
  const classes = useStyles();

  // Handle detail navigation (you'll add a click handler here)
  const handleDetailsClick = () => {
    // Your logic to navigate to '/details/pr/1234'
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            alt="User Avatar"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        }
        action={
          <>
            {type !== 'note' && (
              <IconButton
                onClick={() => window.open('https://github.com/facebook/react')}
              >
                {/* Adjust GitHub URL */}
                <GitHubIcon />
              </IconButton>
            )}
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </>
        }
        title={
          type === 'pullRequest'
            ? 'Pull Request #1234'
            : type === 'commit'
            ? 'Commit'
            : 'Note' // Default to "Note"
        }
        subheader={
          type === 'pullRequest'
            ? 'facebook/react | Opened 2 hours ago'
            : 'username | 2 hours ago' // Customize for commits/notes
        }
      />
      <CardMedia
        className={classes.media}
        image="https://dummyimage.com/600x400/ccc/000&text=Sample+Image"
        title="Placeholder Image"
      />
      <CardContent>
        
        <Typography variant="body1" className={classes.boldTitle}>
          {title} {/* Display the title from props */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Stack direction="row" spacing={1}>
          {/* Stack for IconButtons */}
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <BookmarkIcon />
          </IconButton>
          <IconButton>
            <Stack direction="row" spacing={1}>
              <ChatBubbleOutlineIcon />
              <Typography variant="body2">3</Typography>{' '}
              {/* Number with Typography */}
            </Stack>
          </IconButton>
          <IconButton>
            <ThumbUpIcon />
            <Typography variant="body2">10</Typography>{' '}
            {/* Number with Typography */}
          </IconButton>
          <IconButton
            onClick={handleDetailsClick}
            style={{ marginLeft: 'auto' }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default GitStreamCard;
