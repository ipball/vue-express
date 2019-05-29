import axios from 'axios';

const url = 'api/posts';

class PostService {
    //get
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    //get id
    static getPostById(id) {
        if(!id) return;
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}/${id}`);
                resolve(res.data);
            } catch(err) {
                reject(err);
            }
        });
    }

    //create
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    //update
    static updatePost(id, text) {
        return axios.put(`${url}/${id}`, {
            text
        });
    }

    //delete
    static deletePost(id) {
        return axios.delete(`${url}/${id}`);
    }
}

export default PostService;