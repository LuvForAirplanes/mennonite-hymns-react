import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Card, CardActions, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function ButtonAppBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mennonite Hymns
            </Typography>
            <IconButton>
              <SearchIcon style={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ padding: 20 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            Awake, awake the sacred song,
            To our incarnate Lord;
            Let every heart and every tongue
            Adore th' Eternal Word.
            
            That awful Word, that sov'reign Power,
            By whom the worlds were made,
            (O happy morn! illustrious hour!)
            Was once in flesh arrayed.
            
            Then shone almighty power and love,
            In all their glorious forms,
            When Jesus left His throne above,
            To dwell with sinful worms.
            
            To dwell with misery below,
            The Saviour left the skies,
            And sunk to wretchedness and woe,
            That worthless man might rise.
            
            Adoring angels tune their songs,
            To hail the joyful day;
            With rapture then let mortal tongues
            Their grateful worship pay.
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
