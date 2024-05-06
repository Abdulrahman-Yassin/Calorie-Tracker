/* eslint-disable */
import styled from 'styled-components'

const ButtonAdd = styled.button`
  background: #6fa8dc;
  color: #000;
  display: block;
  border-radius: 15px;
  border: none;
  padding: 10px;
  font-size: 19px;
  cursor: pointer;
  flex-grow: 1;
  width: 100%;
  max-width: 255px;
  margin: auto;
`;
function Button({ handleToggleForm }) {
  return (
    <div >
      <ButtonAdd
        onClick={handleToggleForm}
        style={{marginTop:"50px"}}
      >
        Add a meal
      </ButtonAdd>
    </div>
  );
}
export default Button;
