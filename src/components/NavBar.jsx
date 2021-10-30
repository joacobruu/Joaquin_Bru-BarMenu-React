import { AppBar, Link, makeStyles, Toolbar, Typography } from "@material-ui/core"
import CartWidget from "./CartWidget";

const useStyles = makeStyles({
  toolBar:{
    display: 'flex',
    justifyContent: 'space-between'
  },

  links:{
    display: 'flex',
    width: '40%',
    justifyContent: 'space-evenly'
  }
})

const NavBar = () => {

  const classes = useStyles()

  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={classes.toolBar}>
          <Typography variant='h1' style={{fontSize:'1.5rem', fontWeight:'bold'}}>
            MAKE-UP
          </Typography>
          <div className={classes.links}>
            <Link href='#' color="inherit">
              Paletas
            </Link>
            <Link href='#' color="inherit">
              Labiales
            </Link>
            <Link href='#' color="inherit">
              Delineadores
            </Link>
          </div>          
          <CartWidget badgeTotal="3"/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
