import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: '',
    reducers: {
        setCategories: (state, action) => action.payload
    }
})

export const { setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer


export const getAllCategories = () => (dispatch) => {
    axios.get('http://localhost:8000/api/v1/categories')
        .then(res => dispatch(setCategories(res.data.categories)))
        .catch(err => console.log(err))
}