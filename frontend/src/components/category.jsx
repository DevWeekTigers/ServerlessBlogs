import React from 'react';
import Button from 'react-bootstrap/Button';

import '../App.css';

const Category = ({ value, handleClick }) => {
  return (
    <>
      <Button variant="outline-light" size="lg" className="rounded-pill" value={value} onClick={handleClick}>
        {value}
      </Button>
    </>
  );
};

export default Category;
