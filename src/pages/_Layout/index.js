import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import React from 'react';

const Layout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={componentProps => (
      <>
        {/* Header, sidebar,... */}
        <Component {...componentProps} />
      </>
    )}
  />
);

export default Layout;

Layout.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
