import {FC,ReactNode} from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpLeftSquareIcon } from 'lucide-react';
interface AuthlayoutProps{//This is to remove the type warning of next js;
    children:ReactNode;
}

const Authlayout: FC<AuthlayoutProps> = ({children}) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
       <Link href={'/'}>
         <div className='p-10 top-0 left-0 fixed flex flex-row gap-1 justify-center'>
            <div className=' text-white'>
             <ArrowUpLeftSquareIcon/>
            </div>
            <div className=' text-white'>
             Go back
            </div>
          </div>
       </Link>
    <div className='bg-slate-200 p-10 w-1/3 rounded-md '>
      {children}
    </div>
    </div>
  )
}

export default Authlayout
