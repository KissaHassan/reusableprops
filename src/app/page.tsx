import Image from "next/image";
import styles from"./page.module.css";
import Link from "next/link";
{/* <link rel="stylesheet" href="style.css"></link> */}


    
export default function Home() {
  return (
    <div>
    <h1 style={{margin:"50px", borderRadius:"0px", border: "12px solid black" ,
       padding:"10px"}}>  List Of Countries</h1>
    <Link href="/country/Pakistan"style={{margin:"10px", borderRadius:"10px", border: "4px solid black"
       , padding:"10px"}}>Pakistan</Link>

    <Link href="/country/India" style={{margin:"10px", borderRadius:"10px", border: "4px solid black" 
      , padding:"10px"}}>India</Link>

    <Link href="/country/China"style={{margin:"10px", borderRadius:"10px", border: "4px solid black" ,
       padding:"10px"}}>China</Link>

    <Link href="/country/Turkey"style={{margin:"10px", borderRadius:"10px", border: "4px solid black" ,
       padding:"10px"}}>Turkey</Link>

    <Link href="/country/Japan"style={{margin:"10px", borderRadius:"10px", border: "4px solid black" , 
      padding:"10px"}}>Japan</Link>
    </div>
  );
}
