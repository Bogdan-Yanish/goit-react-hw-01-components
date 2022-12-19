import PropTypes from 'prop-types';
import {
    FriendItem,
    FriendStatus,
    FriendAvatar,
    FriendName,
} from './Friend.styled'

export const FriendListItem = ({
    avatar,
    name,
    isOnline
}) => {
    return (
        <FriendItem>
            <FriendStatus status={isOnline}></FriendStatus>
            <FriendAvatar src={avatar} alt="User avatar"/>
            <FriendName>{name}</FriendName>
        </FriendItem>
    )
}

FriendListItem.propTypes = {
    avatar:PropTypes.string,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool,
}
