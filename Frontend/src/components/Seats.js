import React, { useState } from 'react'
import audiData from '../utils/Audi';

const Seats = (props) => {
    let audId = props.aud;

    const [occupySeat, setOccupySeat] = useState(false);

    function clickHandler() {
        setOccupySeat(!occupySeat);
    }

    console.log('printing audi data in seats.js');
    console.log(audId);

  return (
    <div className='relative top-10 w-9/12 mx-auto h-screen'>
      <div className={`flex flex-wrap gap-x-5 mx-auto w-9/12 h-[350px]  px-20 py-20 rounded-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]`}>
          {
              audiData.map( (audi) => (
                audi.id === audId && (
                audi.seatInfo.map( (seat) => (
                  !seat && <button className={`w-[50px] h-[50px] border-blue-900 border-2 rounded-md z-10 ${!occupySeat && !seat? 'bg-blue-900' : 'bg-white'}`} onClick={clickHandler}></button>
                ))
              )
              )
              
            )
          }
      </div>
    </div>
  )
}

export default Seats
