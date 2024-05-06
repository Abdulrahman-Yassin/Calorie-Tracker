/* eslint-disable */
import CaloriesRecord from "./CaloriesRecord";
import styled from 'styled-components'

const Div = styled.div`
    height: 100px;
    width: 100%;
    border: 3px solid #cb3db1;
    border-radius: 10px;
    text-align: center;
    line-height: 100px;
    margin: 20px 0;
    font-size: 24px;
    color: #cb3db1;
`

function RecordList({ records, removeMeal, setRecords }) {
  if (records.length === 0) {
    return (
      <div>
        <Div style={{marginBottom:"50px"}}>No record for this date</Div>
      </div>
    );
  } else {
    return (
      <>
          <div>
            {records.map((record) => (
                <CaloriesRecord
                  key={record.id}
                  {...record}
                  date={new Date(record.date)}
                  removeMeal={removeMeal}
                />
            ))}
          </div>
      </>
    );
  }
}
export default RecordList;
