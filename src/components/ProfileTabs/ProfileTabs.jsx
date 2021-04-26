import React, { memo } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export const ProfileTabs = memo(
  function ProfileTabs() {
    return (
      <Tabs defaultActiveKey="overview">
        <Tab eventKey="overview" title="Overview">
          <h2>The Overview</h2>
        </Tab>
        <Tab eventKey="timeline" title="Timeline">
          <h2>Timeline</h2>
        </Tab>
        <Tab eventKey="collaborators" title="Top Collaborators">
          <h2>Top Collaborators</h2>
        </Tab>
      </Tabs>
    );
  }
);
