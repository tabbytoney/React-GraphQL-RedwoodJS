import React from 'react'
import styled from 'styled-components'

function RowContainer({ rowData }) {
    return (
        <div>
            <p>Name:{rowData.name} </p>
            <p>Date: {rowData.date} </p>
            <p>Description: {rowData.description} </p>
        </div>
    )
}

const Container = styled.div`
    border: 2px solid;
    & p {
        flex: 1 1 0px;
      }
`

export default RowContainer