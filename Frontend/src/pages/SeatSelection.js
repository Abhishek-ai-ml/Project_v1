
import Seats from '../components/Seats';
import {useState} from 'react';

const SeatSelection = (props) => {
    let audi = props.audi;
    const [currentAudi, setCurrentAudi] = useState();
  return (
    <div className='relative top-44'>
      <div className='w-9/12 pt-10 mx-auto flex gap-x-10'>
        {
            audi.map((aud) => (
                <div key={aud}>
                    {
                        <button className='border-blue-900 border-4 px-5 py-2 rounded-lg text-blue-900 font-extrabold hover:bg-blue-900 hover:text-white transition-all duration-200 ease-in' onClick={() => setCurrentAudi(aud) }><span>Audi - </span>{aud}</button>
                    }
                </div>
            ))
        }
      </div>
      
      <div>
        {
          currentAudi === 1 ? <Seats aud={currentAudi}/> : <Seats aud={currentAudi}/>
        }
      </div>
    </div>
  )
}

export default SeatSelection
