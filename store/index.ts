import { configureStore, AnyAction } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics'
import { rootReducer } from './reducers'

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState>()
export const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
})

epicMiddleware.run(rootEpic)

export type RootState = ReturnType<typeof rootReducer>
