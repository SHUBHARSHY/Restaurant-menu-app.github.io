import React, { useState } from "react";
import "./Style.css"
import Menu from "./MenuApi.js"
import MenuCard from "./MenuCard"
import Navbar from './Navbar'

let uniqueList =[...new Set(
    Menu.map((curElem)=>{
        return curElem.category;
    })
),
"All"
]

let Restaurent = () => {
    let [menuData,setMenuData]= useState(Menu);
    let [menulist]=useState(uniqueList)

     const filterItem =(category) =>{

        if(category==="All"){
            setMenuData(Menu)
            return
        }
    const updatedList= Menu.filter((curElem)=>{
        return(
            curElem.category === category
        )
    })
    setMenuData(updatedList);
}

  return (
   <>
   <Navbar filterItem={filterItem} menulist={menulist}/>
   <MenuCard menuData={menuData}/>
   </>
  );
};
export default Restaurent;
