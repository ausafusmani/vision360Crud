import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'form',
  initialState: {
    data: [],
    editIndex: -1,
    editFormData : null,
    formMode : 'add'
  },
  reducers: {
    addFormData: (state, action) => {
        state.data.push(action.payload)
    },
    updateFormData : (state,action) => {
        let updatedId = action.payload.id;
        const index = state.data.findIndex((item) => item.id === updatedId);
        if (index !== -1) {
            state.data[index] = { ...state.data[index], ...action.payload };
        }
        
    },
    setEditFormData : (state,action) => {
        state.editFormData = action.payload
    },
    setFormMode : (state,action) => {
        state.formMode = action.payload
    },
    deleteFormData : (state,action) => {
        let data = state.data.filter(data=> {
            return data.id !== action.payload
        })
        state.data = data
    }
  },
});

export const { addFormData, setEditFormData,deleteFormData,setFormMode,updateFormData } = slice.actions;

export const selectFormData = (state) => state.form.data;

export default slice.reducer;
