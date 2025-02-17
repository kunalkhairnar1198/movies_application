import { createSlice } from "@reduxjs/toolkit"

const initialState ={
        users:[],
        logedinUser:null,
        isLogedIn: false,
        message:'',

}

const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{
        setRegisterUser: (state, action) => {
            if (!state.users) {
                state.users = [];
            }
        
            const newUser = action.payload;
            const userExists = state.users.some(user => user.email === newUser.email);
        
            if (!userExists) {
                state.users = [...state.users, newUser]; 
                state.message = "Registration successful!";
            } else {
                state.message = "User already exists!";
            }
        },
        
        setLoginUser: (state, action) => {
            const { email, password } = action.payload;
          
            const foundUser = state.users.find(
              (user) => user.email.toLowerCase() === email.toLowerCase()
            );
          
            if (foundUser) {
              if (foundUser.password === password) {
                state.logedinUser = foundUser;
                state.message = "Logged in successfully!";
              } else {
                state.logedinUser = null;
                state.message = "Invalid password!";
              }
            } else {
              state.logedinUser = null;
              state.message = "User does not exist!";
            }
          },          
        setLogOutUser:(state, action)=>{
            state.logedinUser = null
        },
        deleteUser(state, action){
            const indexToRemove = state.users.findIndex(obj => obj.id === action.payload.id)
            state.users.splice(indexToRemove ,1 )
        }


    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;