import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  accessToken: '',
  appNm: 'Test App',
  isDarkMode: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateName: (state, action) => {
      state.appNm = action.payload;
    },
    changeDarkMode: (state, action) => {
      console.log('action.payload', action.payload);
      state.isDarkMode = action.payload;
    },
  },
});

export const {setLoading, updateName, changeDarkMode} = mainSlice.actions;

export default mainSlice.reducer;
