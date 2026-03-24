'use client';

import { useState, ReactNode } from 'react';

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion border rounded-lg mb-2">
      <div
        className="accordion-header p-4 font-semibold cursor-pointer flex justify-between"
        onClick={toggleAccordion}
      >
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>

      {isOpen && (
        <div className="accordion-content p-4 border-t">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
