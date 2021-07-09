import { useEffect, useState } from 'react';
import HomePage from './Pages/HomePage'
import ListTripPage from './Pages/ListTripsPage';
import ApplicationFormPage from './Pages/ApplicationFormPage'
import LoginPage from './Pages/LoginPage'
import AdminHomePage from './Pages/AdminHomePage'
import CreateTripPage from './Pages/CreateTripPage'
import TripDetailsPage from './Pages/TripDetailsPage'
import './App.css';



function App() {


  return (
    <div className="App">
      <div className="Home">
        <TripDetailsPage />
      </div>
    </div>

  );
}

export default App;
