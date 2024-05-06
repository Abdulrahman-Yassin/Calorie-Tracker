/* eslint-disable */
import { useContext } from "react";
import { AppContext } from "../app-context";
import styled from "styled-components";

const Input = styled.input`
  margin: 20px;
  background-color: #ff8200;
  color: var(--color1);
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 100%;
  max-width: 225px;
  margin-bottom: 20px;
  font-size: 16px;
  box-sizing: border-box;
`;

const Label = styled.label`
  color: #000;
  line-height: 40px;
  font-weight: 500;
  font-size: 24px;
`;

function ListingDate() {
  const { currentDate: selectedDate, setCurrentDate: setSelectedDate } =
    useContext(AppContext);
  return (
    <div >
      <Label htmlFor="date" >
        Select date:
      </Label>
      <Input
        type="date"
        id="listingDate"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{marginBottom:"50px"}}
      />
    </div>
  );
}
export default ListingDate;
