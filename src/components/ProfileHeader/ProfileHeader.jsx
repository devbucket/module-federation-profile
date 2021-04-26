import React, { memo } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

export const ProfileHeader = memo(
  function ProfileHeader() {
    return (
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={2}>
            <Image src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" roundedCircle fluid />
          </Col>
          <Col>
            <h1>This is the expert's name</h1>
            <p>
              <strong>The expert's affiliation line</strong>
            </p>
          </Col>
          <Col xs={3}>
            <Button variant="primary" block>Add to Favorites</Button>
            <Button variant="secondary" block>Share</Button>
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
);
