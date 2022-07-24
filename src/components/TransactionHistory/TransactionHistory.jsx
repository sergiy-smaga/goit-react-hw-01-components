import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadItem,
  TableBody,
  TableRow,
  TableItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeadItem>Type</TableHeadItem>
        <TableHeadItem>Amount</TableHeadItem>
        <TableHeadItem>Currency</TableHeadItem>
      </TableRow>
    </TableHead>

    <TableBody>
      {items.map(item => (
        <TableRow key={item.id}>
          <TableItem>{item.type}</TableItem>
          <TableItem>{item.amount}</TableItem>
          <TableItem>{item.currency}</TableItem>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
