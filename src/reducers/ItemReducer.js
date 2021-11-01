import { TYPES } from "../components/ItemAction";

export const ItemInitialState = {
 products: [
     {id: 1, img: "https://m.media-amazon.com/images/I/51oXwplJXSL._AC_UX342_.jpg", name: "Vestido Rosa", description: "100 % Poliéster - Cierre de cremallera - Sólo limpieza en seco.", price: "100"},
     {id: 2, img: "https://image.made-in-china.com/202f0j10gDlUiLdIbvok/Ladies-Summer-V-Necked-Dress-Fashion-Slim-Fit-Dress-for-Party-High-Quality-Elegant-Dress.jpg", name: "Vestido Negro",  description: "Con largo hasta la rodilla, está disponible entre las tallas XS y XXL. ", price: "300"},
     {id: 3, img: "https://image.made-in-china.com/202f0j10uPhUWgdzHMbk/Ladies-Summer-V-Necked-Dress-Fashion-Slim-Fit-Dress-for-Party-High-Quality-Elegant-Dress.jpg", name: "Vestido Azul", description: "Vestido Remerón con bolsillos, puntilla en el ruedo fabricado en Modal Viscosa con Lycra, adecuado para el uso casual, fiestas y/o cualquier tipo de acontecimiento.", price: "800"},
     {id: 4, img: "https://image.made-in-china.com/202f0j10pDlGVWmdrBoc/Ladies-Summer-V-Necked-Dress-Fashion-Slim-Fit-Dress-for-Party-High-Quality-Elegant-Dress.jpg", name: "Vestido Bordo", description: "•Talle único.     •Medidas: Ancho de sisa a sisa 42 cm, cadera 64 cm. Largo 78 cm. •Tela: Modal. ", price: "900"},
     {id: 5, img: "https://m.media-amazon.com/images/I/51V03wmvVLL._AC_UX385_.jpg", name: "Vestido Rojo", description: "Vestido remerón estampado Tela: Modal viscosa Talle único amplio. Hasta 160cm de busto, 93cm de largo", price: "1200"},
     {id: 6, img: "https://http2.mlstatic.com/D_NQ_NP_871225-MLM25405876449_032017-O.jpg", name: "Vestido Violeta", description: "Vestido de lino con bretel ancho y bolsillos. Botones en parte delantera. Práctico y cómodo!", price: "1050"},
 ],
 cart:[]
}

export function ItemReducer(state, action) {
switch(action.type) {
    case TYPES.ADD_TO_CART: {  
    let newItem = state.products.find(
        product => product.id === action.payload);

    let itemInCart = state.cart.find(item => item.id === newItem.id);
    
    return itemInCart 
    ? {
        ...state,
        cart: state.cart.map((item)=> 
        item.id === newItem.id 
        ? { ...item, quantity: item.quantity + 1 } 
        :item
        ),
    } 
    : { 
        ...state, 
        cart: [...state.cart, {...newItem, quantity: 1} ],
    };

    }
    case TYPES.REMOVE_ONE_FROM_CART: {  
        let itemToDelete = state.cart.find(item => item.id === action.payload);
        
        return itemToDelete.quantity > 1 
        ? {
            ...state,
            cart: state.cart.map((item) => 
            item.id === action.payload 
            ? {...item,quantity: item.quantity -1 }
            :item            
            ),
        } 
        : {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload),
        };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {   
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload),
        };
    }
    case TYPES.CLEAR_CART: {   
        return ItemInitialState;
    }
    default:
        return state;
    }
}

