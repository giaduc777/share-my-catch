import React from 'react';
import Navigation from './Navigation/Navigation';
import Container from './Container/Container';
import Footer from './Footer/Footer';

const App: React.FC = () => {

  return (
    <div>
      <Navigation />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
