import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from './store';

interface CalendarState {
    events: Array<any>,
}

const initialState: CalendarState = {
    events: ['sport', 'gym']
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.events.push(action.payload)
        }
    }
})

export const { add } = calendarSlice.actions

export default calendarSlice.reducer