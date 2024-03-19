import Image from 'next/image';
import LogoLV from '../images/LVlogo.png'

export default function Logo() {
  return (
    <div>
      <Image src={LogoLV} alt="Logo" className='h-18 rounded-xl w-28'/>
    </div>
  );
}
