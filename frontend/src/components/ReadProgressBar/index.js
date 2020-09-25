import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const ReadProgressBar = ({ containerReference }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  const handleScroll = () => {
    if (!containerReference.current) return;

    const totalHeight = containerReference.current.clientHeight - containerReference.current.offsetTop - window.innerHeight;

    // windowScrollTop tries a bunch of different values which fixes undefined values for some browsers (e.g. Safari).
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (windowScrollTop === 0) {
      setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (<Container width={`${readingProgress}%`} />);
};

ReadProgressBar.propTypes = {
  containerReference: PropTypes.object.isRequired,
};

export default ReadProgressBar;