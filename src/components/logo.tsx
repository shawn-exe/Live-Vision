import Image from 'next/image';
import LogoLV from '../images/logoLV.png';

export default function Logo() {
  return (
    <div>
      <Image src={LogoLV} alt="Logo" className='h-30 w-40'/>
    </div>
  );
}
