import React, { Fragment, memo } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { View } from 'shell/View';
import { ProfileHeader } from '../components/ProfileHeader'

const ProfilePage = memo(
  function ProfilePage() {
    return (
      <View>
        <ProfileHeader />
      </View>
    );
  }
);

export default ProfilePage;
