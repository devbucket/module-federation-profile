import React, { memo } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ProfileImage } from '../ProfileImage'

export const ProfileCard = memo(
  function ProfileCard() {
    return (
      <Card body>
        <div className="d-flex">
          <div style={{ width: 64 }} className="flex-grow-0 flex-shrink-0">
            <ProfileImage />
          </div>
          <div className="flex-grow-1 pl-3">
            <div className="h5">The expert's name</div>
            <div className="mb-3">The experts affiliation</div>
            <Button variant="primary" size="sm">
              Add to Favorites
            </Button>
          </div>
        </div>
      </Card>
    );
  }
);
