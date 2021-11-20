import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'

export const GAME_SIZE = 3

export enum FieldType {
  empty = '',
  cross = 'cross',
  zero = 'zero',
}

function initGrid(): FieldType[] {
  return new Array(GAME_SIZE * GAME_SIZE).fill('')
}

type InitialState = {
  grid?: FieldType[]
  isDisable?: boolean
}

const initialState: InitialState = {
  grid: initGrid(),
  isDisable: false,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    move: (state, action) => ({
      grid: state.grid.map((field, i) =>
        i === action.payload.index ? action.payload.type : field
      ),
      isDisable: true,
    }),
    autoMove: (state, action) => ({
      grid: state.grid.map((field, i) =>
        i === action.payload.index ? action.payload.type : field
      ),
      isDisable: false,
    }),
  },
})

export const gridSelector = (state: RootState): FieldType[] => state.game.grid
export const isDisableSelector = (state: RootState): boolean =>
  state.game.isDisable

export const { move, autoMove } = gameSlice.actions

export default gameSlice.reducer
