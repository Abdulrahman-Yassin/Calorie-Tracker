/* eslint-disable */
import styled from 'styled-components'

const Div = styled.div`
    background-color: #4af9ff;
    border-radius: 15px;
    border: 2px black solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
`

const DivMonth = styled.div`
  color: #000;
    font-weight: bold;
    font-size: 0.5rem;
`

const DivDay = styled.div`
    color: #000;
    font-weight: 200;
    font-size: 1.2rem;
`
const DivYear = styled.div`
    color: #000;
    font-size: 0.4rem;
`
function CalorieRecordDate(props) {
  const month = props.date.toLocaleString("default", { month: "long" });
  const day = props.date.getDate();
  const year = props.date.getFullYear();

  return (
    <Div >
      <DivMonth >{month}</DivMonth>
      <DivDay >{day}</DivDay>
      <DivYear >{year}</DivYear>
    </Div>
  );
}

export default CalorieRecordDate;
