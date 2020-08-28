import React from 'react';
import PropTypes from 'prop-types';

import { ItemContainer } from './styles';

function Item ({
  header2Classname,
  logo, alt, name, eventName, eventFirstInformation, eventSecondInformation, eventThirdInformation, date, fileUrl1, fileUrl2, fileUrl3, githubUrl,
}) {
  return (
    <ItemContainer>
      <img src={logo} alt={alt} />
      <div className="information">
        <h2 className={header2Classname}>{name}</h2>
        <h3>
          {eventName}
        </h3>

        {
          eventFirstInformation
          && <p>{eventFirstInformation}</p>
        }
        {
          eventSecondInformation
          && <p>{eventSecondInformation}</p>
        }
        {
          eventThirdInformation
          && <p>{eventThirdInformation}</p>
        }

        <p>{date}</p>

        <div className="icons">
          {
            fileUrl1
            && (
              <span className="file" title="Arquivo">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={fileUrl1}
                >
                  <i className="far fa-file-alt" />
                </a>
              </span>
            )
          }
          {
            fileUrl2
            && (
              <span className="file" title="Arquivo">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={fileUrl2}
                >
                  <i className="far fa-file-alt" />
                </a>
              </span>
            )
          }
          {
            fileUrl3
            && (
              <span className="file" title="Arquivo">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={fileUrl3}
                >
                  <i className="far fa-file-alt" />
                </a>
              </span>
            )
          }
          {
            githubUrl
            && (
              <span className="github" title="Projeto no GitHub">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={githubUrl}
                >
                  <i className="fab fa-github" />
                </a>
              </span>
            )
          }
        </div>
      </div>
    </ItemContainer>
  );
}

Item.propTypes = {
  header2Classname: PropTypes.string.isRequired
  , logo: PropTypes.string.isRequired
  , alt: PropTypes.string.isRequired
  , name: PropTypes.string.isRequired
  , eventName: PropTypes.string.isRequired
  , eventFirstInformation: PropTypes.string
  , eventSecondInformation: PropTypes.string
  , eventThirdInformation: PropTypes.string
  , date: PropTypes.string.isRequired
  , fileUrl1: PropTypes.string
  , fileUrl2: PropTypes.string
  , fileUrl3: PropTypes.string
  , githubUrl: PropTypes.string,
};

export default Item;
