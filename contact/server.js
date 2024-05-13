const express = require('express');
const app = express();

const nodemailer = require('nodemailer');


const PORT = process.env.PORT || 3000;

//middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/',(req, res)=>{
    
    res.sendFile(__dirname + '/public/contactform.html', (err) => {
        if (err){
            console.error('Error sending File:', err);
            res.status(500).send('Internal Server Error');
        }
    });
})
//routes
app.post('/', (req,res)=> {
    console.log(req.body);

    const transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cybersafetyforher@gmail.com',
            pass: 'Abcd2002'
        }
        
    })
    console.log('transporter called');
    const mailOptions = {
        from: req.body.email,
        to: 'cybersafetyforher@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }
    console.log('Email maiking...');
    transpoter.sendMail(mailOptions, (error, info)=> {
        if(error){
            console.log(error);
            res.send('error');

        }else{
            console.log('Email sent!');
            res.send('success');
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})