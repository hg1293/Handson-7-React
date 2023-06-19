import{createSlice} from "@reduxjs/toolkit";
const MySlice=createSlice(
    {
        name:"MySlice",
        initialState:[
        {name:"Himanshu",Age:21,Course:"MERN",Batch:"January"},
        {name:"Joe",Age:25,Course:"MERN",Batch:"october"},
        {name:"Chirs",Age:22,Course:"MERN",Batch:"September"},
        {name:"david",Age:27,Course:"MERN",Batch:"november"},
        {name:"lee",Age:24,Course:"MERN",Batch:"October"},
        {name:"jhon",Age:26,Course:"MERN",Batch:"November"},
    ],
    reducers:
    {
        editData:(state,action)=>{
            state[action.payload.index]=action.payload.currData;
            console.log(state)
            return(state)
        },
        addUser:(state,action)=>{
            console.log(action.payload);
            state[state.length]=action.payload
            // state.push(action.payload.newObj)
            return(state)
        }
        
    }
    }
)
export const {editData}=MySlice.actions;
export const {addUser}=MySlice.actions
export default MySlice.reducer;