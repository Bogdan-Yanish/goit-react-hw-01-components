import styled from "styled-components";

export const StatisticsSection = styled.section`
    width: 360px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 8px;
`
export const StatisticsTitle = styled.h2`
    margin: 0;
    padding: 32px;
    text-transform: uppercase;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 32px;
    border-bottom: 1px solid #808080;
`
export const StatisticsList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 0;
    padding: 0;
    list-style: none;
`
export const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-shadow: 0 0 3px #000000;
`
export const StatisticsLabel = styled.span`
    padding-top: 20px;
    font-size: 16px;
    color: #ffff;
`
export const Percentage = styled.span`
    padding: 10px;
    font-size: 28px;
    color: #ffff;
`

