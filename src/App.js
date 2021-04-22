import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import PostMessages from "./components/PostMessages";
import { store } from "./actions/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";

function App() {
  return (
    <Provider store={store}>
     
      <Container maxWidth="lg">
        <AppBar position="relative" color="primary" borderRadius={16}>
          <Typography
            variant="h3"
            align="center">
           Mobile Forums
          </Typography>
        </AppBar>
        <br/>
        <br/>
       
        <div style={{backgroundColor:"gray",borderRadius: '20px'}}>
        <PostMessages />
        </div>
        <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
      </Container>
   
    </Provider>
  
  );
}

export default App;
