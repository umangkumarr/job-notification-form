import { AppBar, Toolbar, Grid, IconButton, Button } from '@mui/material'
import React from 'react'
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
// import SearchIcon from '@mui/icons-material/Search';


export default function Header() {

    return (
        <AppBar position="static">
            <Toolbar className="root">
                <Grid container alignItems="center">
                    {/* <Grid item style={{ border: '1px solid #fff' }}>
                        <InputBase className="searchInput" placeholder='Search Topic'
                            startAdornment={<SearchIcon />} />
                    </Grid> */}
                    <Button style={{margin: "0px 6px"}} variant="contained">Recruit Form</Button>
                    <Button style={{margin: "0px 6px"}} variant="contained">Internship Form</Button>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <LogoutIcon  />
                        </IconButton>

                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
