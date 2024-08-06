const { User } = require('../models');
const { validateEmail } = require('../validations/emailValidation');

const createUser = async (req, res) => {
  const { name, age, gender, email, city, interests } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).send({ message: 'Invalid email format' });
  }

  try {
    const user = await User.create({ name, age, gender, email, city, interests });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, gender, email, city, interests } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).send({ message: 'Invalid email format' });
  }

  try {
    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.age = age;
      user.gender = gender;
      user.email = email;
      user.city = city;
      user.interests = interests;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
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
      res.status(200).json(matches);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
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
