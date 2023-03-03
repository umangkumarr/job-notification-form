import React, { useState } from 'react';
import './App.css';
import SideMenu from "../components/SideMenu";
import { CssBaseline } from '@mui/material';
import { AppBar, Toolbar, Grid, IconButton, Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import RecruitForm from '../RecruitForm/RecruitForm';
import InternshipForm from '../InternshipForm/InternshipForm';


function App() {

  function getForm(step){
    switch(step){
      case 0 : return <RecruitForm />
      case 1 : return <InternshipForm />
      default: throw new Error('Unknown step');
    }
  }

  const [form, setForm] = useState(0);

  const Header = () => {
  
    function handleChang0(step){
      setForm(0)
    }

    function handleChange1(step){
      setForm(1)
    }
  
    return (
        <AppBar position="static">
            <Toolbar className="root">
                <Grid container alignItems="center">
                    {/* <Grid item style={{ border: '1px solid #fff' }}>
                        <InputBase className="searchInput" placeholder='Search Topic'
                            startAdornment={<SearchIcon />} />
                    </Grid> */}
                    <Button style={{margin: "0px 6px", backgroundColor: form ? "#253053" : "none"}} variant="contained" disabled={1^form} onClick={handleChang0}>Recruit Form</Button>
                    <Button style={{margin: "0px 6px", backgroundColor: 1^form ? "#253053" : "none"}} variant="contained" disabled={form} onClick={handleChange1}>Internship Form</Button>
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

  return (
    <>
      <SideMenu />
      <div className="appMain">
        <Header />
        {getForm(form)}
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
