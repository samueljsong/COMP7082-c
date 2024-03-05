import axios from 'axios'

export const client = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {"Content-Type" : "application/json"},
    withCredentials: true
})

export const loggedIn = (navigate) => {
    return client.get('/auth/me')
        .then(response => {
            if (response.data) {
                return Promise.resolve(response.data);
            } else {
                navigate('/login');
                return Promise.reject('User not logged in');
            }
        })
        .catch(error => {
            console.error('Error checking authentication:', error);
            navigate('/login');
            return Promise.reject(error);
        });
};

export const logout = (navigate) => {
    client.get('/auth/logout')
        .then(json => {
            navigate('/login')
        })
}