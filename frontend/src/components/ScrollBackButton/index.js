import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { useWindowScroll } from 'react-use';

import { Container } from './styles';

function ScrollBackButton () {
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
}

export default ScrollBackButton;
