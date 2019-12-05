import React from "react";
import DietaryPills from "../components/DietaryPills";
const dummyUser = {
    firstName: "Sammy",
    lastName: "Wilson",
    username: "swilson",
    followers: [],
    following: [],
    email: "swilson234@example.com",
    dietaryRestrictions: ["vegan", "whole30"]
};

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: dummyUser,
            editing: true,
            relation: {
                owner: true,
                following: false
            },
            signedIn: true
        }
    }

    determineButton = () => {
        if (!this.state.signedIn) {
            return (<div/>);
        } else if (!this.state.relation.owner) {
            if (this.state.relation.following) {
                return (
                    <button className="btn-lg btn-primary">
                        following
                    </button>
                );
            } else {
                return (
                    <button className="btn-lg btn-outline-primary">
                        follow
                    </button>
                );
            }
        } else {
            if (this.state.editing) {
                return (
                    <button className="btn-lg btn-primary">
                        save
                    </button>
                );
            } else {
                return (
                    <button className="btn-lg btn-outline-primary">
                        edit
                    </button>
                );
            }
        }
    };

    sensitiveInfo = () => {
        if (!this.state.relation.owner) {
            return(<div/>);
        } else {
            return (
                <div>
                    <br/>
                    <h3>{this.state.user.email}</h3>
                    <br/>
                    <h3>Dietary Restrictions:</h3>
                    <DietaryPills editing={this.state.editing}
                                  dietaryRestrictions={this.state.user.dietaryRestrictions}/>
                    <br/>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
                    <div className="col-1"/>
                    <div className="float-right">
                        {
                            this.determineButton()
                        }
                    </div>
                </div>
                <h3>@{this.state.user.username}</h3>
                <h4>{this.state.user.followers.length} followers - {this.state.user.following.length} following</h4>
                {
                    this.sensitiveInfo()
                }
            </div>
        );
    }
}

export default ProfilePage;