import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
		name: ""
	}
}

const filterSlice = createSlice({
  // Ім'я слайсу
  name: "filter",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  reducers: {
    changeFilter (state, action) {
      state.filters.name = action.payload;
    },
  },
});

// Генератори екшенів
export const { changeFilter  } = filterSlice.actions;

export const selectFilter = ((state) => state.filtersDetails.filters.name)





// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
