import { configureStore } from '@reduxjs/toolkit'
import studentsSlice from "./slicers/studentsSlice"
import formsSlice from "./slicers/formsSlice"
import periodsSlice from "./slicers/periodsSlice"


export default configureStore({
    reducer: {
        studentsSlice,
        formsSlice,
        periodsSlice
    }
})