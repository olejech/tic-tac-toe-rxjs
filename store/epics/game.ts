import { Action } from '@reduxjs/toolkit'
import { ofType, StateObservable } from 'redux-observable'
import { RootState } from '../index'
import { autoMove, FieldType, move } from '../reducers/game'
import { map, tap, Observable, delay, withLatestFrom, takeWhile } from 'rxjs'

export const autoMoveEpic = (
  actions$: Observable<Action>,
  state$: StateObservable<RootState>
) =>
  actions$.pipe(
    ofType(move),
    withLatestFrom(state$),
    delay(500),
    tap(val => console.log(val)),
    map(([, state]) => state.game.grid.findIndex(v => !v)),
    takeWhile(val => val !== -1),
    map(index => autoMove({ index, type: FieldType.zero }))
  )

const game = [autoMoveEpic]
export default game
