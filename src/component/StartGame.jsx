import styled from 'styled-components';

const StartGame = ({toggle}) => {
  return (
    <Container>

        <div>
        <img src='/dices 1.png' alt=''/>
        </div>

        <InnerContainer>
            <div>
            <Heading>DICE GAME</Heading>
            <Button onClick={toggle}>Play Now</Button>
            </div>
        </InnerContainer>
      
    </Container>
  )
}

export default StartGame;
const Button=styled.button`
    background-color: black;
    color: #fff;
    padding: 10px 49px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 11px;
    border: 1px solid transparent;
    transition: 0.5s background ease-in;
    &:hover{
    background-color: white;
    color:black;
    border: 1px solid #000;
    transition: 0.5s background ease-in;
    }
`;

const Container=styled.div`
    max-width: 1100px;
    display: flex;
    margin: 166px auto;
   justify-content: space-between;
`;

const InnerContainer=styled.div`
    display: flex;
    align-items: center;
`;
const Heading=styled.h1`
   font-size:65px;
`;