(function () {
  function Calculadora() {
    this.display = document.querySelector(".display");

    this.inicia = () => {
      this.cliquebotoes();
    };
    this.conta = () => {
      try {
        const conta = eval(this.display.value);
        this.display.value = conta;
      } catch (error) {
        alert("Conta Errada");
        this.clear();
      }
    };
    this.clear = () => {
      this.display.value = "";
    };
    this.apagaUm = () => {
      this.display.value = this.display.value.slice(0, -1);
    };

    this.cliquebotoes = () => {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num"))
          this.display.value += el.innerText;
        if (el.classList.contains("btn-eq")) this.conta();
        if (el.classList.contains("btn-clear")) this.clear();
        if (el.classList.contains("btn-del")) this.apagaUm();
        if (el.classList.contains("btn-tema"))
          document.body.classList.toggle("dark", e.target.checked);
      });
    };
  }

  const p1 = new Calculadora();
  p1.inicia();
})();
