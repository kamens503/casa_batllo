import React from "react";
import Title from "../utils/Title";
import Content from "../utils/Content";

const Schedule = () => {
  return (
    <>
      <Title className="ml-14 mb-4 mt-6 md:text-green-800 ">Horarios</Title>
      <div className="flex justify-evenly ml-14  ">
        <div>
          <Content color="text-brand">Local </Content>
          <Content className="text-sm font-bold">17.00 a 23.30 </Content>
          <Content className="text-xs ">Lunes a Domingo </Content>
        </div>
        <div>
          <Content color="text-brand">Plataformas </Content>
          <Content className="text-sm font-bold">12.30 a 23.30 </Content>
          <Content className="text-xs ">Lunes a Domingo </Content>
        </div>
      </div>
    </>
  );
};

export default Schedule;
