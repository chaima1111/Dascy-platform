const express = require('express');
const router = express.Router();
const { registerUser } = require('../../project_db/database');// added 

// Login Page
router.get('/login', (req, res) => res.render('Login'));

// Register Page
router.get('/register', (req, res) => res.render('Register'));

// Register
router.post('/register', (req, res) => {
    const { name, yearOfStudy, university, password, password2, email } = req.body;
    let errors = [];

    // Check for empty fields

    if (!name || !yearOfStudy || !university || !email || !password || !password2) {
        errors.push({ msg: 'Please enter all fields' });
    }

     // Check if passwords match

    if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
    }
     // Check password length

    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }
    // added code 
    // Email validation 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push({ msg: 'Invalid email address' });
    }

    // Check if email is already registered
    User.findOne({ email: email }).then(user => {
      if (user) {
          errors.push({ msg: 'Email already exists' });
      }
    });
    //end of added code 

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            yearOfStudy,
            university,
            email,
            password,
            password2
        });
    } else {
      // user.finOne function removed from the else block

      //here is the removed code 

      /*User.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.render('register', { errors, name, yearOfStudy, university, email, password, password2 });
        } else {
          const newUser = new User({ name, yearOfStudy, university, email, password });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save().then(user => {
                req.flash('success_msg', 'You are now registered and can log in');
                res.redirect('/users/login');
              }).catch(err => console.log(err));
            });
          });
        }
      });
    }
});*/
        //here is the new code 
        registerUser(name, yearOfStudy, university, email, password, (err, result) => {
          if (err) {
              // Handle error
              return res.status(500).send('Internal Server Error');
          }
          req.flash('success_msg', 'You are now registered and can log in');
          res.redirect('/users/login');
        });
        //end of new code
      }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/users/login',
      failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    req.logout(); 
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;