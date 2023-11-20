import { useState, useEffect } from 'react'
import { OrbitalNavigate } from '../components/orbital-navigate';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom'

function OrbitMenu() {
  const navigate = useNavigate()
  const [rotationValue, setRotationValue] = useState(0)
  const [oldRotationIndex, setOldRotationIndex] = useState(0)
  const [orbitItems, setOrbitItems] = useState(Array(5).fill({
    id:0,
    text:"home",
    clicked:false,
    link:"mainpage"
  }))

  const handleRotation = (index) => {
    let angleValue = 90 / orbitItems.length
    let multiple = (index - oldRotationIndex)
    if(multiple < 0){
      multiple = multiple * (-1)
    }

    if (index > oldRotationIndex) {
      setRotationValue(rotationValue - angleValue * multiple)
      setOldRotationIndex(index)
    } else if (index === oldRotationIndex) {
      // setRotationValue(rotationValue)
      setOldRotationIndex(index)

    } else {
      setRotationValue(rotationValue + angleValue * multiple)
      setOldRotationIndex(index)

    }
    navigate('/')
  }

  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className='position-absolute' style={{left:-150,top:"25%"}}>
          <OrbitalNavigate orbitItems={orbitItems} rotationValue={rotationValue} handleRotation={handleRotation} />
        </div>
      </div>
    </>
  );
}

export default OrbitMenu;