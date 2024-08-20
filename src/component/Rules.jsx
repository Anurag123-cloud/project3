import styled from "styled-components"


const Rules = () => {
  return (
    <Div>
    <Display>
        <h1>How to play dice game</h1>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on  dice  if selected number is equal to dice number you will get one point  </p>
      <p>if you get wrong guess then  1 point will be dedcuted </p>
      
    </Display>
    </Div>
  )
}

export default Rules

const Display=styled.div`

    background-color: #FBF1F1;
    border-radius: 25px;
    padding: 10px 26px;
    margin-top: 30px;
    width: 482px;
`
const Div=styled.div`

    display: flex;
    justify-content: center;

`
