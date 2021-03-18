const validateContact = (name, email, message) => {
  if (name.length === 0 || email.length === 0 || message.length === 0) {
    return {
      status: false,
      message: 'All fields are required.'
    };
  }

  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const emailLowerCase = email.toLocaleLowerCase();

  if (!regexEmail.test(emailLowerCase)) {
    return {
      status: false,
      message: 'Enter a valid e-mail.'
    };
  }

  return {
    status: true,
    message: ''
  };
};

export default validateContact;
