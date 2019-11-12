
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(
  session({
    secret: 'specter', // changez cette valeur
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false
    } // ne changez que si vous avez activé le https
  })
)
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist/')))

let authentifiedUser = []

// LOGIN // DONE
app.post('/api/login', (req, res) => {
  let usersFile = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf8'))
  if (req.body) {
    // if requete a un body
    const logged = authentifiedUser.find(log => log.sessionID === req.body.sessionID)
    if (logged) {
      // if deja connecté
      res.status(401)
      res.json({
        message: 'you are already connected',
        status: 401
      })
    } else {
      // if non connecté
      const user = usersFile.find(
        u => u.username === req.body.email && u.password === req.body.password)
      if (user) {
        // if user identifiant correct
        authentifiedUser[authentifiedUser.length] = {
          'username': req.body.email,
          'sessionID': req.body.sessionID
        }
        res.status(200)
        res.json({
          message: 'connected',
          status: 200
        })
      } else {
        // if user identifiant incorrect
        res.status(404)
        res.json({
          message: 'did not find any user with these credentials',
          status: 404
        })
      }
    }
  }
})

// LOGOUT // DONE
app.post('/api/logout', (req, res) => {
  const user = authentifiedUser.find(
    u => u.username === req.body.username)

  if (user) {
    for (var i = 0; i < authentifiedUser.length; i++) {
      if (authentifiedUser[i].username == req.body.username) {
        authentifiedUser.splice(i, 1)
        res.status(200)
        res.json({
          status: 200,
          message: 'logout success'
        })
      }
    }
  } else {
    res.status(200)
    res.json({
      status: 200,
      message: 'Not found'
    })
  }
})

// SINGUP // DONE
app.post('/api/signup', (req, res) => {
  let usersFile = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf8'))

  const user = usersFile.find(u => u.username === req.body.username)
  if (!user) {
    // user non existant dans la DB
    usersFile.push({
      'username': req.body.username,
      'password': req.body.password,
      'firstname': req.body.firstname,
      'lastname': req.body.lastname,
      'country': req.body.country,
      'city': req.body.city,
      'zipcode': req.body.zipcode
    })
    fs.writeFile('./src/data/users.json', JSON.stringify(usersFile, null, 2), function (err) {
      if (err) throw err
    })
    res.status(200)
    res.json({
      message: 'Success',
      status: 200
    })
  } else {
    // user existant dans la DB
    res.status(401)
    res.json({
      message: 'This account with this user already exist',
      status: 401
    })
  }
})

// GET PROFILE INFOS // DONE
app.post('/api/getprofilinfos', (req, res) => {
  const user = authentifiedUser.find(
    u => u.username === req.body.username && u.sessionID === req.body.sessionID)
  let usersFile = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf8'))

  if (!user) {
    // si flase: user est connecté et a formule requete sur son ID
    res.json({
      message: '404 not found'
    })
    res.status(404)
  } else {
    // sinon si: user est connecté et a formule requete sur son ID
    // const user = usersFile.find(u => u.username === req.body.email)
    const userInfo = usersFile.find(
      u => u.username === user.username)
    res.json({
      status: 200,
      username: userInfo.username,
      password: userInfo.password,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      country: userInfo.country,
      city: userInfo.city,
      zipcode: userInfo.zipcode,
      superuser: userInfo.superuser
    })
    res.status(200)
  }
})

// UPDATE PROFILE INFOS // DONE
app.post('/api/updateProfile', (req, res) => {
  // connecte !
  const user = authentifiedUser.find(
    u => u.username === req.body.username && u.sessionID === req.body.sessionID)
  let usersFile = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf8'))

  if (!user) {
    // si flase: user est connecté et a formule requete sur son ID
    res.json({
      status: 404,
      message: '404 not found'
    })
    res.status(404)
  } else {
    // sinon si: user est connecté et a formule requete sur son ID
    for (var i = 0; i < usersFile.length; i++) {
      if (usersFile[i].username === req.body.username) {
        usersFile[i].username = req.body.username,
        usersFile[i].firstname = req.body.firstname,
        usersFile[i].lastname = req.body.lastname,
        usersFile[i].country = req.body.country,
        usersFile[i].city = req.body.city,
        usersFile[i].zipcode = req.body.zipcode
      }
    }
    fs.writeFile('./src/data/users.json', JSON.stringify(usersFile, null, 2), function (err) {
      if (err) throw err
    })
    res.json({
      status: 200,
      message: 'profil update !'
    })
    res.status(200)
  }
})

// DELETE PROFILE // DONE
app.post('/api/deleteProfile', (req, res) => {
  const user = authentifiedUser.find(
    u => u.username === req.body.username && u.sessionID === req.body.sessionID)
  let usersFile = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf8'))

  if (!user) {
    // si flase: user est connecté et a formule requete sur son ID
    res.json({
      message: '404 not found'
    })
    res.status(404)
  } else {
    // sinon si: user est connecté et a formule requete sur son ID
    usersFile = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf8'))
    for (var i = 0; i < usersFile.length; i++) {
      if (usersFile[i].username == req.body.username) {
        usersFile.splice(i, 1)
      }
    }
    fs.writeFile('./src/data/users.json', JSON.stringify(usersFile, null, 2), function (err) {
      if (err) throw err
      console.log('users.json updated !')
    })
    res.json({
      status: 200,
      message: 'profil update !'
    })
    res.status(200)
  }
})

// send message
app.post('/api/sendmessage', function (req, res) {
  let mails = JSON.parse(fs.readFileSync('./src/data/mail.json', 'utf8'))

  mails[mails.length] = {
    'name': req.body.name,
    'email': req.body.email,
    'status': req.body.status,
    'content': req.body.content
  }

  // ecriture dans un fichier start
  fs.writeFile('./src/data/mail.json', JSON.stringify(mails, null, 2), function (err) {
    if (err) throw err
  })
  // ecriture dans un fichier end

  res.json({
    message: 'message sent',
    status: 200
  })
  res.status(200)
  // res.status(200)
})

app.post('/api/getmessage', function (req, res) {
  let usersFile = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf8'))

  const user = authentifiedUser.find(
    u => u.username === req.body.username && u.sessionID === req.body.sessionID)

  let superUserFlag = false
  if (!user) {
    // si flase: user est connecté et a formule requete sur son ID
    res.json({
      message: '404 not found'
    })
    res.status(404)
  } else if (user) {
    const superUser = usersFile.find(
      u => u.superuser === 'true' && u.username === req.body.username)
    // si trouve def var
    if (superUser) {
      superUserFlag = superUser.username === user.username
    }

    if (superUserFlag && user) {
      let mails = JSON.parse(fs.readFileSync('./src/data/mail.json', 'utf8'))
      res.json(mails)
      res.status(200)
    } else {
      res.json({
        message: '404 not allow'
      })
      res.status(404)
    }
  }
})

// Debug
app.get('/api/test', function (req, res) {
  // console.log('req.session.userId', req)
  res.json({
    message: 'get ok',
    status: 200
  })
})

app.post('/api/test', function (req, res) {
  res.json({
    message: 'post 1 ok ',
    status: 200
  })
})

app.post('/api/test2', function (req, res) {
  res.json({
    message: 'post 2 ok ',
    status: 200
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
