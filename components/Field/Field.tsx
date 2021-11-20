import React, { useCallback } from 'react'
import { FieldType, isDisableSelector, move } from '../../store/reducers/game'
import cn from 'classnames'
import classes from './Field.module.scss'
import { useDispatch, useSelector } from 'react-redux'

type FieldProps = {
  type: FieldType
  index: number
}

export const Field: React.FC<FieldProps> = ({ type, index }) => {
  const isDisable = useSelector(isDisableSelector)
  const dispatch = useDispatch()

  const handleMove = useCallback(() => {
    dispatch(move({ index, type: FieldType.cross }))
  }, [dispatch, index])

  return (
    <div
      className={cn(classes.field, { [classes.field_isDisable]: isDisable })}
      onClick={handleMove}
    >
      <div className={cn(classes[type])} />
    </div>
  )
}
