const express = require('express');
const mysql = require('mysql');;
const cors = require('cors');
const app = express();
const port = 3001;


app.use(express.json())
app.use(cors());


//creating db
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "userlogin",
})

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// app.post('/register', async (req, res) => {
//     const { username, vehicle_number, vehicle_type, mobile_number, location, city, password } = req.body;

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const userQuery = 'INSERT INTO loginpage (username,vehiclenumber, vehicletype, mobilenumber, location, city) VALUES (?, ?, ?, ?, ?,?)';
//     const loginQuery = 'INSERT INTO loginform (username,password) VALUES (?,?)';

//     db.query(userQuery, [username, vehicle_number, vehicle_type, mobile_number, location, city], (err, result) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         db.query(loginQuery, [username, hashedPassword], (err, result) => {
//             if (err) {
//                 return res.status(500).send(err);
//             }
//             res.send('User registered successfully');
//         });
//     });
// });

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     const query = 'SELECT * FROM logins WHERE email = ?';
//     db.query(query, [username], async (err, results) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         if (results.length === 0) {
//             return res.status(400).send('User not found');
//         }

//         const user = results[0];

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).send('Invalid credentials');
//         }

//         const token = jwt.sign({ id: user.id, username: user.username }, 'secret_key', { expiresIn: '1h' });

//         res.json({ token });
//     });
// });

app.post('/register', (req, res) => {
    const sentUserName = req.body.Username
    const sentVehicleNumber = req.body.Vehiclenumber
    const sentMobileNumber = req.body.Mobilenumber
    const sentVehicleType = req.body.Vehicletype
    const sentLocation = req.body.Location
    const sentCity = req.body.City
    const sentPassword = req.body.Password

    const SQL = 'INSERT INTO loginpage(username,vehiclenumber,mobilenumber,vehicletype,location,city,password) VALUES (?,?,?,?,?,?,?)'
    const Values = [sentUserName, sentVehicleNumber, sentMobileNumber, sentVehicleType, sentLocation, sentCity, sentPassword]

    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.send(err)
        }
        else {
            console.log('User inserted Succesfully')
            res.send({ message: 'User Add!' })
        }
    })
})

app.post('/login', (req, res) => {
    const sentloginUserName = req.body.LoginUserName
    const sentloginPassword = req.body.LoginPassword
    const SQL = 'SELECT * FROM loginpage WHERE username=? && password=?'
    const Values = [sentloginUserName, sentloginPassword]
    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.send({ error: err })
        }
        if (results.length > 0) {
            res.send(results)
        }
        else {
            res.send({ message: `Credentials Don't match!` })
        }
    })
})

app.post('/getUserDetails', (req, res) => {
    const { numberPlate } = req.body;
    const query = 'SELECT * FROM loginpage WHERE vehiclenumber = ?';
    db.query(query, [numberPlate], (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
