export default class Validator {
  constructor(form) {
    this.form = document.querySelector(form);
    this.inputs = this.form.querySelectorAll("input");
  }
  handleSubmit(event) {
    event.preventDefault();
    let send = true;
    this.clearError(this.inputs);
    for (let i = 0; i < this.inputs.length; i++) {
      let input = this.inputs[i];
      let check = this.checkInput(input);
      if (check !== true) {
        send = false;
        this.showError(input, check);
      }
    }
    if (send) {
      this.form.submit();
      alert("Tudo certo, seus dados foram enviados!");
    }
  }
  // verifica os valores dos inputs
  checkInput(input) {
    if (input.value.length > 0) {
      switch (input.name) {
        case "name":
          if (input.value.length < 2) {
            return "Campo de nome deve conter no mínimo 2 caracteres!";
          }
          break;
        case "cpf":
          const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;
          if (!regexpCPF.test(input.value)) {
            return "Digite um cpf válido!";
          }
          break;
        case "email":
          const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
          if (!regexpEMAIL.test(input.value.toLowerCase())) {
            return "Digite um e-mail válido!";
          }
          break;
        case "password":
          if (input.value.length < 8) {
            return "Senha deve conter no mínimo 8 caracteres!";
          }
      }
    } else {
      return "Campo não pode ser vazio!";
    }
    return true;
  }
  // mostra os erros
  showError(input, error) {
    input.style.borderColor = `#FF0000`;
    let errorElement = document.createElement("p");
    errorElement.classList.add("error");
    errorElement.innerText = error;
    input.parentElement.insertBefore(errorElement, input.nextSibling);
  }
  // limpar os erros
  clearError(inputs) {
    inputs.forEach((input) => {
      input.style.borderColor = "";
    });
    let errorElement = document.querySelectorAll(".error");
    for (let i = 0; i < errorElement.length; i++) {
      errorElement[i].remove();
    }
  }
  addEventForm() {
    this.form.addEventListener("submit", this.handleSubmit);
  }
  bindEvents() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addEventForm = this.addEventForm.bind(this);
  }
  init() {
    this.bindEvents();
    this.addEventForm();
    return this;
  }
}
