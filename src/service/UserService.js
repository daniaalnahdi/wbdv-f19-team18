const rootUrl = "";

export default class UserService {
    static myInstance = null;

    static getInstance() {
        if(UserService.myInstance == null) {
            UserService.myInstance = new UserService()
        }
        return this.myInstance
    }

    login = (username, password) => {
        return fetch(
            `${rootUrl}/api/users`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(response => response.json());
    };
}
