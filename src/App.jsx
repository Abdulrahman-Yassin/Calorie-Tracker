/* eslint-disable */
import { useEffect, useState } from "react";
import ListingRecord from "./components/ListingRecord";
import Button from "./components/Button";
import CaloriesRecordForm from "./components/CaloriesRecordForm";
import Modal from "react-modal";
import { AppContext } from "./app-context";
import { getTodayDate } from "./utils.js";

const LOCAL_STORAGE_KEY = "caloriesRecord";

function App() {
  const [records, setRecords] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(getTodayDate);
  const [totalCalories, setTotalCalories] = useState(0);

  function save() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(records));
  }
  function removeMeal(id) {
    setRecords((prev) => prev.filter((meal) => meal.id !== id));
  }

  function loadRecords() {
    const storageRecords = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageRecords != null && storageRecords !== "undefined") {
      setRecords(
        JSON.parse(storageRecords).map((record) => ({
          ...record,
          date: new Date(record.date),
          calories: Number(record.calories),
        }))
      );
    } else {
      setRecords([]);
    }
  }

  useEffect(() => {
    if (!records) {
      loadRecords();
    } else {
      save();
    }
  }, [records]);

  const modalStyles = {
   overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formSubmitHandler = (record) => {
    const formattedRecord = {
      ...record,
      date: record.date,
      id: crypto.randomUUID(),
    };
    setRecords((prevRecords) => [formattedRecord, ...prevRecords]);

    handleCloseModal();
  };

  return (
    <div  className="mainContainer">
      <h1 style={{marginBottom:"50px"}}>Calorie Tracker</h1>
      <AppContext.Provider
        value={{
          currentDate,
          setCurrentDate,
          totalCalories,
          setTotalCalories,
        }}
        >
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Modal"
          style={modalStyles}
          className="Modal"
          overlayClassName="Overlay"
          >
          <CaloriesRecordForm
            onAddRecord={formSubmitHandler}
            onCancel={handleCloseModal}
          />
        </Modal>
        {records && (
          <ListingRecord
          allRecords={records}
          removeMeal={removeMeal}
          setRecords={setRecords}
          onClick={handleCloseModal}
          />
        )}
      </AppContext.Provider>

      <Button handleToggleForm={handleOpenModal} />
    </div>
  );
}

export default App;
