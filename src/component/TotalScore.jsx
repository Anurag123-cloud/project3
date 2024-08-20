import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
   
    <Header>
       <h1 className="h1">{score}</h1>
       <p>Total Score</p>
    </Header>
    
  )
}

export default TotalScore


const Header=styled.div`
    text-align: center;
    .h1{
    font-size: 75px;
    font-weight: 500;
    margin: 0px 0;
    }
    p{
    margin: 0px 0;
    font-size: 20px;
    font-weight: 600;
    }
`;

