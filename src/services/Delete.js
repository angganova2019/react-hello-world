import Axios from 'axios';
import { RootPath, OnlinePath } from './Config';

const Delete = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        Axios.delete(`${root ? OnlinePath : RootPath}/${path}`)
            .then((result) => {
                resolve(result.data);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export default Delete;