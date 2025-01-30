const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
  new LocalStrategy(
    { usernameField: "email" }, 
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });  

        if (!user) {
          return done(null, false, { message: "Invalid credentials" });
        }

        // Password check (plain text, local بما اننا)
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

// Serialize user (store the user ID in session)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user (which retrieves user details from session)
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
