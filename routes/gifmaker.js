var express = require('express');
var router = express.Router();
var request = require('request');
var FormData = require('form-data');
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
/**
 * 设置跨域访问
 */
function setResponse(res) {
    res.append('Access-Control-Allow-Headers', 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization');
    res.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.append('Access-Control-Allow-Origin', '*');
}

/* GET maker listing. */
//前边有make前缀了
router.get('/', function(req, res, next) {
    res.render('index', { title: 'P图大师' });
});

router.options('/', function(req, res, next) {
    setResponse(res);
    res.json({});
});

router.post('/upload' , function(req, res, next) {
    console.log(req.files)
    var reqForm = new multiparty.Form();
    const finalUrl = 'https://s5.ezgif.com/maker';
    reqForm.parse(req, function(err, fields, files) {
        let arr = [];
        files['files[]'].forEach(item => {
            arr.push(fs.createReadStream(item.path));
        })
        var form = new FormData();
        var formData = {
            'files[]':  arr,
            'upload': 'Upload and make a GIF!'
        }
        request.post({url: finalUrl, formData: formData}, function (err, response, body) {
            //https://ezgif.com/maker/ezgif-5-e61351b8-gif
            const { location }= response.headers;
            let id = location.match(/maker\/(.+)$/);
            if (id) {
                id = id[1];
            }
            const url = `/maker/${id}`
            console.log(url)
            res.redirect(302, url);
            //res.end(util.inspect({fields: fields, location: location, headrs: response.headers}));
        })
    });
});

//中专页面，需要处理数据，
router.get('/:id' , function(req, res, next) {
    res.render('index', { title: '修改图片' });
    return;
    console.log(req.files)
    var reqForm = new multiparty.Form();
    const finalUrl = 'https://s5.ezgif.com/maker';
    reqForm.parse(req, function(err, fields, files) {
        setResponse(res);
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
        })
    });
});

router.post('/:id' , function(req, res, next) {
    res.render('index', { title: '修改图片' });
    return;
    console.log(req.files)
    var reqForm = new multiparty.Form();
    const finalUrl = 'https://s5.ezgif.com/maker';
    reqForm.parse(req, function(err, fields, files) {
        setResponse(res);
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
        })
    });
});

module.exports = router;
