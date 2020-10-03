/**
 * EASYhttp Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Lime
 * @licence MIT
 * 
 **/

class easyHTTP {

    /*get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }*/

    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    /*post(url, data) {
        return new Promise((resolve, reject) => { //the data is an object:
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .then(err => reject(err));
        });
    }*/

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();

        return resData;

    }

    /*put(url, data) {
        return new Promise((res, rej) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => res(data))
                .then(err => rej(err));
        })
    }*/

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }

    /*delete(url) {
        return new Promise((res, rej) => {
            fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(() => res('Resource deleted...'))
                .then(err => rej(err));
        })
    }*/

    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        const resData = await 'Resource deleted...';
        return resData;
    }
}