import Image from 'next/image'
import { urlFor } from '../lib/client'
import css from '../styles/Menu.module.css'
import Link from 'next/link'
export default function Menu({foods}) {
   
    return(
      <div className={css.container}>
        <div className={css.heading}>
            <span>Our Menu</span>
            <span>Menu That Always</span>
            <span>Make You Fall in Love</span>
        </div>
        <div className={css.menu}>
            
        {/* foods */}
        {
            foods.map((food,id)=>{
                const src=urlFor(food.image).url()
                return(
                    <div className={css.food} key={id}>

                        <Link href={`./food/${food.slug.current}`}>


<div className={css.ImageWrapper}>
    <Image
    loader={() => src}

    src={src} alt=""
    objectfit="cover"
    layout="fill"
    />
</div>

    </Link>
<span>{food.name}</span>
<span> <span style={{color:'var(--themeRed)'}}>Rs.</span>{food.price[0]}</span>
                    </div>
                )
            })
        }


        </div>
      </div>
    );
    
};
