var express = require('express');
var router = express.Router();
var request = require('request');
var FormData = require('form-data');
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.options('/', function(req, res, next) {
    res.append('Access-Control-Allow-Headers', 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization');
    res.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.append('Access-Control-Allow-Origin', '*');
    res.json({});
});
router.post('/' , function(req, res, next) {
    console.log(req.files)
    var reqForm = new multiparty.Form();
    const finalUrl = 'https://s5.ezgif.com/maker';
    reqForm.parse(req, function(err, fields, files) {
        res.append('Access-Control-Allow-Headers', 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization');
        res.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.append('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'content-type': 'application/json'});
        //res.write('received upload:\n\n');
        let arr = [];
        files['files[]'].forEach(item => {
            arr.push(fs.createReadStream(item.path));
        })
        var form = new FormData();
        var formData = {
            'files[]':  arr,
            'upload': 'Upload and make a GIF!'
        }
        console.log(formData)
        var r = request.post({url: finalUrl, formData: formData}, function (err, response, body) {
            res.end(util.inspect({fields: fields, files: files, headrs: response.headers}));
            //res.write(response)
        })
    });
    //:
});

module.exports = router;
