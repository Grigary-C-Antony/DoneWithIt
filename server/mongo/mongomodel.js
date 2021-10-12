const mongoose = require("mongoose");

bcrypt.genSalt(saltRounds, function (saltError, salt) {
  if (saltError) {
    throw saltError;
  } else {
    bcrypt.hash(password, salt, function (hashError, hash) {
      if (hashError) {
        throw hashError;
      } else {
        console.log(hash);
        //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
      }
    });
  }
});

const mongon = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

mongon.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

module.exports = mongoose.model("User", mongon);
