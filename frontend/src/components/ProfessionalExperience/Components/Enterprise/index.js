import React from 'react';
import PropTypes from 'prop-types';

import { EnterpriseContainer } from './styles';

function Enterprise ({
  enterpriseClassName, logo, alt, url, enterpriseName, positionName, date,
}) {
  return (
    <EnterpriseContainer>
      <img src={logo} alt={alt} className={enterpriseClassName} />
      <div className="information">
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={url}
          >
            {enterpriseName}
          </a>
        </h3>
        <p className="position">{positionName}</p>
        <p className="date">{date}</p>
      </div>
    </EnterpriseContainer>
  );
}

Enterprise.propTypes = {
  enterpriseClassName: PropTypes.string.isRequired
  , logo: PropTypes.string.isRequired
  , alt: PropTypes.string.isRequired
  , url: PropTypes.string.isRequired
  , enterpriseName: PropTypes.string.isRequired
  , positionName: PropTypes.string.isRequired
  , date: PropTypes.string.isRequired,
};

export default Enterprise;
