import create from 'zustand'

//create store for cart and add
export const useStore = create(
    (set)=> ({
        //cart 
        cart: {
            foods :[]
        },






        // add food in cart
        addFood:(data)=> set((state)=>({
            cart:{
                foods:[...state.cart.foods,data]
            }
        })),
    })
)