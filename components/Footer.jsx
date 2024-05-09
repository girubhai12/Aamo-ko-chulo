import{UilFacebook,UilGithub,UilInstagram} from "@iconscout/react-unicons"
import css from '../styles/Footer.module.css'
import Logo from '../assets/logo2.png'
import Image from "next/image"


export default function Footer() {
    return(
        <div className={css.container}>
            <span>All Right Reserved</span>
            <div className={css.social}>
                <UilFacebook size={45}/>
                <UilGithub size={45}/>
                <UilInstagram size={45}/>
                
                </div> 
                <div className={css.logo}>
                <Image src={Logo} alt="" width={70} height={60}/>
                <span>Home Based Food</span>
            </div>   
        </div>
    )
    
};
