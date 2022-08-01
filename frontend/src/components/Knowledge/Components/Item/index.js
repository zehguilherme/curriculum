import React from 'react';

import PropTypes from 'prop-types';

import { ItemContainer } from './styles';

function Item ({
  image, imageAlt, iconClassName, title3,
}) {
  return (
    <ItemContainer>
      {
        image
        && <img src={image} alt={imageAlt} />
      }
      {
        iconClassName
        && <i className={iconClassName} />
      }
      {
        title3
        && <h3>{title3}</h3>
      }
    </ItemContainer>
  );
}

Item.propTypes = {
  image: PropTypes.string.isRequired
  , imageAlt: PropTypes.string.isRequired
  , iconClassName: PropTypes.string.isRequired
  , title3: PropTypes.string.isRequired,
};

export default Item;
