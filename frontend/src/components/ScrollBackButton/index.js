import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import { FaChevronUp } from 'react-icons/fa';

import { Container } from './styles';

const ScrollBackButton = () => {
  const { y: pageYOffset } = useWindowScroll();

  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) {
    return false;
  }

  return (
    <Container onClick={scrollToTop}>
      <FaChevronUp className="icon" />
    </Container>
  );
};

export default ScrollBackButton;
