import React from 'react';
import { Link } from 'react-static';
//

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      photo: {},
    };
    
    this.fetchPhoto = this.fetchPhoto.bind(this);
  }
  
  componentDidMount() {
    this.fetchPhoto(this.props.match.params.id)
        .then(photo => {
          this.setState({photo: photo[0]});
        });
  }
  
  async fetchPhoto(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?id=${id}`);
    return await response.json();
  }
  
  render() {
    return (
        <div>
          <Link to="/photos/">{'<'} Back</Link>
          <br/>
          <h3>{this.state.photo.title}</h3>
          <img src={this.state.photo.url} alt=""/>
        </div>
    );
  }
}
