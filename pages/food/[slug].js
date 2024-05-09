import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from '../../styles/Food.module.css';
import LeftArrow from '../../assets/arrowLeft.png';
import RightArrow from "../../assets/arrowRight.png";
import { useState } from "react";
import { useStore } from "zustand";



export default function Food({food}) {
    const src= urlFor (food.image).url();
    const[Quantity,setQuantity]= useState(1)
    const [Size,setSize]=useState(1)

    //handle Quantity
    const handleQuan= (type)=>{
        type === 'inc'?
        setQuantity((prev)=> prev+1)
        :Quantity ===1
        ?null
        :setQuantity((prev)=>prev-1);

    };

    // add to cart function 
//     const addFood= useStore ((state)=>state.addFood);
// const addToCart=()=>{
//     addFood({...food,price: food.price[Size], quantity:Quantity, size:Size})
//     console.log('food added')

const addToCart = () => {
    if (food && Array.isArray(food.price) && Size >= 0 && Size < food.price.length && Quantity > 0) {
        addFood({ ...food, price: food.price[Size], quantity: Quantity, size: Size });
        console.log('Food added to cart');
    } else {
        console.error('Invalid food item or size');
    }
};


    return (<Layout> 
<div className={css.container}>
          <div className={css.imageWrapper}>
            
          <Image 
        loader={() => src}
          alt=""
            src={src}  layout="fill" unoptimized objectFit="cover"/>


          </div>
          
          
          {/* rigt side */}
          <div className={css.right}>
            <span>{food.name}</span>
            <span>{food.details}</span>

            <span><span style={{color:"var(--themeRed)"}}>Rs.</span> {food.price[Size]}</span>

<div className={css.size}>
    <span>Size</span>
    <div className={css.sizeVaraints}>
        <div onClick={()=> setSize(0)}
        className={Size === 0 ? css.selected : "" }>
             Full Plate</div>
        <div onClick={()=> setSize(1)}
         className={Size === 1 ? css.selected : "" }
        >Half Plate</div>   
    </div>
</div>

{/* Quantityy container */}

<div className={css.quantity}>
    <span>Quantity</span>

    <div className={css.counter}>
        <Image src={LeftArrow}
        height={20}
        width={20}
        alt=""
        objectFit="contain"
        onClick={()=>handleQuan("dec")}
        />
        <span>{Quantity}</span>
        <Image src={RightArrow}
        height={20}
        width={20}
        alt=""
        objectFit="contain"
        onClick={()=>handleQuan("inc")}
        />

</div>


</div>

{/* button */}

<div className={`btn ${css.btn}`}>onClick={addToCart}
    Add to Cart
</div>
</div>
</div>
</Layout>);

    
}


export async function  getStaticPaths(){
    const paths=await client.fetch(
        `*[_type=="food" && defined(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug)=> ({params: {slug}})),
        fallback:'blocking',
    }
}

export async function getStaticProps(context){
    const {slug= ""} = context.params;
    const food= await client.fetch(
        `*[_type=="food" && slug.current == '${slug}'][0]`
    );
    return {
        props:
        {
            food,
        },
    };
}