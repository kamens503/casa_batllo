import React from 'react';
import Title from '../utils/Title';
import Content from '../utils/Content';


const Schedule = () => {
  return (<>
  <div className='md:flex flex-col ml-14 mt-4    ' >
    <Title className='ml-16; md:text-6xl ml-0   '>Horarios</Title>
    <div className='flex justify-evenly'>
        <div>
            
<Content color="text-brand " >Local </Content>
<Content className= "text-sm font-bold" >17.00 a 23.30 </Content>
<Content className= "text-sm " >Lunes a Domingo </Content>
</div>
<div>

<Content color="text-brand" >Plataformas </Content>
<Content className= "text-sm font-bold"  >12.30 a 23.30 </Content>
<Content className= "text-sm " >Lunes a Domingo </Content>

</div>
</div>
</div>





    </>




  )
}

export default Schedule