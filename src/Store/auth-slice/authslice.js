import { createSlice } from "@reduxjs/toolkit"

const initialState ={
        users:[],
        logedinUser:'',
        isLogedIn: false,
        message:'',

}

const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{
        setRegisterUser:(state, action)=>{
            if (!state.users) {
                state.users = []; 
            }

            const newUser = action.payload;

            const userExists = state.users.some(user => user.email === newUser.email);

            if (!userExists) {
                state.users.push(newUser);
                // console.log("User registered successfully:", newUser);
                state.message ="Registration successful !";

            } else {
                // console.log("User already exists:", newUser.email);
                state.message = "User already exists!";

            }
        },
        setLoginUser:(state, action)=>{
            const { email, password } = action.payload;
  
            const foundUser = state.users.find(
              (user) =>
                user.email.toLowerCase() === email.toLowerCase() &&
                user.password === password
            );
      
            if (foundUser) {
                state.logedinUser = foundUser;
                state.message ="LogedIn succesfull"
            //   console.log("LogedIn succesfull",foundUser)
            } else {
                state,message = "Invalid creadential !"
            //   console.log('Invalid creadential !')
            }
        },
        setLogOutUser:(state, action)=>{

        }


    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;