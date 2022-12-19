import PropTypes from 'prop-types';
import {
    TransactionTable,
    TableHeader,
    TableColumn,
    TableRow,
    TransactionData,
} from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
            <TableHeader>
                <TableRow>
                    <TableColumn>Type</TableColumn>
                    <TableColumn>Amount</TableColumn>
                    <TableColumn>Currency</TableColumn>
                </TableRow>
            </TableHeader>

            <tbody>
                {items.map(item => (
                    <TableRow key={item.id}>
                        <TransactionData>{item.type}</TransactionData>
                        <TransactionData>{item.amount}</TransactionData>
                        <TransactionData>{item.currency}</TransactionData>
                    </TableRow>

                ))}
                
            </tbody>
        </TransactionTable>
    )
}

TransactionHistory.propTyper = {
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
            amount:PropTypes.number.isRequired,
            currency:PropTypes.string.isRequired,
        })
    ).isRequired,
}
    