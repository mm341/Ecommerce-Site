import { createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState={
    cartItems:localStorage.getItem('cartitems')?
    JSON.parse(localStorage.getItem('cartitems')):[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
 };
export const cartslice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addtocart(state,action){
        const itemIndex=state.cartItems.findIndex((item)=>item.id===action.payload.id)
        if(itemIndex>=0){
            state.cartItems[itemIndex].cartQuantity +=1;
            toast.info(`increased  ${state.cartItems[itemIndex].name} cart quantity`,{
              position:'bottom-left'
            })
        }else{
            const tempProduct={...action.payload,cartQuantity:1}
            state.cartItems.push(tempProduct);
            toast.success(`added ${action.payload.name} to cart`,{
              position:'bottom-left'
            })
        }
        localStorage.setItem('cartitems',JSON.stringify(state.cartItems));
    },
    removeFromCart(state,action){
      const nextCartItems= state.cartItems.filter(
        cartItem=> cartItem.id !==action.payload.id
      );
      state.cartItems=nextCartItems;
      localStorage.setItem('cartitems',JSON.stringify(state.cartItems));
      toast.error(`removed ${action.payload.name} from cart`,{
        position:'bottom-left'
      })
    },
    decreaseCart(state,action){
      const itemIndex =state.cartItems.findIndex((item)=>item.id===action.payload.id)
      if(state.cartItems[itemIndex].cartQuantity>1){
        state.cartItems[itemIndex].cartQuantity-=1

        toast.info(`Decreased ${action.payload.name} from Quantity`,{
          position:'bottom-left'
        })
      }else if(state.cartItems[itemIndex].cartQuantity===1){
        const nextCartItems= state.cartItems.filter(
          cartItem=> cartItem.id !==action.payload.id
        );
        state.cartItems=nextCartItems;
        toast.error(`removed ${action.payload.name} from cart`,{
          position:'bottom-left'
        })
      }
      localStorage.setItem('cartitems',JSON.stringify(state.cartItems));

    },
    clearCart(state,action){
      state.cartItems=[]
      toast.error(`Cart Cleared`,{
        position:'bottom-left'
      })
      localStorage.setItem('cartitems',JSON.stringify(state.cartItems));

    },
    getTotals(state,action){
     let {total,quantity}= state.cartItems.reduce((cartTotal,cartItem)=>{
        const{price,cartQuantity}=cartItem;
        const itemTotal=price*cartQuantity;
        cartTotal.total+=itemTotal
        cartTotal.quantity+=cartQuantity

        return cartTotal
      },{
        total:0,
        quantity:0
      })
      state.cartTotalQuantity=quantity;
      state.cartTotalAmount=total;
    }

  },
  
})

export const { addtocart, removeFromCart,decreaseCart,clearCart,getTotals} = cartslice.actions

export default cartslice.reducer