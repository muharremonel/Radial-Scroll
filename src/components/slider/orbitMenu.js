import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { OrbitalNavigate } from './sliderOrbitNavigate';

function OrbitMenu({ onSelectedChange, sliderContents }) {
  const navigate = useNavigate();
  const [rotationValue, setRotationValue] = useState(0);
  const [oldRotationIndex, setOldRotationIndex] = useState(0);

  const handleRotation = (index) => {
    onSelectedChange(index); 
    const angleValue = 90 / orbitItems.length;
    const angleDifference = index - oldRotationIndex; 

    const newRotationValue = rotationValue - (angleValue * angleDifference);
    setRotationValue(newRotationValue);
    setOldRotationIndex(index);
    navigate('/'); 
  };

  const orbitItems = sliderContents.map((content, index) => ({
    id: index,
    text: content.title,
    link: content.image
  }));

  return (
    <div style={{ height: "100vh" }}>
      <div className='position-absolute' style={{ left: -150, top: "25%" }}>
        <OrbitalNavigate orbitItems={orbitItems} handleRotation={handleRotation} rotationValue={rotationValue} />
      </div>
    </div>
  );
}

export default OrbitMenu;