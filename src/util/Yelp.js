const clientId = 'mHnuVCDGYZHm-wsldecEtg';
const secret = 'hRYG0TFLuLZosAAoCrWUpXb5tXupUZz9mB34ilQOZOnndrVYWu3zo2bFLw5x1usi';
let accessToken = '';
const Yelp = {
    getAccessToken() {
        if(accessToken) {
            return new Promise(function (resolve) {
                resolve(accessToken);
            });
        }

        // Need to request a new access token
        return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=' + clientId + '&client_secret='+ secret, {method: 'POST'}).then(response => {return response.json()}).then(jsonResponse => {accessToken = jsonResponse.access_token;});
    }
};

