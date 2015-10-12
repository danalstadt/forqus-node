var Promise = require('bluebird');
var rp = require('request-promise');

function Forqus(apiKey) {
    if (!(this instanceof Forqus)) {
        return new Forqus(apiKey);
    }

    this.apiKey = apiKey;
}

Forqus.prototype.shorten = function shorten(url) {
    return rp({
        method: 'POST',
        uri: 'https://forq.us/api/url/create',
        headers: {
            'Forqus-API-Key': this.apiKey
        },
        body: {
            url: url
        },
        json: true
    }).then(function (result) {
        result = result.url;
        result.shortenedUrl = 'https://forq.us/' + result.shortcode;
        return result;
    }).catch(function (err) {
        console.log(err);
        throw true;
    });
}

module.exports = Forqus;
