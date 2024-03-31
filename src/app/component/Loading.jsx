import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loading = () => {
  
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="loading-container">
    <div className="sweet-loading">
      <PropagateLoader
        color="#27b9ec"
        loading
        css={override}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </div>
  );
};

export default Loading;
