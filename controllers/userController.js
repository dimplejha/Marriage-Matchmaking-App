const { User } = require('../models');
const { isRightFormatEmail, isValidRequestBody, isValidateGender } = require('../validations/Validation');

const createUser = async (req, res) => {
  const { name, age, gender, email, city, interests } = req.body;
  if (!isValidRequestBody(req.body)) {
    res.status(400).send({ status: false, msg: "please pass required parameters" })
    return
  }
  if (!isRightFormatEmail(email)) {
    return res.status(400).send({ status: false, message: "Please enter a valid email" })
  }
  if (!isValidateGender(gender)) {
    return res.status(400).send({ status: false, message: "Gender must be Male or Female" })
  }
  // Check for duplicate email
  let DuplicateEmail = await User.findOne({ where: { email: email } });
  if (DuplicateEmail) {
    return res.status(400).send({ status: false, message: "Email already exists" });
  }
  // Create user
  try {
    const user = await User.create({ name, age, gender, email, city, interests });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const [affectedRows, [updatedUser]] = await User.update(updatedData, {
      where: { id: userId },
      returning: true,
      individualHooks: true,
    });

    if (affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    // Update the user to mark as deleted
    const [affectedRows] = await User.update(
      { isDeleted: true, deletedAt: new Date() },
      {
        where: { id: id },
      }
    );

    if (affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Fetch the updated user instance
    const user = await User.findByPk(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



const findMatches = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      const matches = await User.findAll({
        where: {
          city: user.city,
          interests: user.interests,
          gender: user.gender === 'male' ? 'female' : 'male',
        },
      });
      return res.status(200).json(matches);
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  findMatches,
};
