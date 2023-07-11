 import React from "react";
import { ReactDOM } from "react";
import Header from "./MainComponent/header";
 import Footer from "./MainComponent/footer";
import Content from "./MainComponent/content";
 

 function App(){

  let person={
    name:"md : Babul Hossain",
    title:"full stack web developer",
    skill1:"HTML",
    skill2:"CSS",
    skill3:"JavaScript",
    links1:"Facebook",
    links2:"Twitter",
    links3:"Github"
  }

  return(
   
    <div >

      <Header title='welcome to the home of knowledge'/>
      <Content/>
      <Footer {...person}/>

    </div>
  )
 }

 export default App








