import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useCartContext } from "../context/CartContext"

const useStyles = makeStyles({
  toolBar:{
    display: 'flex',
    justifyContent: 'space-between'
  },

  linksContainer:{
    display: 'flex',
    width: '40%',
    justifyContent: 'space-evenly'
  },

  links:{
    color: '#fff',
    textDecoration: 'none',
    '$:visited':{
      color: '#fff'
    }
  }
})

const NavBar = () => {

  const { getCartTotal } = useCartContext()
  const classes = useStyles()
  

  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={classes.toolBar}>
          <Typography variant='h1' style={{fontSize:'1.5rem', fontWeight:'bold'}}>
            <NavLink className={classes.links} exact to='/'>MAKE-UP</NavLink>
          </Typography>
          <div className={classes.linksContainer}>            
            <Typography>
              <NavLink className={classes.links} activeStyle={{textDecoration:'underline'}} exact to='/'>Home</NavLink>
            </Typography>
            <Typography>
              <NavLink className={classes.links} activeStyle={{textDecoration:'underline'}} exact to={'/categoria/paletas'}>Paletas</NavLink>
            </Typography>
            <Typography>
              <NavLink className={classes.links} activeStyle={{textDecoration:'underline'}} exact to='/categoria/labiales'>Labiales</NavLink>
            </Typography>
            <Typography>
              <NavLink className={classes.links} activeStyle={{textDecoration:'underline'}} exact to='/categoria/delineadores'>Delineadores</NavLink>
            </Typography>
          </div>
          <NavLink className={classes.links} exact to='/carrito'><CartWidget badgeTotal={getCartTotal()}/></NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
