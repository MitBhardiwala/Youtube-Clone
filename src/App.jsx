
import "./App.css";
// import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { HashRouter as Router, Route, Switch,useParams } from 'react-router-dom';
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from "./components"


function App() {
  

  return (
    <>
      <Router>
      
        <Box sx={{backgroundColor:"black"}}>
          <Navbar/>
            <Routes>
              <Route path="/" exact element={<Feed/>}></Route>
              <Route path="/video/:id" exact element={<VideoDetail/>}></Route>
              <Route path="/channel/:id" exact element={<ChannelDetail/>}></Route>
              <Route path="/search/:searchTerm" exact element={<SearchFeed/>}></Route>
            </Routes>
        </Box>
      </Router>
    </>
  );
}

export default App;
