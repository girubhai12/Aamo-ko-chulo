import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Menu from "../components/Menu";
import { client } from "../lib/client";
import css from "../styles/Home.module.css";



export default function Home({foods}) {
 
  return (
    <Layout>
    
    <div className={css.container}>
        <Head>
          <title>Home Made Food</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo1.png" />
        </Head>
        {/* body */}
        <main>
          <Hero/>
          <Services/>
          <Menu foods={foods}/>
          <About/>
        
         
              
        </main>
      </div>
    

    </Layout>
    );
  }


  export const getServerSideProps = async()=>{
    const query = '*[_type == "food"]';
    const foods =await client.fetch(query);
    return {
      props:{
        foods
      }
    }
  } 