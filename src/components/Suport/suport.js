import { Sidebar } from '../Sidebar/sidebar';
import './suport.css';

export function Suport() {
    return (
        <>
      
        
       
        <Sidebar />
        <div className='container1'>
        
        <h1 className='fw-bold' >Suporte ao aluno</h1>
    

        <div className='mt-3'>
         <p className='fs-3'>Seus canais de suporte</p>

         <div className='link-success'>
             <p className='fs-4'><i class="fa-brands fa-whatsapp fs-1 m-3"></i>link.com.br/whatsapp</p>
             <p className='fs-4'><i class="fa-solid fa-phone fs-1 m-3"></i>+55 (DDD) 90000-0000</p>
             <p className='fs-4'><i class="fa-solid fa-envelope fs-1 m-3"></i>emailtaltal@email.com</p>
         </div>

</div>

     </div>
       
        </>

    );


}
