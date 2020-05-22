/** 
 * @author ZYROUGE
 * @license MIT
*/

const axios = require("axios");

module.exports = (url, payload) => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}`, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => resolve(res))
        .catch(err => reject(err));
    })
};