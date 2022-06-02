import React from 'react';
import Title from '../utils/Title';
import Content from '../utils/Content';


const Footer = () => {
  return (<>
  
   
    <div className='flex justify-evenly mt-10 mb-10 '>
        <div>

            
<Content className=" text-brand text-2xl ">Contactanos </Content>
<div className='flex mt-3 '>
<svg className='mt-4 mr-2' width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5811 8.00408L11.5033 5.93668C11.2389 5.67355 11.1633 5.30706 11.2672 4.97815C11.6167 3.92566 11.8056 2.79798 11.8056 1.62332C11.8056 1.10647 12.2306 0.683594 12.75 0.683594H16.0556C16.575 0.683594 17 1.10647 17 1.62332C17 10.4474 9.81278 17.5987 0.944444 17.5987C0.425 17.5987 0 17.1758 0 16.659V13.3793C0 12.8625 0.425 12.4396 0.944444 12.4396C2.11556 12.4396 3.25833 12.2517 4.31611 11.904C4.64667 11.7912 5.02444 11.8758 5.27944 12.1295L7.35722 14.1969C10.03 12.8343 12.2211 10.6635 13.5811 8.00408Z" fill="white"/>
</svg>


<Content className= "text-sm font-bold mt-4" >686 555 5775 </Content></div>

<div className='flex mt-3 '>
<svg className='mt-2 mr-2'  width="24" height="20" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6 0H2.4C1.08 0 0.012 0.95625 0.012 2.125L0 14.875C0 16.0437 1.08 17 2.4 17H21.6C22.92 17 24 16.0437 24 14.875V2.125C24 0.95625 22.92 0 21.6 0ZM21.6 4.25L12 9.5625L2.4 4.25V2.125L12 7.4375L21.6 2.125V4.25Z" fill="white"/>
</svg>
<Content className= "text-sm mt-2 " >visit@cafebatllo.com </Content></div>

<div className='flex mt-3 '>
<svg className='mt-2 mr-2' width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C3.57714 0 0 3.13 0 7C0 12.25 8 20 8 20C8 20 16 12.25 16 7C16 3.13 12.4229 0 8 0ZM8 9.5C6.42286 9.5 5.14286 8.38 5.14286 7C5.14286 5.62 6.42286 4.5 8 4.5C9.57714 4.5 10.8571 5.62 10.8571 7C10.8571 8.38 9.57714 9.5 8 9.5Z" fill="white"/>
</svg>

<Content className= "text-sm mt-2 " >Electricistas #2033<br></br>
col. Libertad
 </Content>
 </div>
</div>
<div>

<Content className=' text-brand text-2xl'>Plataformas </Content>
<Content className= "text-sm font-bold mt-4"  >Didi </Content>

</div>
</div>




    </>




  )
}

export default Footer;