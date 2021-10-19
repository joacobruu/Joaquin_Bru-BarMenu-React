import { AppBar, Toolbar, Typography } from "@material-ui/core"
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' style={{flexGrow: 1}}>
            Menu Bar
          </Typography>
          <CartWidget badgeTotal="3"/>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default NavBar
