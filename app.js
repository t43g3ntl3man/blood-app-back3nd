var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/bankList',  async function (req, res) {
  
  await console.log(req.body)
  var bank = [
    {
      'id': 1,
      'name': 'abc blood bank',
      'location': 'Khi, Nazimabad',
      'phone': '+12779874',
      'urgent': 'yes'
    },
    {
      'id': 2,
      'name': 'abc blood bank',
      'location': 'Khi, Nazimabad',
      'phone': '+12779874',
      'urgent': 'yes'
    },
    {
      'id': 3,
      'name': 'abc blood bank',
      'location': 'Khi, Nazimabad',
      'phone': '+12779874',
      'urgent': 'yes'
    },
    {
      'id': 4,
      'name': 'abc blood bank',
      'location': 'Khi, Nazimabad',
      'phone': '+12779874',
      'urgent': 'yes'
    }
  ]
  res.send(bank);
});
app.post('/bank',  async function (req, res) {
  await console.log(req.body)
  var bank = [
    {
      'id': 1,
      'name': 'abc blood bank',
      'about': 'The Journey that began in a small room on the pavement of Britto Road, Karachi, has gradually blossomed into the largest voluntary health service, non profit organization in Pakistan and has been providing thalassaemia treatment and haematological services along with blood transfusion services in the Sector, Donating thousands of safe and healthy blood bags to thousands of patients for hemophilia prevention, and saving hundreds of lives through blood donation in Pakistan.',
      'img': 'https://fatimid.org/wp-content/uploads/2018/09/cropped-logo.png',
      'location': 'Khi, Nazimabad',
      'phone': '+12779874',
      'urgent': 'yes'
    }
  ]
  console.log(res.data);
  res.send(bank);
});

app.get('/about', function (req, res) {
  console.log('heard it');
  res.sendStatus(200);
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
