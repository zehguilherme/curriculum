import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer } from './styles';

function Button ({
  phoneNumberHref, title, iconClassName, phoneNumber,
}) {
  return (
    <ButtonContainer>
      <a href={`tel:${phoneNumberHref}`} title={title}>
        <i className={iconClassName} />
        <span>{phoneNumber}</span>
      </a>
    </ButtonContainer>
  );
}

Button.propTypes = {
  phoneNumberHref: PropTypes.string.isRequired
  , title: PropTypes.string.isRequired
  , iconClassName: PropTypes.string.isRequired
  , phoneNumber: PropTypes.string.isRequired,
};

export default Button;
