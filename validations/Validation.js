const validateEmail = (email) => {
  const { error } = emailSchema.validate(email);
  return !error;
};
const isValidRequestBody = function(requestBody) {
  return Object.keys(requestBody).length > 0; 
};

const isRightFormatEmail = function (email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email);
}

const isValidateGender = function (value) {
  return ["Male", "Female", "male", "female"].indexOf(value) != -1
}

module.exports = { validateEmail,isValidRequestBody, isRightFormatEmail,isValidateGender };
