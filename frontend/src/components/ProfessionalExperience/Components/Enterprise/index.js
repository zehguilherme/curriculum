import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaChevronDown } from 'react-icons/fa';

import { EnterpriseContainer } from './styles';

function Enterprise ({
  enterpriseClassName, logo, alt, url, enterpriseName, positionName, date, moreInformation1, item1, item2, item3, item4, item5,
}) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  function handleShowMoreInformationFromEveryEnterprise () {
    if (!isButtonClicked) setIsButtonClicked(true);
    if (isButtonClicked) setIsButtonClicked(false);
  }

  return (
    <EnterpriseContainer
      style={isButtonClicked ? { height: '%' } : null}
    >
      <div
        className="enterprise"
        style={
          moreInformation1 || item1 || item2 || item3 || item4 || item5 ? { marginBottom: 20 } : null
        }
      >
        <img
          src={logo}
          alt={alt}
          className={enterpriseClassName}
        />
        <div className="information">
          <h3>
            <a
              title="Site da empresa"
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
      </div>

      {
        (moreInformation1 || item1 || item2 || item3 || item4 || item5)
        && (
          <div
            className="more-information-button"
            style={
              isButtonClicked && moreInformation1 ? { marginBottom: 20 } : null
            }
          >

            <FaChevronDown
              style={
                isButtonClicked ? { transition: 'transform 0.3s', transform: 'rotate(180deg)' } : { transition: 'transform 0.3s', transform: 'rotate(0deg)' }
              }

              className="icon"
              onClick={handleShowMoreInformationFromEveryEnterprise}
            />

          </div>
        )
      }

      {
        isButtonClicked
        && (
          <div className="more-information">
            <p>
              {isButtonClicked && moreInformation1}
            </p>

            <ul>
              {
                (isButtonClicked && item1)
                  ? (
                    <li>
                      {item1}
                    </li>
                  ) : ''
              }
              {
                (isButtonClicked && item2)
                  ? (
                    <li>
                      {item2}
                    </li>
                  ) : ''
              }
              {
                (isButtonClicked && item3)
                  ? (
                    <li>
                      {item3}
                    </li>
                  ) : ''
              }
              {
                (isButtonClicked && item4)
                  ? (
                    <li>
                      {item4}
                    </li>
                  ) : ''
              }
              {
                (isButtonClicked && item5)
                  ? (
                    <li>
                      {item5}
                    </li>
                  ) : ''
              }
            </ul>
          </div>
        )
      }
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
  , date: PropTypes.string.isRequired
  , moreInformation1: PropTypes.string
  , item1: PropTypes.string
  , item2: PropTypes.string
  , item3: PropTypes.string
  , item4: PropTypes.string
  , item5: PropTypes.string,
};

export default Enterprise;
