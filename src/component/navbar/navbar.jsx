import * as React from 'react';
import { AppBar,Box, Button, Typography, Toolbar} from '@mui/material';
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" align="left" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: "white" }}>HMS Hotel</Link>
          </Typography>
          <Button color="inherit"><Link to="/login" style={{ textDecoration: 'none', color: "white" }}>Login</Link></Button>
          <Button color="inherit"><Link to="/register" style={{ textDecoration: 'none', color: "white" }}>Register</Link></Button>
          <Button color="inherit"><Link to="/admin" style={{ textDecoration: 'none', color: "white" }}>Admin</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
