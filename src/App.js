import "./App.css";
import PageTitleDiv from './components/PageTitle';
import React, { useEffect, useState } from "react";
import Data from './components/Data';
import { Divider } from 'semantic-ui-react';


const axios = require('axios');

function App() {
    
    return (
 
      <div className="Container" class="ui text container">

    <div className="App">
       🚀
        </div>

        <div className="ui divider"></div>
      
    <div className="PageTitleDiv">
        <PageTitleDiv />
      </div>
      <div class="ui focus input"><input type="text" placeholder="Search..." /></div>
    <div className="DataDiv">
      <Data/> 
      
    </div>

    </div>
    )
}


  

export default App;
