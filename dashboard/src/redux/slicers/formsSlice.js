import { createSlice } from '@reduxjs/toolkit'
import { fetchForms, updateForm, updateStudent } from "../apiFetchs"

const initialState = {
    forms: [],
    form: {},
    error: false,
    message: '',
    loading: false,
}

const formsSlicer = createSlice({
    name: "forms",
    initialState,
    extraReducers: {
        // Fetch All Forms
        [fetchForms.pending]: (state) => {
            state.loading = true
        },
        [fetchForms.fulfilled]: (state, action) => {
            state.loading = false
            state.forms = action.payload
            state.error = false
        },
        [fetchForms.rejected]: (state, action) => {
            state.loading = false
            state.forms = []
        },

        // Update Form
        [updateForm.pending]: (state) => {
            state.loading = true
        },
        [updateForm.fulfilled]: (state, action) => {
            state.loading = false
            state.form = action.payload
            state.message = action.payload.message
            state.error = false
        },
        [updateForm.rejected]: (state, action) => {
            state.loading = false
            state.form = {}
            state.error = true
        },

    }
})



export default formsSlicer.reducer




