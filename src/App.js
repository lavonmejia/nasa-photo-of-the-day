import "./App.css";
import PageTitleDiv from './components/PageTitle';
import React, { useEffect, useState } from "react";
import Data from './components/Data';
const axios = require('axios');


function App() {
    
    return (
    <div className="Container" >

    <div className="App">
       🚀
        </div>
      
    <div className="PageTitleDiv">
        <PageTitleDiv />
      </div>

    <div className="DataDiv">
      <Data/>
    </div>

    </div>
    )
}

  

export default App;
