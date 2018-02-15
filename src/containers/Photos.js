import React from 'react';
import { getRouteProps, Link } from 'react-static';
import {
  Card,
  Container,
  CardBody,
  CardTitle,
  Col,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

export class Photos extends React.Component {
  constructor(props) {
    super(props);
    
    this.albumsIds = Array.from(Array(10).keys()).map(i => i + 1);
    
    this.state = {
      photos: props.photos,
    };
  
    this.getPhotosByAlbumId = this.getPhotosByAlbumId.bind(this);
    this.onPaginationClick  = this.onPaginationClick.bind(this);
  }
  
  async getPhotosByAlbumId(id) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    return await response.json();
  }
  
  onPaginationClick(id) {
    this.getPhotosByAlbumId(id).then(photos => {
      this.setState({photos: photos});
    })
  }
  
  render() {
    return (
        <Container>
          <h1>Album
            ID {this.state.photos[0].albumId} - {this.state.photos.length} Photos</h1>
          <br/>
          
          <Pagination>
            {this.albumsIds.map(id => {
              return (
                  <PaginationItem key={id}>
                    <PaginationLink onClick={() => this.onPaginationClick(id)}>
                      {id}
                    </PaginationLink>
                  </PaginationItem>
              );
            })}
          </Pagination>
          
          <br/>
          
          {this.state.photos.map(photo => {
            return (
                <Row key={photo.id}>
                  <Col>
                    <Card>
                      <CardBody>
                        <CardTitle>{`ID: ${photo.id}`}</CardTitle>
                        <Link to={`/photos/${photo.id}`}>{photo.title}</Link>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
            );
          })}
        </Container>
    );
  }
}

export default getRouteProps(Photos);