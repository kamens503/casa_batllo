import React from 'react';
import Title from '../utils/Title';
import Content from '../utils/Content';
import mapa from '../../assets/mapa.jpg'



const Location = () => {
  return (<>
    <Title className=' ml-14 m '>Ubicación</Title>
    <Content className= "text-sm ml-14 mb-8 " >Avenida Electricistas #2033<br></br>Col.Libertad, Mexicali B.C </Content>
    <img className='w-3/4 mx-auto ' src = {mapa} alt = "mapa"/>

    
    </>
  )
}

export default Location