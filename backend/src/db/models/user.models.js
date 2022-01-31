import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name Required"],
  },

  lastName: {
    type: String,
    required: [true, "Last Name Required"],
  },

  password: {
    type: String,
    required: [true, "Password Required"],
  },

  email: {
    type: String,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (validationStr) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          validationStr
        );
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email required"],
  },
});

const User = mongoose.model("User", UserSchema);

// Hash and Salt Password before saving
UserSchema.pre("save", async function () {
  // Create the password hash
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(this.password, salt);
    this.password = passwordHash;
  }
});

export { User, UserSchema };
