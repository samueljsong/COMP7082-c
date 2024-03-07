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

export const me = () => {
    return client.get('/auth/me')
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error('Error checking authentication:', error);
            return Promise.reject(error);
        });
}

export const getLocationTagById = (locationTagId) => {
    return client.get(`/user/${locationTagId}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching location tag:', error);
            return Promise.reject(error);
        });
}

export const getAdminAll = () => {
    return client.get('/admin/all')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching admin all:', error);
            return Promise.reject(error);
        });
}

export const getAdminUserReports = (userId) => {
    return client.get(`/admin/${userId}/reports`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching admin all:', error);
            return Promise.reject(error);
        });
}

export const getAdminUserReport = (reportId) => {
    return client.get(`/admin/${reportId}/report`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching admin all:', error);
            return Promise.reject(error);
        });
}