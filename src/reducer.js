import {
    ADD,
    REMOVE
} from './action';
// import bananaImg from './assets/banana.jpg'

const initialState = {
    counter:0,
    categoryArray: ['Produce','Prepared foods','Canned foods & Soups','Bakery','Dairy & Eggs','Frozen','Meat & Seafood'],
    item:[
        {
            'productImg': './assets/banana.png',
            'price':'0.69',
            'name':'Banana 1 ct',
            'weight':'18 oz',
            addToCart: true
        },
        {
            'productImg':'./assets/strawberries.png',
            'price':'0.69',
            'name':'Straberries',
            'weight':'1 lb',
            addToCart: true
        }
        ,
        {
            'productImg':'./assets/yogurt.png',
            'price':'0.69',
            'name':'Yogurt',
            'weight':'1 lb',
            addToCart: true
        },
        {
            'productImg':'./assets/blackberries.png',
            'price':'0.69',
            'name':'Blackberries',
            'weight':'1 lb',
            addToCart: true
        }

    ]
    
    
        

    

}

function reducer(state = initialState, action){
    console.log(state.addToCart);

    switch(action.type){
        case "ADD":
           
            return{
                ...state,
                counter: state.counter+1,
                addToCart: !state.addToCart,
                    
            }

        case "REMOVE":
            
            return{
                ...state,
                counter: state.counter-1,
                addToCart: !state.addToCart
                
            }
            
        default:
            return state
        
    }
}


export default reducer