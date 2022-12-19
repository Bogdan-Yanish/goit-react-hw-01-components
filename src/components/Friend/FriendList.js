import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsList } from './Friend.styled'

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            { friends.map(({ id, avatar, name, isOnline}) => (
                <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                ></FriendListItem>
            ))}
        </FriendsList>
    )
}

FriendList.propTypes = {
    friends:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
        })
    ).isRequired,
}