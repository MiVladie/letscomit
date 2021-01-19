import React from 'react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Layout = props => (
    <ScrollToTop>
        { props.children }
    </ScrollToTop>
);

export default Layout;
