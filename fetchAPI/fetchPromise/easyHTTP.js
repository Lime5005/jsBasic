/**
 * EASYhttp Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Lime
 * @licence MIT
 * 
 **/

class easyHTTP {

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    post(url, data) {
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
    }

    put(url, data) {
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
    }

    delete(url) {
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
    }
}