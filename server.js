var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "relay-hosting.secureserver.net",
    port: 25,
    secure: true,
    auth: {
        user: "bibleworkshop.chennai@gmail.com",
        pass: "rvib iiqr syqq zjsx",
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: "bibleworkshop.chennai@gmail.com", // sender address
        to: ["benaticgrace@gmail.com, benaticvasanth@magnifyelshaddai.com"], // list of receivers benaticvasanth@magnifyelshaddai.com
        subject: "Hello", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
}


app.get('/Users', function (req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'JesusMary',
        password: 'Elohim_1927',
        server: "SG2NWPLS19SQL-v08.mssql.shr.prod.sin2.secureserver.net", // eg:: 'DESKTOP_mjsi\\MSSQLEXPRESS'
        databse: "Elshaddai",
        trustServerCertificate: true
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Users', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

var server = app.listen(5000, function () {
    main().catch(console.error);
    console.log('Server is running..');
});