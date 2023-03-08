const express = require("express")
//const path = require("path")
const app = express();
require("../../backend/db/conn")

const Register = require("../../backend/models/register");

const port = process.env.PORT || 5000;

//const static_path = path.join(__dirname, "index.html");
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//app.use(express.static(static_path));
app.get("/register" , (req , res) => {
    res.render("register");
})
app.post('/register' , async (req ,res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        if(password === cpassword) {
            const studentRegistration = new Register({
                name: req.body.firstname,
                date: req.body.date,
                gender: req.body.gender,
                contact: req.body.contact,
                email: req.body.email,
                address: req.body.address,
                collegename: req.body.collegename,
                id: req.body.id,
                year: req.body.year,
                username: req.body.username,
                password: req.body.password,
                cpassword : cpassword,
            })
            const register = await studentRegistration.save();
            res.status(200).render("index"); // make index html wherr confettie is shown and registration is done
        }
        else{
            res.send("Password is not same")
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port , () => {
    console.log(`Server is running on ${port}`);
})