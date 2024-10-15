import Image from "next/image";
import styles from"./page.module.css";
import Link from "next/link";
{/* <link rel="stylesheet" href="style.css"></link> */}


    
export default function Home() {
  return (
    <div>
    
    <h1 style={{ margin: '10px', padding: '5px' }}>List Of Countries</h1>
    <Link href="/country/pakistan"style={{margin:"10px", borderRadius:"10px", border: "4px solid black"
       , padding:"10px"}}>Pakistan</Link>

    <Link href="/country/india" style={{margin:"10px", borderRadius:"10px", border: "4px solid black" 
      , padding:"10px"}}>India</Link>

    <Link href="/country/china"style={{margin:"10px", borderRadius:"10px", border: "4px solid black" ,
       padding:"10px"}}>China</Link>

    <Link href="/country/turkey"style={{margin:"10px", borderRadius:"10px", border: "4px solid black" ,
       padding:"10px"}}>Turkey</Link>

    <Link href="/country/japan"style={{margin:"10px", borderRadius:"10px", border: "4px solid black" , 
      padding:"10px"}}>Japan</Link>
    </div>
  );
}
