import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

//GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

//POST
const postNewsBlog = (data) => Post('posts', false, data);

//GET
const putNewsBlog = (data, id) => Put(`posts/${id}`, false, data);

//DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false);

const API = {
    getNewsBlog,
    putNewsBlog,
    deleteNewsBlog,
    getComments,
    postNewsBlog
}

export default API;