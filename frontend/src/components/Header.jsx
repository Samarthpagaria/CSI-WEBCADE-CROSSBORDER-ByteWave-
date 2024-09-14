import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header>
      <motion.div
        className="logo"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/">FarmEcom</Link>
      </motion.div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
