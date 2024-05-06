/* eslint-disable */
import styles from "../css/CaloriesRecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";
import { RxCross1 } from "react-icons/rx";
import styled from 'styled-components'

const Ul = styled.ul`
    border: 1px solid #ccc;
    border-radius: 3px;
    list-style: none;
    display: flex;
    gap: 5px;
    color: #666;
    justify-content: space-around;
    padding: 50px 0;
    align-items: center;
    background-color: #fce5cd;
    height: 0 ;
    width: 100%;

    & li {
        color: #000;
        font-weight: bold;
    }
`

function CalorieRecord(props) {
  return (
    <>
      {props.calories >= 0 && (
        <Ul>
          <li>
            <CalorieRecordDate date={props.date} />
          </li>
          <li>{props.meal}</li>
          <li>{props.content}</li>
          <li>{props.calories}</li>
          <RxCross1
            className={styles.RxCross1}
            onClick={() => props.removeMeal(props.id)}
          />
        </Ul>
      )}
    </>
  );
}

export default CalorieRecord;
