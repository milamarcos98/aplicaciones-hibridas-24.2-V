import React from 'react'
import styled from "styled-components"

const StyledCard = styled.div`
    padding: 20px;
    border: 1px solid #ccc;

    h2{
        color: #333
    }

    p{
        color: #666
    }

`

const Card = () => {
  return (
    <StyledCard>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad reiciendis vel quas mollitia vero natus alias odio, ea nemo modi, quibusdam perferendis in maxime dolores optio similique non velit.</p>
    </StyledCard>
  )
}

export default Card