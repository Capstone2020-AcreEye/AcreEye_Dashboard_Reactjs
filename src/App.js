import React from 'react';
import './App.css';
import SideNavbar from './components/SideNavbar';
import Statusbar from './components/Statusbar';
import HomeDashboard from './components/HomeDashboard';

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <div id="wrapper">
          <SideNavbar></SideNavbar>

          <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <Statusbar></Statusbar>
              <div class="container-fluid">
              <HomeDashboard></HomeDashboard>
              </div>

            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
