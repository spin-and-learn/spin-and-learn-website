import { createSlice } from '@reduxjs/toolkit'
import { fetchForms, updateForm, updateStudent } from "../apiFetchs"

const initialState = {
    forms: [],
    period: {},
    error: false,
    message: '',
    loading: false,
}

const periodsSlicer = createSlice({
    name: "forms",
    initialState,
    extraReducers: {
        // Fetch All Forms
        [fetchForms.pending]: (state) => {
            state.loading = true
        },
        [fetchForms.fulfilled]: (state, action) => {
            state.loading = false
            state.period = action.payload
            state.error = false
        },
        [fetchForms.rejected]: (state, action) => {
            state.loading = false
            state.period = {}
        },

        // Update Form
        [updateForm.pending]: (state) => {
            state.loading = true
        },
        [updateForm.fulfilled]: (state, action) => {
            state.loading = false
            state.period = action.payload
            state.message = action.payload.message
            state.error = false
        },
        [updateForm.rejected]: (state, action) => {
            state.loading = false
            state.period = {}
            state.error = true
        }
    }
})



export default periodsSlicer.reducer




