const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
  new LocalStrategy(
    { usernameField: "email" }, 
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });  // Look for the user by email

        if (!user) {
          return done(null, false, { message: "Invalid credentials" });
        }

        // Compare entered password with the stored password
        // make sure the password in the Database is stored as plain text ****
        if (user.password !== password) {
          return done(null, false, { message: "Invalid credentials" });
        }

        return done(null, user);  // Successfully authenticated
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Serialize user to store in session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
