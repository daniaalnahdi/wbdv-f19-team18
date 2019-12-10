const rootUrl = "https://wbdv-t18-server-node.herokuapp.com/api";

export default class CommentService {
    static myInstance = null;

    static getInstance() {
        if(CommentService.myInstance == null) {
            CommentService.myInstance = new CommentService();
        }
        return this.myInstance
    }

    findAllComments = () => {
        return fetch(`${rootUrl}/comments`)
            .then(response => response.json());
    };

    findCommentById = commentId => {
        return fetch(`${rootUrl}/comments/${commentId}`)
            .then(response => response.json());
    };

    createComment = comment => {
        return fetch(`${rootUrl}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(response => response.json());
    };

    updateComment = (id, comment) => {
        return fetch(`${rootUrl}/comments/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(response => response.json());
    };

    deleteComment = commentId => {
        return fetch(`${rootUrl}/comments/${commentId}`, {
            method: 'DELETE'
        })
            .then(response => response.json());
    };
}
