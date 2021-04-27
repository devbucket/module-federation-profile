import React, { memo } from 'react';
import { View } from 'shell/View';
import { ProfileHeader } from '../components/ProfileHeader';
import { ProfileTabs } from '../components/ProfileTabs';

const ProfilePage = memo(
  function ProfilePage() {
    return (
      <View>
        <ProfileHeader />
        <ProfileTabs />
      </View>
    );
  }
);

export default ProfilePage;
