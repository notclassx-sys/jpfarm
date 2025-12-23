import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <BookingForm />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;