const doc = document;

const userForm = doc.forms.userForm;

function removeError(input) {
  const parent = input.parentNode;

  if (parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove();
      parent.classList.remove('error');
  }
}

function validation(form) {

  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = doc.createElement('label');

    errorLabel.classList.add('error-label');
    errorLabel.textContent = text;

    parent.classList.add('error');

    parent.append(errorLabel);

    console.log(parent);
  }

  let result = true;

  const allInputs = form.querySelectorAll('input');
  
  for (let input of allInputs) {
    
    removeError(input);

    if(input.value == "") {
      console.log ('Помилка');
      createError(input, 'Поле не заповнене!!!');
      result = false;
    }
  }
  return result;
}

userForm.onsubmit = function(e) {
  e.preventDefault();
  
  if(validation(this) == true) {
    alert('Форма перевірена успішно!');
  }
}


