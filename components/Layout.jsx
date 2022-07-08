import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import Message from './Message';
// import WelcomeSection from './WelcomeSection';

const Layout = ({ children }) => (
  <>
    <Banner />
    <Header />
    {/* <WelcomeSection /> */}
    {children}
    <Message />
    <Footer />
  </>
);

export default Layout;
