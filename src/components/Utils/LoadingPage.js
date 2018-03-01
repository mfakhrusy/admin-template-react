import React from 'react';

class LoadingPage extends React.Component {

  render() {
    
    return (
      <div className="loading-page">
        <img src="../../../images/loading_monkey.jpg" alt="loading-monkey" />
        <h3>Loading...</h3>
      </div>
    );
  }
}

export default LoadingPage;