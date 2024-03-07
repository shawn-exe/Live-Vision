import Image from 'next/image';
import LogoLV from '../images/logoLV.png';

export default function Logo() {
  return (
    <div>
      <Image src={LogoLV} alt="Logo" className='h-24 w-36'/>
    </div>
  );
}
