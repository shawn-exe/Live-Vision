import Image from 'next/image';
import Docs from '../images/docs_img.png';
function Docsimg() {
  return (
    <Image src={Docs} alt="Logo" className='h-full w-full rounded-3xl'/>
  )
}

export default Docsimg