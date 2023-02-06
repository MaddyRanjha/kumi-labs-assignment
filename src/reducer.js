import {
    UPDATE_CART_COUNT
} from './action';
// import bananaImg from './assets/banana.jpg'

const initialState = {
    counter:0,
    categoryArray: ['Produce','Prepared foods','Canned foods & Soups','Bakery','Dairy & Eggs','Frozen','Meat & Seafood','Produce','Prepared foods','Canned foods & Soups','Bakery','Dairy & Eggs','Frozen','Meat & Seafood'],
    item:[
        {
            'productImg': './assets/banana.png',
            'price':'0.69',
            'name':'Banana 1 ct',
            'weight':'18 oz'
        },
        {
            'productImg':'./assets/strawberries.png',
            'price':'0.69',
            'name':'Straberries',
            'weight':'1 lb'
        }
        ,
        {
            'productImg':'./assets/yogurt.png',
            'price':'0.69',
            'name':'Yogurt',
            'weight':'1 lb'
        },
        {
            'productImg':'./assets/blackberries.png',
            'price':'0.69',
            'name':'Blackberries',
            'weight':'1 lb'
        },
        {
            'productImg': './assets/banana.png',
            'price':'0.69',
            'name':'Banana 1 ct',
            'weight':'18 oz'
        },
        {
            'productImg':'./assets/strawberries.png',
            'price':'0.69',
            'name':'Straberries',
            'weight':'1 lb'
        }
        ,
        {
            'productImg':'./assets/yogurt.png',
            'price':'0.69',
            'name':'Yogurt',
            'weight':'1 lb'
        },
        {
            'productImg':'./assets/blackberries.png',
            'price':'0.69',
            'name':'Blackberries',
            'weight':'1 lb'
        }

    ]
        

    

}

function reducer(state = initialState, action){
    switch(action.type){
        case "UPDATE_CART_COUNT":
            return{
                ...state,
                counter: state.counter+1
            }
            
        default:
            return state
    }
}

export default reducer