import { useState } from "react";
import Navbar from "./Navbar/navbar";
import { useRouter } from "next/router";
import Homepage from "./Homepage/homepage";

export default function Home() {

  const[points,setPoints]=useState(10);
  
  const router = useRouter();

  const goToHomePage = () => {
    router.push("/Homepage/homepage"); 
  };

  const handleClick=()=>{
    console.log(points)
         setPoints(points-1);
  }
  return (
    <>
      <Navbar points={points} onclick={handleClick}/>
        <button onClick={goToHomePage}>Home Page</button>
        <Homepage points={points} onclick={handleClick}/>
    </>
  );
}
