import css from '../styles/Header.module.css'
import Image  from 'next/image'
import Logo from '../assets/logo2.png'
import {UilShoppingBag} from '@iconscout/react-unicons'
import { useStore } from '../store/store'


export default function Header(){

    //state in terminal

   const state= useStore((state)=>state)
   console.log(state)



    const items = useStore((state)=>state.cart.foods.length)
    return(
        <div className={css.header}>
            {/* logo side */}
            <div className={css.logo}>
                <Image src={Logo} alt="" width={70} height={60}/>
                <span>Home Based Food</span>
            </div>
            {/**menu side */}
            <ul className={css.menu}>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Review</li>
                <li>Order</li>
                <li>Contact Us</li>
             

            </ul>

            {/**right side */}
            <div className={css.rightside}>
             <div className={css.cart}>
                <UilShoppingBag size={35} color="black"/>
                <div className={css.badge}>{items}</div>
             </div>
            </div>
        </div>
    )
};