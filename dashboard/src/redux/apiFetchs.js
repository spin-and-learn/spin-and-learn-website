import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


// Fetch All Periods
export const fetchPeriods = createAsyncThunk("periods/fetchPeriods", async ({filter}) => {
    return axios.get(`periods?${filter}`, {
        filter
    }).then((res) => res.data)
})

// Fetch All Students
export const fetchStudents = createAsyncThunk("students/fetchStudents", async () => {
    return axios.get(`students`).then((res) => res.data)
})

// Fetch All Forms
export const fetchForms = createAsyncThunk("students/fetchForms", async () => {
    return axios.get(`forms`).then((res) => res.data)
})

// Update Form
export const updateForm = createAsyncThunk("forms/updateForm", async ({ id, data }) => {
    return axios.put(`forms/${id}`, data).then((res) => {
        console.log(data);
        return res.data
    })
})

// Update Form
export const updateStudent = createAsyncThunk("students/updateForm", async ({ id, data }) => {
    return axios.put(`students/${id}`, data).then((res) => {
        console.log(data);
        return res.data
    })
})