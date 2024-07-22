'use client';

import { BsArrowUp } from 'react-icons/bs';
import { Button } from '@/components/ui/button';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Pour un défilement doux
  });
};

function ButtonScroll() {
  return (
    <Button
      variant="outline"
      className="rounded-full p-3"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <BsArrowUp className="text-lg" />
    </Button>
  );
}

export default ButtonScroll;
