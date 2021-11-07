import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '20%',
    marginBottom: '1rem'
  },

  cant: {
    fontSize: '1rem',
  },

  icon: {
    color: '#3F51B5'
  },

  span: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
})

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial)

  const classes = useStyles()

  const countSum = () => {
    if(count < stock ) setCount(count + 1)
  }

  const countRes = () => {
    if(count > 1) setCount(count - 1)
  }

  return (
    <div className={classes.container}>
      <span className={classes.span} onClick={() => countRes()}><RemoveIcon className={classes.icon} /></span>
      <Typography component= 'p' className={classes.cant}>{count}</Typography>
      <span className={classes.span} onClick={() => countSum()}><AddIcon className={classes.icon} /></span>
    </div>
  )
}

export default ItemCount
