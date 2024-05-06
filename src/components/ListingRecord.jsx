/* eslint-disable */
import { useContext, useEffect } from "react";
import RecordList from "./RecordList";
import ListingDate from "./ListingDate.jsx";
import { AppContext } from "../app-context";


function ListingRecord({ allRecords, removeMeal, setRecords }) {
  const {
    currentDate: selectedDate,
    totalCalories,
    setTotalCalories,
  } = useContext(AppContext);

  useEffect(() => {
    let caloriesTotal = 0;
    allRecords.forEach((record) => {
      if (record.date.toISOString().split("T")[0] === selectedDate) {
        caloriesTotal += record.calories;
      }
    });
    setTotalCalories(caloriesTotal);
  }, [allRecords, selectedDate]);

  const filteredRecords = allRecords.filter(
    (record) => record.date.toISOString().split("T")[0] === selectedDate
  );

  return (
    <>
      <div>
        <ListingDate />
        <span></span>
      </div>
      <RecordList
        records={filteredRecords}
        removeMeal={removeMeal}
        setRecords={setRecords}
      />
          <span>Total Calories: {totalCalories}</span>
    </>
  );
}
export default ListingRecord;
