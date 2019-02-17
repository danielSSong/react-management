const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
      {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': 'Daniel Song',
        'birthday': '910111',
        'gender': 'Male',
        'job': 'Student'
      
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': 'Lionel Messi',
        'birthday': '123456',
        'gender': 'Male',
        'job': 'Student'
      
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': 'Good Job',
        'birthday': '910111',
        'gender': 'Male',
        'job': 'Student'
      
      }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));