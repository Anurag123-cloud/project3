import styled from "styled-components"


const ChooseNumber = ({selectNumber, setselectNumber,Error,setError}) => {
    
    const arryNumber=[1,2,3,4,5,6];

    const errorHandler=(value)=>{
        setselectNumber(value)
        setError("")
    }
    
  return <div>
    <Danger>{Error}</Danger>
    <NumberColumns>
    {
        arryNumber.map((value,i)=>(
            <Box $isSelected={value===selectNumber}
            key={i} onClick={()=>errorHandler(value)}
            >{value}</Box>
            
        ))

       
    } 
    
    </NumberColumns>
    <Heading2>
         <h1>Select Number</h1>
    </Heading2>
    </div>
  
}

export default ChooseNumber

const Box=styled.div`
    
    border: 1px solid #000;
    width: 71px;
    height: 55px;
    display: grid;
    font-size: 24px;
    font-weight: bold;
    place-items: center;
    background-color:${(props)=>(props .$isSelected ? "black":"white")};
    color:${(props)=>(!props.$isSelected ? "black":"white")};

  
`;

const NumberColumns=styled.div`
    display:flex;
    gap:10px;
    
  
`;

const Heading2=styled.div`
h1{
display: flex;
    justify-content: right;
    margin: 10px 0;

}

`
const Danger=styled.p`
    display: flex;
    justify-content: right;
    color:red;
    

`
