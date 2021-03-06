import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: scroll;
  width: 770px;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const TableTag = styled.table`
  min-width: 100%;
`;

export const Filler = styled.tr`
  height: 10px;
`;

// Checkbox
export const Checkbox = styled.input`
  display: none;
`;

export const StyledCheckbox = styled.span`
  display: block;
  position: relative;
  top: 1px;
  width: 17px;
  height: 17px;
  border: 2px solid #0b7e3d;
  cursor: pointer;
`;

export const StyledCheckboxActive = StyledCheckbox.extend`
  background-color: #0b7e3d;

  &:after {
    position: absolute;
    right: 1px;
    top: -5px;
    color: white;
    font-weight: 600;
    content: '✓';
  }
`;

export const NoDataDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;
  background-color: rgb(255, 255, 255, 0.7);

  font-size: 18px;
  font-weight: 500;
  color: #747474;
`;
