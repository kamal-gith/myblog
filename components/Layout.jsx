import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
<<<<<<< HEAD
import Message from './Message';
=======
>>>>>>> 89742aa04f09709a7548f48453a5e106ad521a46
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
