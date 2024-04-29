const formData = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = document.querySelector('.email-inp');
  const messageInput = document.querySelector('.message-txt');

  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    emailInput.value = savedFormData.email;
    messageInput.value = savedFormData.message;
    formData = savedFormData;
  }

  form.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value.trim();

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    form.reset();
  });
});
