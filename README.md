forqus-node
===========

This library allows use of the [forq.us](https://forq.us) URL shortener from node.

Example Usage
-------------

```
var Forqus = require('forqus'),
    forqus = new Forqus('your-api-key');

forqus.shorten('https://some.url').then(function (result) {
    //shortened URL is in result.shortenedUrl
    console.log(result);
}).catch(function (err) {
    //oh no! something went wrong.
});
```