import React from 'react';
import Footer from './Footer';
import Header from './Header';
import WelcomeSection from './WelcomeSection';

const Layout = ({ children }) => (
  <>
    <Header />
    <WelcomeSection />
    {children}
    <Footer />
  </>
);

export default Layout;
