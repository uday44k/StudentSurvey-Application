const db = require('../database/database');

// Function used for getting all data stored in database
exports.getAllpost= (req,res,next)=>{

  db.execute('SELECT * FROM MyDb.SurveyTable')
    .then(result => {
      const temp = result[0];
      if (temp.length === 0) {
        return res.status(200).json({
          message: "No survey for that Page"
        });
      }
      return res.status(200).json({
        message: temp
      });

    })
    .catch(err => {

      return res.status(406).json({
        message: "Error occured"
      });

    })


}

// Function used for getting all data related to particular date stored in database
exports.getPosts = (req, res, next) => {

   const de = req.body.crrdate;



// Excuting the querry for getting data for a particular date
  db.execute('SELECT * FROM MyDb.SurveyTable Where date= ?', [de])
    .then(result => {
      const temp = result[0];
      if (temp.length === 0) {
        return res.status(200).json({
          message: "No survey for that Page"
        });
      }

      return res.status(200).json({
        message: temp
      });

      
    })
    .catch(err => {

      return res.status(406).json({
        message: "Error occured"
      });

    })

};

// Function used for storing the data in the database captured for the form submitted in the frontend

exports.createPost = (req, res, next) => {
  

  // Getting ALl data from the form submitted
  let date = req.body.date;

  date  = new Date(date); 

  console.log(date);


  let getdate = date.getDate()+1;
  let getMonth= date.getMonth()+1;
  let getYear = date.getFullYear();
  
  console.log(getdate+"-"+getMonth+"-"+getYear);

  let today = new Date();

  let todaydate = today.getDate();
  let todayMonth= today.getMonth()+1;
  let todayYear = today.getFullYear();

  if(todayYear!==getYear || todayMonth!==getMonth || todaydate!== getdate)
  {
   return res.status(201).json({
      message: 'Wrong Date entered'
    });
  }
  

  // Excuting the insertion querry 
  db.execute('INSERT INTO MyDb.SurveyTable (firstname,lastname,email,city,zip,state,address,date,telephone,radio,checkbox,dropdown,comment,raffle) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [req.body.firstname, req.body.lastname, req.body.email, req.body.city, req.body.zip, req.body.state, req.body.address, req.body.date, req.body.telephone, req.body.radio, req.body.checkbox, req.body.dropdown, req.body.comment,req.body.raffle])
    .then(() => {
      res.status(201).json({
        message: 'Post created successfully!'
      });
    })
    .catch(err => {
      const message = err.message;
      let send = 'Internal Server error';

      if (message.includes("Duplicate") === true) {
        send = "Duplicate data";
        return res.status(406).json({
          message: send,
        });
      }

      return res.status(500).json({
        message: send,
      });

      
    })

};
