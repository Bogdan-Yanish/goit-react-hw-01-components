import styled from "styled-components";

export const ProfileWrap = styled.div`
    width: 360px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 8px;
`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px;
`
export const ProfileAvatar = styled.img`
    display: flex;
    max-width: 30%;
    border-radius: 50%;
    border: 2px #000000;
    background-color: #d3d3d3;
`
export const ProfileName = styled.p`
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 20px;
`
export const ProfileTag = styled.p`
    margin: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #808080;
`
export const ProfileLocation = styled.p`
    margin: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #808080;
`
export const StatsList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    padding: 0;
    list-style: none;
`
export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    font-size: 24px;
    text-align: center;
    border-top: 1px solid #808080;
    background-color: #d3d3d3;

    &:not(:last-child) {
        border-right: 1px solid #808080;
    }
`
export const StatsLabel = styled.span`
    padding:10px;
`
export const StatsQuantity = styled.span`
    font-weight: bold;
`





