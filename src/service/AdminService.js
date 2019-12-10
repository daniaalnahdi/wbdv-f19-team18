const rootUrl = "https://wbdv-t18-server-node.herokuapp.com/api";

export default class AdminService {
    static myInstance = null;

    static getInstance() {
        if(AdminService.myInstance == null) {
            AdminService.myInstance = new AdminService()
        }
        return this.myInstance
    }

    findAllAdmins = () => {
        return fetch(`${rootUrl}/admins`)
            .then(response => response.json());
    };

    findAdminById = adminId => {
        return fetch(`${rootUrl}/admins/${adminId}`)
            .then(response => response.json());
    };

    login = (username, password) => {
        return fetch(`${rootUrl}/users/login`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => response.json());
    };

    createAdmin = admin => {
        return fetch(`${rootUrl}/admins`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(response => response.json());
    };

    updateAdmin = (id, admin) => {
        return fetch(`${rootUrl}/admins/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(response => response.json());
    };

    deleteAdmin = adminId => {
        return fetch(`${rootUrl}/admins/${adminId}`, {
            method: 'DELETE'
        })
            .then(response => response.json());
    };
}
