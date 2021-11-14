import classes from './home.module.scss'

export default function Home() {
  return (
    <main className={classes.app}>
      <div className={classes.container}>
        <h1 className={classes.title}>Tic Tac Toe</h1>
        <div className={classes.grid}>
          <div className={classes.field}>
            <div className={classes.cross}></div>
          </div>
          <div className={classes.field}>
            <div className={classes.zero}></div>
          </div>
          <div className={classes.field}></div>

          <div className={classes.field}></div>
          <div className={classes.field}></div>
          <div className={classes.field}></div>

          <div className={classes.field}></div>
          <div className={classes.field}></div>
          <div className={classes.field}></div>
        </div>
      </div>
    </main>
  )
}
