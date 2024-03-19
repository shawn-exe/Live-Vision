import Image from 'next/image';
import Cam from '../images/homegraphic.svg';
function homegraphic() {
  return (
    <Image src={Cam} alt="Logo" className='h-5/6' />
  )
}

export default homegraphic