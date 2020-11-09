import React, {useContext } from 'react'
import ItemList from '../components/ItemList'
import { ModalContext} from '../layouts/MainLayout'
import { alertsData } from '../dataSource'

function Items() {
    const modalFunctions = useContext(ModalContext)

    const columns = [
        { title: "Item", field: "name" },
        { title: "Amount", field: "amount", type: "numeric" },
        { title: "Get by date", field: "date" },
        { title: "Location", field: "location" }
      ]

/*const data = [
    {
        name: "trash bags",
        date: new Date().toLocaleDateString()
    },
    {
        name: "trash bags",
        date: new Date().toLocaleDateString()
    },
    {
        name: "trash bags",
        date: new Date().toLocaleDateString()
    },
    {
        name: "trash bags",
        date: new Date().toLocaleDateString()
    }
]
*/

return (
    <ListContainer>
      <ItemList
        columns={columns}
        data={itemsData}
        title="Main List"
        showDetails={(rowData) => {
          modalFunctions.setIsModalOpen(true)
          modalFunctions.setItemData(rowData)
        }}
      />
    </ListContainer>
  )
}

const ListContainer = styled.div`
  padding-bottom: 48px;
`

export default Items