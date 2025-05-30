document
  .getElementById("massage-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    let text = "🧾 *Nuevo formulario de masaje*%0A";

    for (const [key, value] of data.entries()) {
      text += `*${key}:* ${value}%0A`;
    }

    const TOKEN = "TU_BOT_TOKEN"; // ← заменим позже
    const CHAT_ID = "TU_CHAT_ID"; // ← заменим позже
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=Markdown`;

    fetch(URL)
      .then((response) => {
        if (response.ok) {
          alert("¡Formulario enviado con éxito!");
          form.reset();
        } else {
          alert("Error al enviar. Inténtalo más tarde.");
        }
      })
      .catch(() => alert("Error de red."));
  });
