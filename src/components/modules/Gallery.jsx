import React from 'react';
import Title from '../utils/Title';
import DSC_4992 from "../../assets/galeria/DSC_4992.jpg"
import DSC_4993 from "../../assets/galeria/DSC_4993.jpg"
import DSC_4995 from "../../assets/galeria/DSC_4995.jpg"
import DSC_5000 from "../../assets/galeria/DSC_5000.jpg"
import DSC_5004 from "../../assets/galeria/DSC_5004.jpg"
import DSC_5009 from "../../assets/galeria/DSC_5009.jpg"

const Gallery = () => {
  return (<>
    <Title className=' ml-14 mt-4  '>Galería</Title>
<div className='flex flex-wrap justify-center  '>
    <img className='w-1/4 m-1 rounded-lg ' src = {DSC_4992} alt = "DSC_4990"/>
    <img className='w-1/4 m-1 rounded-lg ' src = {DSC_4993} alt = "DSC_4993"/>
    <img className='w-1/4 m-1 rounded-lg ' src = {DSC_4995} alt = "DSC_4995"/>
    <img className='w-1/4 m-1 rounded-lg ' src = {DSC_5000} alt = "DSC_5000"/>
    <img className='w-1/4 m-1 rounded-lg ' src = {DSC_5004} alt = "DSC_5004"/>
    <img className='w-1/4 m-1 rounded-lg ' src = {DSC_5009} alt = "DSC_5009"/>
    
    </div>
    
    

    </>
  )
}

export default Gallery