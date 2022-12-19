import styled from "styled-components";

export const TransactionTable = styled.table`
    width: 100%;
    margin: 20px auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 8px;
`
export const TableHeader = styled.thead`
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
`
export const TableRow = styled.tr`
    width: 33%;
    color: #8a8b8e;
    font-size: 32px;
    text-align: center;
    text-transform: capitalize;
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`

export const TableColumn = styled.th`
    width: 33%;
    padding: 16px 80px;
    background-color: #02bbd7;
    color: #fff;
    font-size: 32px;
    text-transform: uppercase; 
    text-align: center;
`

export const TransactionData = styled.td`
    padding: 15px 5px;
    text-transform: capitalize;
`