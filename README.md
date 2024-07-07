# This is counter example which use redux toolkit. if you want to clone this project then simply use this command to "npm install '@reduxjs/toolkit' " also install "npm install react-redux".
# if you want to develop from start then perform following steps
```
 Npm install @reduxjs/toolkit
```
# Remove redux from package.json
```
Import {createSlice} from “@reduxjs/toolkit”
```
# Slices of the store can be created using the following syntax:
```
 Const slice = createSlice({
name: ‘’,
 initialState: {},
 reducers: {
 smallReducerMethods: (state, action) => {
},
}
})
```
 # ConfigureStore combines multiple reducers and can be used as:
 ```
configureStore({
reducer: {name: slice.reducer}
})
```
6. Export actions = slice.actions;
7. Actions can be dispatched like: actions.reducerMethod(payload);
 
