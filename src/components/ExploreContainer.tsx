import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
  description?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, description }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <p>{description}</p>
    </div>
  );
};

export default ExploreContainer;
