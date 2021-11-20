import { useSelector } from 'react-redux'
import { Field } from '../components/Field'
import { gridSelector } from '../store/reducers/game'
import classes from './home.module.scss'

export default function Home() {
  const grid = useSelector(gridSelector)

  return (
    <main className={classes.app}>
      <div className={classes.container}>
        <h1 className={classes.title}>Tic Tac Toe</h1>
        <div className={classes.grid}>
          {grid.map((field, i) => (
            <Field key={i} type={field} index={i} />
          ))}
        </div>
      </div>
    </main>
  )
}
