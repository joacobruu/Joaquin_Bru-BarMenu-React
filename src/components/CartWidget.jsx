import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const CartWidget = ({ badgeTotal }) => {
  return (
    <div>
      <Badge badgeContent={badgeTotal} color="error">
        <ShoppingCartIcon />
      </Badge>      
    </div>
  )
}

export default CartWidget
