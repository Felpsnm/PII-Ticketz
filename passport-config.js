const bcrypt = require('bcrypt')
const localStategy = require('passport-local').Strategy

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email)
    if (user == null) {
      return done(null, false)

    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false)

      }
    
    } catch (e) {
      return done(e)
    }
  }
  passport.use(new localStategy({ usernameField: 'email' },
    authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id))
  })
}

module.exports = initialize