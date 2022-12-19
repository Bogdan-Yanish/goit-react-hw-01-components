import styled from "styled-components";

export const FriendsList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 360px;
    margin: 0 auto;
    padding: 0;
    list-style: none;
`

export const FriendItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px 0;
    margin-top: 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 8px;
`
export const FriendStatus = styled.span`
    border-radius: 50%;
    margin: auto 24px;
    height: 20px;
    width: 20px;
    background-color: ${props => (props.status 
        ? '#4caf50' 
        : '#f44336')};
`

export const FriendAvatar = styled.img`
    width: 60px;
    margin-right: 20px;    
`
export const FriendName = styled.p`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0;
    font-weight: bold;
    font-size: 32px;
`