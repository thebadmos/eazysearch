import React, { Component } from 'react';
import axios from "axios";


const client_ID = 'f61c1b47e65d6ee85732';
const client_Secret = 'bc2e42a3a027660b8960ec39d63ee395127f9aca';



class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      data: null
    };

      }


 

  handleSubmit = async e => {
    e.preventDefault();


    const url = `https://api.github.com/users/${this.state.username}?client_id=${client_ID}&client_Secret=${client_Secret}`;
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({ data: response.data })

    this.setState({
      username: ""
    });

  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

  }

  render() {
    return (
      <div>
            <div class="card text-white bg-light mb-3 container">
            <div class="card-body">
          
        
            <div class="alert alert-dismissible alert-success" id="alertbox">

  <strong>Welcome!</strong> This is a Go2Go Search Application <a class="alert-link">linking subscribed users to GitHub </a>.
 <br/> A React application that interacts with the Github API.
</div>
       </div>
        <div className="container">
      
            <form onSubmit={this.handleSubmit}>
              <input
                name="username"
                id="username"
                type="text"
                className="form-control mb-4"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Github Username" />
              <button type="submit" className="btn btn-success">Search</button>
            </form>

          </div>
          <br />
        
          {this.state.data ? (
            <div className="card card-body mb-3">
              <div className="row">
                <div className="col-md-3">
                  <>
                    <h1 className="lead mt-1" >Avatar:</h1> <img className="img-fluid mt-4" alt="avatar" src={this.state.data.avatar_url} />

                    <a href={this.state.data.html_url} className="btn btn-primary btn-block mt-4">View Profile </a>
                  </>
                </div>
                <div className="col-md-9 ">
                  <span
                    className="badge rounded-pill bg-primary" id="badgeS">
                    Public Gist: {this.state.data.public_gists}
                  </span>
                  <span
                    className="badge rounded-pill bg-success" id="badgeS">
                    Public Repos: {this.state.data.public_repos}
                  </span>
                  <span
                    className="badge rounded-pill bg-info" id="badgeS">
                    Followers: {this.state.data.followers}
                  </span>
                  <span
                    className="badge rounded-pill bg-dark" id="badgeS">
                    Following: {this.state.data.following}
                  </span>
                  <br /><br />
   
                  <ul className="list-group">
                    <li className="list-group-item">
                      <h6>{this.state.data.name}</h6></li>
                    <li className="list-group-item"><h6> {this.state.data.bio}</h6></li>
                    <li className="list-group-item"><h6>Location: {this.state.data.location}</h6></li>
                    <li className="list-group-item"><h6>Twitter username: {this.state.data.twitter_username}</h6></li>
                    <li className="list-group-item"><h6>Membership date: {this.state.data.created_at}</h6></li>
                  </ul>
                </div>
              </div>
            </div>
          ) : null}



</div>

        </div>



    
    )
  }
}

export default Content;