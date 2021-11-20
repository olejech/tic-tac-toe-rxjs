import { combineEpics } from 'redux-observable'
import game from './game'

export const rootEpic = combineEpics(...game)
