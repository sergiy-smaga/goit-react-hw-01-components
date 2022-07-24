import styled from 'styled-components';

export const Table = styled.table`
  background-color: lightgray;
  width: 600px;
  margin: 50px auto;
  border: 1px solid black;
`;

export const TableHead = styled.thead`
  background-color: aqua;
  color: white;
  text-transform: uppercase;
`;

export const TableHeadItem = styled.th`
  padding: 10px;
  text-align: center;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(2n) {
    background-color: white;
  }
`;

export const TableItem = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid black;
`;
