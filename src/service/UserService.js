const rootUrl = "https://wbdv-t18-server-node.herokuapp.com/api";

export default class UserService {
  static myInstance = null;

  static getInstance() {
    if (UserService.myInstance == null) {
      UserService.myInstance = new UserService();
    }
    return this.myInstance;
  }

  findAllUsers = () => {
    return fetch(`${rootUrl}/users`).then(response => response.json());
  };

  findUserById = userId => {
    return fetch(`${rootUrl}/users/${userId}`).then(response =>
      response.json()
    );
  };

  login = (username, password) => {
    return fetch(`${rootUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(response => response.json());
  };

  createUser = user => {
    return fetch(`${rootUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(response => response.json());
  };

  updateUser = (id, user) => {
    return fetch(`${rootUrl}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(response => response.json());
  };

  deleteUser = userId => {
    return fetch(`${rootUrl}/users/${userId}`, {
      method: "DELETE"
    }).then(response => response.json());
  };
}

