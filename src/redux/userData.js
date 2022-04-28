import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 
export const setData = createAsyncThunk(
    'setData',
    async (params) => {
        const uri = params.uri;
        const data = params.data;

        await taskAPI.setData(uri, data);
    }
)

//
export const getData = createAsyncThunk(
    'getData',
    async (uri) => {
        const response = await taskAPI.getData(uri);

        return response.data;
    }
);

//
export const updateData = createAsyncThunk(
    'updateData',
    async (params) => {
        const uri = params.uri;
        const id = params.id;
        const data = params.data;

        await taskAPI.updateData(uri, id, data);
    }
);

//
export const deleteData = createAsyncThunk(
    'deleteData',
    async (params) => {
        const uri = params.uri;
        const id = params.id;

        await taskAPI.deleteData(uri, id);
    }
);

const userData = createSlice({
    name: "user-control",
    initialState: {
        data: [{
            userName: "",
            password: "",
        }],
    },
    reducers: {
        testData: (state) => {
            state.data
        }
    },

    // handle call API 
    extraReducers: (builder) => {
        builder
            // set data
            .addCase(setData.pending, (state) => {
                //...
            })
            .addCase(setData.fulfilled, (state, action) => {
                //...
            })
    }
})

export const { testData } = userData.actions;

export default userData.reducer;