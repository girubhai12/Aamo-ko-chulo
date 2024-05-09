import Image from 'next/image'
import css from '../styles/Services.module.css'
import healthy1 from '../assets/healthy1.png'
import women from '../assets/women.png'
export default function Services() {
    return(
        <>
        <div className={css.heading}>
            <span>What We Serve</span>
            <span>Healthy,High Quality Meals</span>
            <span> Made by Home chefs. </span>
       </div>

       {/**fetaures and services */}



       <div className={css.services}>
      {/** <div className={css.feature}>
<div className={css.ImageWrapper}>
    <Image src={healthy1} alt="" objectFit='cover' 
    layout='intrinsic'/>
</div>
<span>Easy to order</span>
<span>Only you nedd a few steps </span>
</div>
 */} 



        <div className={css.feature}>
            <div className={css.Imagewrp}>

            <Image src={women} alt="" objectFit='fill' layout='intrinsic' 
            />
             </div>
            </div>
            <div className={css.endnote}>
                <span>
                    " Serve up happiness and earn extra 
                    income with your cooking skills."
                </span>
            </div>
        
       </div>

        </>
    )
    
};
