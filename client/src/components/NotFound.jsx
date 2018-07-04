import React from 'react';

const NotFound = () => {
  if (window.location.pathname === '/') {
    return null;
  } else {
    return (
      <div>
        <div className="display-4">Page Not Found</div>
        <p>Sorry, this page does not exist</p>
      </div>
    );
  }
};

export default NotFound;
