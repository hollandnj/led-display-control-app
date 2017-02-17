import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/buses" activeClassName="active">Buses</Link>
      {" | "}
      <Link to="/trains" activeClassName="active">Trains</Link>
      {" | "}
      <Link to="/display" activeClassName="active">Display</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
