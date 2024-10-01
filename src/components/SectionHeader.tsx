import React from'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <div className="justify-start mb-4">
    <h1 className="text-2xl font-medium text-primary justify-left text-left">{title}</h1>
    <h2 className="text-xl font-medium text-accent justify-left text-left">{description}</h2>
  </div>
);

export default SectionHeader;