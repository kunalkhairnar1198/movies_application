import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  logedinUser: null,
  isLogedIn: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRegisterUser: (state, action) => {
      if (!state.users) {
        state.users = [];
      }

      const newUser = action.payload;
      state.users = [...state.users, newUser];
    },

    setLoginUser: (state, action) => {
      state.logedinUser = action.payload;
    },
    setLogOutUser: (state, action) => {
      state.logedinUser = null;
    },
    deleteUser(state, action) {
      const indexToRemove = state.users.findIndex(
        obj => obj.id === action.payload.id,
      );
      state.users.splice(indexToRemove, 1);
      console.log(state.users);
    },
  },
});

export const {authActions} = authSlice.actions;
export default authSlice.reducer;
