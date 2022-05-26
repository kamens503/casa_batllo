import React from 'react';
import Title from '../utils/Title';
import Content from '../utils/Content';


const Schedule = () => {
  return (<>
  
    <Title className='ml-14 '>Horarios</Title>
    <div className='flex justify-evenly ml-14 '>
        <div>
            
<Content className='text-brand'>Local </Content>
<Content className= "text-sm font-bold" >17.00 a 23.30 </Content>
<Content className= "text-sm " >Lunes a Domingo </Content>
</div>
<div>

<Content className='text-brand'>Plataformas </Content>
<Content className= "text-sm font-bold"  >12.30 a 23.30 </Content>
<Content className= "text-sm " >Lunes a Domingo </Content>
</div>
</div>




    </>




  )
}

export default Schedule