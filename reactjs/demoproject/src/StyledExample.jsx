import React from 'react'
import styled from 'styled-components'

const StyledExample = () => {
    const H1 = styled.h1 `
        color:blue;
    `
    const abc = {
        color:'red',
        backgroundColor:'yellow'
    }
  return (
    <div>
        <h1 style={abc}>dfjkghkfjdg</h1>
        <H1>dfkghdt dgh fghdkjf</H1>
        <h1 className='App-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique, debitis consectetur harum officiis quos saepe facilis commodi non repellendus, totam iste impedit. Eaque dolorum pariatur quaerat rerum sequi fugit</h1>
    </div>
  )
}

export default StyledExample
