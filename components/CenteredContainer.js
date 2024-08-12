// /components/CenteredContainer.js

import React from 'react';

const CenteredContainer = ({ children }) => {
    return (
        <div className="centered-container">
            {children}
        </div>
    );
};

export default CenteredContainer;