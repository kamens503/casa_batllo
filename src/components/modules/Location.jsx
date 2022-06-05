import React from 'react';
import Title from '../utils/Title';
import Content from '../utils/Content';
import mapa from '../../assets/mapa.jpg';




const Location = () => {
  return (<>
  <div className=' md:flex flex-col justify-between '>
    <Title className=' ml-14 md:ml-24       '>Ubicación</Title>
    <a   href="https://www.google.com.ar/maps/place/Av.+Electricistas+2033,+Libertad,+21030+Libertad,+B.C.,+M%C3%A9xico/@32.6475882,-115.4557814,17z/data=!3m1!4b1!4m5!3m4!1s0x80d77068910527eb:0x5f20e747739df9a2!8m2!3d32.6475837!4d-115.4535927">
      <Content className= "text-sm ml-14 mb-8 md:ml-40 " >Avenida Electricistas #2033<br></br>Col.Libertad, Mexicali B.C </Content>
<img className='w-3/4 mx-auto  ' src = {mapa} alt = "mapa"/></a>

</div>


    
    </>
  )
}

export default Location