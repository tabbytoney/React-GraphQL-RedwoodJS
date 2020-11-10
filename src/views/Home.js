import React, { useContext, useEffect, useState } from 'react'
import ItemList from '../components/ItemList'
import Summary from '../components/Summary'
import {getData} from './Users'
import { ModalContext } from '../layouts/MainLayout'

function Home() {
    const modalFunction = useContext(ModalContext)
    const [itemsData, setItemsData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await getData("https://fakerapi.it/api/v1/custom?_query=7&amount=counter&name=pokemon&date=date&location=word&description=text")
            setItemsData(res.date)
        }
    }, [])



    const columns = [
        {title: "Item", field: "name"},
        {title: "Amount", field: "amount"},
        {title: "Get By Date", field: "date"},
        {title: "Location", field: "location"}
    ]
    return (
        <>
        <Summary />
        <ItemList />
        columns={columns}
        data={itemsData}
        title="Home List"
        showDetails={(rowData) => {
            modalFunctions.setIsModalOpen(true)
            modalFunctions.setItemData(row)
        }}
        </>

    )
}

export default Home