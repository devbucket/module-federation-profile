import React, { memo } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { ProfileImage } from '../ProfileImage'

export const ProfileHeader = memo(
  function ProfileHeader() {
    return (
      <Container className="mb-4">
        <Row className="d-flex align-items-center">
          <Col xs={2}>
            <ProfileImage />
          </Col>
          <Col>
            <h1>This is the expert's name</h1>
            <h3>Something</h3>
            <p>
              <strong>The expert's affiliation line</strong>
            </p>
          </Col>
          <Col xs={3}>
            <Button variant="primary" block>Add to Favorites</Button>
            <Button variant="secondary" block>Share</Button>
          </Col>
        </Row>
      </Container>
    );
  }
);
