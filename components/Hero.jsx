import Image from 'next/image'
import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png';
import home from '../assets/home.png';
import location from '../assets/location.png'
import {UilLocation} from '@iconscout/react-unicons'
import {UilPhone} from '@iconscout/react-unicons'
import p1 from '../assets/p1.jpg'

export default function Hero(){
    return(
        <div className={css.container}>
            {/**left side  */}
            <div className={css.left}>

                <div className={css.cherryDiv}>
                    <span>More Than Faster</span>
                    <Image src={Cherry} alt="" width={40} height={25}/>
                </div>

                 <div className={css.heroText}>
                    <span>Be The Fastest</span>
                  <span>In Delivering</span>
                   <span>Home Based <span style={{color: "var(--themeRed)"}}>Food</span></span>
                </div>
                <span className={css.miniText}>
                Explore who’s cooking in
                   your neighborhood.
                </span>
                
                <div class={css.loc_placeholder}>
         
                <Image src={location} alt="" width={40} height={25}/>
                    <input type="text" placeholder='Enter your zip code..' />

                </div>
                 <div className={css.signin}>
                 <span className={css.account}>Already have an account? </span>   
              <span className={css.sig}>  Sign in</span>
                 </div>
                 <div className={`btn ${css.btn}`}>
                    Get Started
                 </div>
            </div>

            {/**rigt side */}
        <div className={css.right}>
            <div className={css.imageContainer}>
                <Image src={home} alt="" layout="intrinsic"/>
            </div>
            <div className={css.ContactUs}>
                <span>Contact US</span>
                <div>
                    <UilPhone color="black"/>
                </div>
            </div>
            
            
        </div>
        </div>
    );
}