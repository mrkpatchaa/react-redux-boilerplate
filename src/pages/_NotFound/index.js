import { Link } from 'react-router-dom';

import React from 'react';

const NotFoundPage = () => (
  <div>
    404 - Not found <br />
    <Link to="/">Got back to homepage</Link>
  </div>
);

export default NotFoundPage;
