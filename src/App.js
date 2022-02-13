
import React from 'react';
import {CssBaseline, Grid} from '@material-ui/core';
import header from './components/header/header.jsx';
import map from './components/map/map';
import list from './components/list/list';


const App=() =>{
  return (
<div>

<>

      <CssBaseline />
      <header/>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <list/>
        </Grid>
       
        <Grid item xs={12} md={8}>
          <map/>
        </Grid>
      </Grid>
    </>
</div>
  );
}

export default App;
