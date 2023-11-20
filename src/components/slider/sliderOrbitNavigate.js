import React, {useState, useRef, useEffect} from 'react';
import { Planet } from 'react-planet';

export function OrbitalNavigate({ orbitItems, rotationValue, handleRotation }) {
  const anglePerItem = 90 / orbitItems.length;



  return (
    <div className='planet'>
      <div >
        <Planet
          satelliteOrientation="DEFAULT"
          hideOrbit
          orbitRadius={220}
          rotation={rotationValue}
          centerContent={
            <div
              style={{
                height: 400,
                width: 306,
                borderRadius: '50%',
                backgroundImage: 'url(https://anibaldepo.b-cdn.net/6.gif)',
                backgroundSize: 'contain',
                backgroundRepeat: 'space'
              }}
            />
          }
          open
        >
            {Array((orbitItems.length * 2) + (orbitItems.length + 1)).fill({}).map((blankItem, index) => {
            return <div key={`blank-${index}`} />
          })}

          {orbitItems && orbitItems.length > 0 && orbitItems.map((orbitItem, index) => {
            const isActive = rotationValue === -index * anglePerItem; 
            const lineStyle = isActive ? { width:'100px', height:'13px', backgroundColor: '#fff', borderRadius: '10px'  } : { width:'100px', height:'5px', backgroundColor: '#fff', borderRadius: '10px' }; 

            return (
              <div key={`orbitItem-${index}`} style={{ width: "100px", ...lineStyle }}>
                <span
                  className={"cursor-pointer user-select-none"}
                  style={{cursor:"pointer", display: 'block', height: '20px'}} 
                  onClick={() => handleRotation(index)}
                >
                </span>
              </div>
            )
          })}
        </Planet>
      </div>
      <div className='outer-circle'>

      </div>
    </div>
  );
}
