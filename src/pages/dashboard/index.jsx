/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ContainerDashboard, ContainerToolAndList, ContainerListAndCar } from "./styled-components";
import HeaderComponent from "../../components/HeaderComponent";
import ToolsComponent from "../../components/ToolsComponent"
import ListCardComponent from "../../components/ListCardComponent"
import CardInfoComponent from "../../components/CardInfoComponent"

const Dashboard = () => {
  const userData = localStorage.getItem("userID")
  const fakeData = useSelector(state => state.data)
  const [sortList, setSortList] = useState([])
  const navigate =  useNavigate()

  useEffect(()=>{
    if(!userData){
      navigate('/login')
    }
    if(fakeData) {
      const fakeDataSort = [...fakeData].sort((a,b)=> a.dateLastPayment < b.dateLastPayment ? 1 : -1)
      setSortList(fakeDataSort)
    }
  }, [fakeData])

  return (
    <ContainerDashboard>
      <HeaderComponent />
      <ContainerToolAndList>
        <ToolsComponent />
        <ContainerListAndCar>
          <ListCardComponent list={sortList} />
          <CardInfoComponent />
        </ContainerListAndCar>
      </ContainerToolAndList>
    </ContainerDashboard>
  );
};

export default Dashboard;
