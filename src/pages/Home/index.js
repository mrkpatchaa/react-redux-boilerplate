import { Link } from 'react-router-dom';

import React from 'react';

const HomePage = () => (
  <div>
    Home <br />
    <Link to="/about">&gt;About</Link>
  </div>
);

export default HomePage;
