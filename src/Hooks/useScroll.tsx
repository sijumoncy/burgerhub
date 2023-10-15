import { useState, useEffect } from 'react';

function useScroll(debounceDelay = 200) {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    let debounceTimeout:number | undefined;

    function handleScroll() {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        setScrollValue(window.scrollY);
      }, debounceDelay);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [debounceDelay]);

  return scrollValue;
}

export default useScroll;
