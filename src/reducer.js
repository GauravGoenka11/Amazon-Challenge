// Reducer is just like data layer
//reducer is when we click in add to basket then how it dispatch the action to data layer i.e pushing the data is the important part and how we go and pull it 

// creating the initial state
export const initialState={
 //empty basket 
    basket:[],
};

//context api and redux are not same but they are the same pattern
// Both  have idea has  global store and pattern of dispatching action in the store
 //reducer just like-> listen ok u just update the basket i now what to do ,ok u remove from the basket i know what to do is the role of reducer

//  now how to write the reducer we need to do the following
//  it take to thing state and action
//  state is the state of the applicationa
//  action is the  what u want to do add to basket or remove from the basket
 const reducer=(state,action)=>{
    // it take sthe switch 
    switch(action.type){
        // whenever we recive the add to basket action like when some press add to basket  button it will dispatch the action with switch type to ADD_TO_BASKET
        //reducer will always listing to such action
        case 'ADD_TO_BASKET':
            return{
                //returing the state whatever it was at origin
                ...state ,
                //but we are changing the basket to whaterver the basket currently was
                // action item to ever we deicde to action to be happen to action
                basket:[...state.basket,action.item],
            };
            //default return state
            default:
                return state;
    }
 }
export default reducer;