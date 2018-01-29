
import React from 'react'
import { getRouteProps, Link } from 'react-static'
import { Card, Container, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';
//

export default getRouteProps(({ posts }) => (
    <Container>
      <br/>
      <h1>This content is Static</h1>
      <br/>
      
      {posts.map(post => {
        return (
            <Row key={post.id}>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle>{post.title}</CardTitle>
                    <CardText>{post.body}</CardText>
                    <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>
        );
      })}
    </Container>
))
