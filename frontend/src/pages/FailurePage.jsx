import React from 'react';

const FailurePage = () => (
  <div className="failure-container">
    <div className="failure-content">
      <h2>Payment Failed</h2>
      <p>Something went wrong with your payment. Please try again.</p>
      <button onClick={() => window.location.href = '/'} className="retry-btn">Retry Payment</button>
    </div>
  </div>
);

export default FailurePage;
