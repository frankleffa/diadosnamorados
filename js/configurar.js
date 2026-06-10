/* =====================================================================
   Lógica da página de configuração (configurar.html)
   ===================================================================== */
(function () {
  "use strict";

  var fotos = []; // { url: dataURL, legenda: "" }

  var el = {
    nomeCasal: document.getElementById("nomeCasal"),
    tituloAba: document.getElementById("tituloAba"),
    data: document.getElementById("data"),
    hora: document.getElementById("hora"),
    fraseContador: document.getElementById("fraseContador"),
    mensagem: document.getElementById("mensagem"),
    musicaSpotify: document.getElementById("musicaSpotify"),
    emojiChuva: document.getElementById("emojiChuva"),
    inputFotos: document.getElementById("inputFotos"),
    drop: document.getElementById("drop"),
    fotosLista: document.getElementById("fotosLista"),
    okMsg: document.getElementById("okMsg"),
  };

  /* ---------- Carrega rascunho salvo ---------- */
  (function carregar() {
    try {
      var s = JSON.parse(localStorage.getItem("ddn_rascunho") || "null");
      if (!s) return;
      el.nomeCasal.value = s.nomeCasal || "";
      el.tituloAba.value = s.tituloAba || "";
      el.data.value = s.data || "";
      el.hora.value = s.hora || "00:00";
      el.fraseContador.value = s.fraseContador || "";
      el.mensagem.value = s.mensagem || "";
      el.musicaSpotify.value = s.musicaSpotify || "";
      el.emojiChuva.value = s.emojiChuva || "❤️";
      fotos = s.fotos || [];
      renderFotos();
    } catch (e) { /* ignora */ }
  })();

  /* ---------- Upload de fotos ---------- */
  el.drop.addEventListener("click", function () { el.inputFotos.click(); });
  el.inputFotos.addEventListener("change", function (e) {
    var arquivos = Array.prototype.slice.call(e.target.files);
    var pendentes = arquivos.length;
    if (!pendentes) return;
    arquivos.forEach(function (arq) {
      var reader = new FileReader();
      reader.onload = function (ev) {
        fotos.push({ url: ev.target.result, legenda: "" });
        if (--pendentes === 0) { renderFotos(); salvarRascunho(); }
      };
      reader.readAsDataURL(arq);
    });
    el.inputFotos.value = "";
  });

  function renderFotos() {
    el.fotosLista.innerHTML = "";
    fotos.forEach(function (f, i) {
      var item = document.createElement("div");
      item.className = "foto-item";
      item.innerHTML =
        '<img src="' + f.url + '" alt="foto">' +
        '<div class="ordem">' +
          (i > 0 ? '<button data-acao="sobe" data-i="' + i + '" title="Mover">↑</button>' : '') +
          (i < fotos.length - 1 ? '<button data-acao="desce" data-i="' + i + '" title="Mover">↓</button>' : '') +
        '</div>' +
        '<button class="remover" data-acao="remove" data-i="' + i + '" title="Remover">✕</button>' +
        '<input type="text" placeholder="Legenda (opcional)" value="' +
          (f.legenda || "").replace(/"/g, "&quot;") + '" data-i="' + i + '">';
      el.fotosLista.appendChild(item);
    });
  }

  el.fotosLista.addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    var i = parseInt(btn.dataset.i, 10);
    var acao = btn.dataset.acao;
    if (acao === "remove") fotos.splice(i, 1);
    else if (acao === "sobe") { var a = fotos[i]; fotos[i] = fotos[i - 1]; fotos[i - 1] = a; }
    else if (acao === "desce") { var b = fotos[i]; fotos[i] = fotos[i + 1]; fotos[i + 1] = b; }
    renderFotos(); salvarRascunho();
  });

  el.fotosLista.addEventListener("input", function (e) {
    if (e.target.tagName === "INPUT") {
      var i = parseInt(e.target.dataset.i, 10);
      if (fotos[i]) fotos[i].legenda = e.target.value;
      salvarRascunho();
    }
  });

  /* ---------- Salva rascunho automaticamente ---------- */
  ["nomeCasal","tituloAba","data","hora","fraseContador","mensagem","musicaSpotify","emojiChuva"]
    .forEach(function (k) { el[k].addEventListener("input", salvarRascunho); });

  function salvarRascunho() {
    try { localStorage.setItem("ddn_rascunho", JSON.stringify(coletarRascunho())); }
    catch (e) { /* espaço cheio */ }
  }

  function coletarRascunho() {
    return {
      nomeCasal: el.nomeCasal.value, tituloAba: el.tituloAba.value,
      data: el.data.value, hora: el.hora.value,
      fraseContador: el.fraseContador.value, mensagem: el.mensagem.value,
      musicaSpotify: el.musicaSpotify.value, emojiChuva: el.emojiChuva.value,
      fotos: fotos,
    };
  }

  /* ---------- Monta o objeto de configuração final ---------- */
  function montarConfig() {
    var dataStr = el.data.value || "2024-06-12";
    var horaStr = el.hora.value || "00:00";
    var iso = dataStr + "T" + horaStr + ":00";
    return {
      nomeCasal: el.nomeCasal.value || "Nós Dois ❤️",
      tituloAba: el.tituloAba.value || "Feliz Dia dos Namorados ❤️",
      dataInicio: iso,
      fraseContador: el.fraseContador.value || "Tempo que estamos juntos 💕",
      mensagem: el.mensagem.value || "Eu te amo ❤️",
      fotos: fotos.map(function (f) { return f.url; }),
      legendas: fotos.map(function (f) { return f.legenda || ""; }),
      musicaArquivo: "",
      musicaSpotify: el.musicaSpotify.value || "",
      emojiChuva: el.emojiChuva.value || "❤️",
    };
  }

  /* ---------- Botão: ver prévia ---------- */
  document.getElementById("btnPrevia").addEventListener("click", function () {
    try {
      localStorage.setItem("ddn_previa", JSON.stringify(montarConfig()));
      window.open("index.html?previa=1", "_blank");
    } catch (e) {
      alert("As fotos podem estar grandes demais para a prévia. Tente usar menos fotos ou imagens menores.");
    }
  });

  /* ---------- Botão: baixar config.js pronto ---------- */
  document.getElementById("btnBaixar").addEventListener("click", function () {
    var c = montarConfig();
    var conteudo =
      "/* Arquivo gerado pela página de configuração. */\n" +
      "const CONFIG = {\n" +
      "  nomeCasal: " + JSON.stringify(c.nomeCasal) + ",\n" +
      "  tituloAba: " + JSON.stringify(c.tituloAba) + ",\n" +
      "  dataInicio: new Date(" + JSON.stringify(c.dataInicio) + "),\n" +
      "  fraseContador: " + JSON.stringify(c.fraseContador) + ",\n" +
      "  mensagem: " + JSON.stringify(c.mensagem) + ",\n" +
      "  fotos: " + JSON.stringify(c.fotos, null, 2) + ",\n" +
      "  legendas: " + JSON.stringify(c.legendas, null, 2) + ",\n" +
      "  musicaArquivo: " + JSON.stringify(c.musicaArquivo) + ",\n" +
      "  musicaSpotify: " + JSON.stringify(c.musicaSpotify) + ",\n" +
      "  emojiChuva: " + JSON.stringify(c.emojiChuva) + ",\n" +
      "};\n";

    var blob = new Blob([conteudo], { type: "application/javascript" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = "config.js";
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);

    el.okMsg.style.display = "block";
    el.okMsg.innerHTML = "✅ Arquivo <b>config.js</b> baixado!<br>" +
      "Agora substitua o arquivo <b>js/config.js</b> do projeto por este e publique. " +
      "As fotos já estão embutidas dentro dele. 💝";
    el.okMsg.scrollIntoView({ behavior: "smooth" });
  });

})();
