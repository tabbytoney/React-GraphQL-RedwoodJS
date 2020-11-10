import React, { useEffect, useState } from 'react'
import RowContainer from '../components/RowContainer'
import { useEffect, useState } from 'react'
import { getData } from './Users'

function Alerts() {
  const [alertsData, setAlertsData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = getData("https://fakerapi.it/api/v1/custom?_quantity=9&name=name&date=date&description=word")
      setAlertsData(res.data)
    }
    fetchData()
  }, [])
    return (
      <>
        {alertsData.map((alert) => (
          <SmallPadding key={alert.name}>
            <RowContainer rowData={alert} type="alert" />
          </SmallPadding>
        ))}
      </>
    )
  }
  
  const SmallPadding = styled.div`
    padding-bottom: 24px;
  `

export default Alerts