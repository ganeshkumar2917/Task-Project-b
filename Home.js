var express = require('express');
var formidable = require('formidable');
var fs = require('fs');
const path=require('path')

var app = express();

const tempelatePat=path.join(__dirname,'../templates')

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../templates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))
app.post('/biodata', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        res.render('biodata', { 
            username: fields.username,
            dob: fields.dob,
            qualification: fields.qualification,
            mailid: fields.mailid,
            pno: fields.pno,
            oldpath: files.uploadfile.path,
            newpath: 'C:/Users/Logi/Desktop/' + files.uploadfile.name
        });
        
        fs.rename(files.uploadfile.path, 'C:/Users/Logi/Desktop/' + files.uploadfile.name, function (err) {
            if (err) throw err;
        });
    });
});

app.use(function(req, res, next) {
    res.status(404).render('biodata');
});

// Start the server
app.listen(8080, function () {
    console.log('Server is listening on port 8080');
});
