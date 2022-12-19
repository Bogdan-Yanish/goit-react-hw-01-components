import PropTypes from 'prop-types';
import { 
    ProfileWrap, 
    Description, 
    ProfileAvatar,
    ProfileName, 
    ProfileTag,
    ProfileLocation,
    StatsList,
    StatsItem,
    StatsLabel,
    StatsQuantity,

} from './Profile.styled';

export const Profile = ({
    username, 
    tag, 
    location, 
    avatar, 
    stats: { followers, views, likes},
}) => {
    return (
        <ProfileWrap>
        <Description>
            <ProfileAvatar
                src={avatar}
                alt="User avatar"
            />
            <ProfileName>{username}</ProfileName>
            <ProfileTag>@{tag}</ProfileTag>
            <ProfileLocation>{location}</ProfileLocation>
        </Description>

        <StatsList>
            <StatsItem>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{followers}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Views</StatsLabel>
                <StatsQuantity>{views}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Likes</StatsLabel>
                <StatsQuantity>{likes}</StatsQuantity>
            </StatsItem>
        </StatsList>
    </ProfileWrap>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number
        })
}

