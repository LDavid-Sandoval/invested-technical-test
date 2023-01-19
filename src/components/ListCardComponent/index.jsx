import React from "react";
import CardComponent from "../CardComponent";
import { ContainerListCard } from "./styled-components";

const ListCardComponent = ({ list }) => {
  
  return (
    <ContainerListCard>
      {list.length > 0 &&
        list.map((item) => (
          <CardComponent
            key={item.id}
            ID={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            secondLastName={item.secondLastName}
            email={item.email}
            partialPayment={item.partialPayment}
            estatusPayment={item.estatusPayment}
            mount={item.mount}
            lastPayment={item.lastPayment}
            dateLastPayment={item.dateLastPayment}
          />
        ))}
    </ContainerListCard>
  );
};

export default ListCardComponent;
