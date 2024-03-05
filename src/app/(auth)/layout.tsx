import {FC,ReactNode} from 'react';

interface AuthlayoutProps{//This is to remove the type warning of next js;
    children:ReactNode;
}

const Authlayout: FC<AuthlayoutProps> = ({children}) => {
  return (
    <div className='bg-slate-200 p-10 w-1/3 rounded-md mt-10'>
      {children}
    </div>
  )
}

export default Authlayout
