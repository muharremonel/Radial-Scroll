import { Planet } from 'react-planet';

export function OrbitalNavigate({ orbitItems, rotationValue, handleRotation }) {
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
                backgroundImage: 'url(https://demo.anibalbilisim.com/gorsel/circle.svg)',
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
            return (
              <div key={`orbitItem-${index}`} style={{ width: "100px" }}>
                <span
                  className={"cursor-pointer user-select-none"}
                  style={{cursor:"pointer"}}
                  onClick={() => handleRotation(index)}
                >
                  {orbitItem.text} - {index}
                </span>
              </div>
            )
          })}
        </Planet>
      </div>
      <div className='outer-circle'></div>
    </div>
  );
}
