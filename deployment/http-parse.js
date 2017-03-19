'use strict'

import http from 'https'

export default function(opt, data, cb) {
    var req = http.request(opt, function(res) {
        var result = ''
        res.setEncoding('utf8')
        res.on('data', function(chunk) {
            chunk = chunk || ''
            result += chunk
        })
        res.on('end', function() {
            if (res.statusCode != 200) {
                console.error(('Status code - ' + res.statusCode + '\n').red + result);
                process.exit(1);
            }
            try {
                var trimmedResult = result.trim();
                JSON.parse(trimmedResult);
                result = JSON.parse(trimmedResult)
            } catch (e) {
                result = result || e;
                console.error(result.red);
                process.exit(1);
            }
            cb(result)
        })
    })
    req.on('error', function(err) {
        console.error(err)
        process.exit(1)
    })

    req.write(data)
    req.end()
}
