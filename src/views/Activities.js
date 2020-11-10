import React, { useEffect, useState } from "react"
import styled from "styled-components"

import RowContainer from "../components/RowContainer"
import { getData } from './Users'


function Activities() {
  const [activitiessData, setActivitiesData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = getData("https://fakerapi.it/api/v1/custom?_quantity=13&name=word&date=date&description=text")
      setAlertsData(res.data)
    }
    fetchData()
  }, [])
  return (
    <>
      {activitiesData.map((activity) => (
        <SmallPadding key={activity.name}>
          <RowContainer rowData={activity} type="activity" />
        </SmallPadding>
      ))}
    </>
  )
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Activities