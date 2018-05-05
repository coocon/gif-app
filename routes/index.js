var express = require('express');
var router = express.Router();
//<form class="form" action="http://localhost:8888/maker" method="post" enctype="multipart/form-data" id="upload-form">

const str = `
 <form class="form" action="/upload" method="post" enctype="multipart/form-data" id="upload-form">
                        <fieldset>
                            <legend>Upload images</legend>
                            <p>
                                <label>Select images:</label>
                                <br />
                                <input type="file" name="files[]" multiple="multiple" />
                            </p>
                            <p>GIF/JPG/PNG/APNG/WebP or other images, up to 2000 files.
                                <br />Max file size 6MB each or 100MB in total.
                                <br />You can select multiple files or upload .zip archive with images.
                            </p>
                            <p id="tool-submit-button">
                                <input type="submit" class="button primary" name="upload" value="Upload and make a GIF!" />
                            </p>
                        </fieldset>
                    </form>
`
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', html: str });
});

module.exports = router;
