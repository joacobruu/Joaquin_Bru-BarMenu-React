import { Card, CardContent, Typography, IconButton } from "@material-ui/core"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useState } from "react";

const ItemCount = ({ name, description }) => {

  const [count, setCount] = useState(1)

  const countSum = () => {
    setCount(count + 1)
  }

  const countRes = () => {
    if(count > 1) setCount(count - 1)
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5">
            {name}
          </Typography>
          <Typography variant="h6">
            {description}
          </Typography>
          <div style={{display: "flex"}}>
            <IconButton onClick={countRes} aria-label="delete" size="small">
              <ArrowDownwardIcon fontSize="inherit" />
            </IconButton>
            <span>{count}</span>
            <IconButton onClick={countSum} aria-label="delete" size="small">
              <ArrowUpwardIcon fontSize="inherit" />
            </IconButton>
          </div>          
        </CardContent>
      </Card>
    </div>
  )
}

export default ItemCount
