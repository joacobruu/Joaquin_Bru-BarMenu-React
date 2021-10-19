import { List, ListItem, ListItemText } from "@material-ui/core"

const ItemListContainer = ({ name, description }) => {
  return (
    <div>
      <List dense={true}>
        <ListItem>
          <ListItemText 
            primary={name}
            secondary={description}
          />
        </ListItem>
      </List>
    </div>
  )
}

export default ItemListContainer
