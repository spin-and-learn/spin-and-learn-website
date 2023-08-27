import { createSlice } from '@reduxjs/toolkit'
import { fetchStudents, updateStudent } from "../apiFetchs"

const initialState = {
    students: [],
    student: {},
    error: '',
    loading: false
}

const userSlicer = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        // Fetch All Students
        [fetchStudents.pending]: (state) => {
            state.loading = true
        },
        [fetchStudents.fulfilled]: (state, action) => {
            state.loading = false
            state.students = action.payload
            state.error = false
        },
        [fetchStudents.rejected]: (state, action) => {
            state.loading = false
            state.students = []
            state.error = true
        },

        // Update Student
        [updateStudent.pending]: (state) => {
            state.loading = true
        },
        [updateStudent.fulfilled]: (state, action) => {
            state.loading = false
            state.student = action.payload
            state.message = action.payload.message
            state.error = false
        },
        [updateStudent.rejected]: (state, action) => {
            state.loading = false
            state.student = {}
            state.error = true
        }
    }
})



export default userSlicer.reducer




