import React from "react";
import DietaryPills from "../components/DietaryPills";
import ProfileLoginMessage from "../components/ProfileLoginMessage";
import userService from "../service/UserService";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.user) console.log(this.props.user._id);
    this.state = {
      user: null,
      editing: false,
      relation: {
        owner: this.props.user && (this.props.user._id === this.props.userId || this.props.userId === ''),
        following: false
      },
      signedIn: this.props.isLoggedIn
    };
  }

  determineButton = () => {
    if (!this.state.signedIn) {
      return <div />;
    } else if (!this.state.relation.owner) {
      if (this.state.relation.following) {
        return <button className="btn-lg btn-primary">following</button>;
      } else {
        return <button className="btn-lg btn-outline-primary">follow</button>;
      }
    } else {
      if (this.state.editing) {
        return <button className="btn-lg btn-primary">save</button>;
      } else {
        return <button className="btn-lg btn-outline-primary">edit</button>;
      }
    }
  };

  sensitiveInfo = () => {
    if (!this.state.relation.owner) {
      return <br />;
    } else {
      return (
        <div>
          <br />
          <h3>{this.state.user.email}</h3>
          <br />
          <h2>Dietary Restrictions:</h2>
          <DietaryPills
            editing={this.state.editing}
            dietaryRestrictions={this.state.user.dietaryRestrictions}
          />
          <br />
        </div>
      );
    }
  };

  componentDidMount() {
    console.log("Component did mount");
    console.log(this.state.user);
    if (!this.state.user) {
      if (!this.props.userId && !this.props.user) return;
      const id = (this.props.userId) ? this.props.userId : this.props.user._id;
      const service = userService.getInstance();
      service.findUserById(id).then(user => {
        console.log(user);
        this.setState(prevState => {
          return {
            user: user,
            editing: prevState.editing,
            relation: {
              owner: prevState.relation.owner,
              following: !prevState.relation.owner
                  && (user.followers.find(follower => follower._id === this.props.user._id) !== undefined)
            },
            signedIn: prevState.signedIn
          };
        });
      });
    }
  };

  render() {
    const user = this.state.user;
    console.log(this.state);

    if (this.props.isLoggedIn || this.props.userId) {
      return (
        <div className="container-fluid">
          <div className="row m-2">
            <h1>
              {user && user.firstName} {user && user.lastName}
            </h1>
            <div className="col-1" />
            <div className="float-right">{this.determineButton()}</div>
          </div>
          <h3>@{user && user.username}</h3>
          <h4>
            {user && user.followers.length} followers
            {user && user.following.length} following
          </h4>
          {this.sensitiveInfo()}
          <h2>Liked Recipes:</h2>
        </div>
      );
    } else {
      return <ProfileLoginMessage />;
    }
  }
}

export default ProfilePage;
