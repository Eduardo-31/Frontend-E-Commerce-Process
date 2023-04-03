import { configureStore } from '@reduxjs/toolkit'
import categories from './slices/categories.slice'

export default configureStore({
    reducer: {
        categories
    }
})