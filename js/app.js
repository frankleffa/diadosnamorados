/* =====================================================================
   Lógica da página. Você NÃO precisa editar este arquivo.
   Edite apenas js/config.js
   ===================================================================== */

(function () {
  "use strict";

  /* ---------- Define qual configuração usar ----------
     Por padrão usa o arquivo js/config.js (CONFIG).
     Mas se a página for aberta em modo prévia (index.html?previa=1),
     usa os dados salvos pela página de configuração. */
  var CFG = (typeof CONFIG !== "undefined") ? CONFIG : {};
  try {
    var params = new URLSearchParams(location.search);
    if (params.get("previa") === "1") {
      var salvo = localStorage.getItem("ddn_previa");
      if (salvo) { CFG = JSON.parse(salvo); }
    }
  } catch (e) { /* ignora */ }

  /* ---------- Aplica textos do config ---------- */
  document.title = CFG.tituloAba || "Feliz Dia dos Namorados";
  document.getElementById("heroNomes").textContent = CFG.nomeCasal || "";
  document.getElementById("aberturaNomes").textContent = CFG.nomeCasal || "";
  document.getElementById("contadorFrase").textContent = CFG.fraseContador || "";
  var textoMensagem = CFG.mensagem || "";   // será "digitada" quando aparecer na tela
  if (CFG.cartaConvite) {
    document.getElementById("cartaTexto").innerHTML =
      String(CFG.cartaConvite).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\n/g, "<br>");
  }

  /* ===================== CÉU ESTRELADO ===================== */
  (function criarEstrelas() {
    const ceu = document.getElementById("ceu");
    const total = 70;
    let html = "";
    for (let i = 0; i < total; i++) {
      const tam = (Math.random() * 2 + 1).toFixed(1);
      const x = (Math.random() * 100).toFixed(2);
      const y = (Math.random() * 100).toFixed(2);
      const dur = (Math.random() * 3 + 1.5).toFixed(1);
      html += `<span class="estrela" style="width:${tam}px;height:${tam}px;left:${x}%;top:${y}%;--dur:${dur}s"></span>`;
    }
    ceu.innerHTML = html;
  })();

  /* ===================== CHUVA DE CORAÇÕES ===================== */
  (function chuvaCoracoes() {
    const chuva = document.getElementById("chuva");
    const emoji = CFG.emojiChuva || "❤️";
    function soltar() {
      const gota = document.createElement("span");
      gota.className = "gota";
      gota.textContent = emoji;
      gota.style.left = Math.random() * 100 + "vw";
      gota.style.fontSize = (Math.random() * 1.2 + 0.8) + "rem";
      gota.style.animationDuration = (Math.random() * 4 + 5) + "s";
      gota.style.opacity = (Math.random() * 0.5 + 0.4).toFixed(2);
      chuva.appendChild(gota);
      setTimeout(() => gota.remove(), 9000);
    }
    setInterval(soltar, 450);
  })();

  /* ===================== CONTADOR AO VIVO ===================== */
  (function contador() {
    // Aceita tanto um objeto Date (do config.js) quanto texto ISO (da prévia)
    const inicio = new Date(CFG.dataInicio);
    const els = {
      anos: document.getElementById("anos"),
      meses: document.getElementById("meses"),
      dias: document.getElementById("dias"),
      horas: document.getElementById("horas"),
      minutos: document.getElementById("minutos"),
      segundos: document.getElementById("segundos"),
    };

    function pad(n) { return n < 10 ? "0" + n : "" + n; }

    function atualizar() {
      const agora = new Date();
      if (agora < inicio) { return; }

      let anos = agora.getFullYear() - inicio.getFullYear();
      let meses = agora.getMonth() - inicio.getMonth();
      let dias = agora.getDate() - inicio.getDate();
      let horas = agora.getHours() - inicio.getHours();
      let minutos = agora.getMinutes() - inicio.getMinutes();
      let segundos = agora.getSeconds() - inicio.getSeconds();

      if (segundos < 0) { segundos += 60; minutos--; }
      if (minutos < 0) { minutos += 60; horas--; }
      if (horas < 0) { horas += 24; dias--; }
      if (dias < 0) {
        const diasMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += diasMesAnterior; meses--;
      }
      if (meses < 0) { meses += 12; anos--; }

      els.anos.textContent = anos;
      els.meses.textContent = meses;
      els.dias.textContent = dias;
      els.horas.textContent = pad(horas);
      els.minutos.textContent = pad(minutos);
      els.segundos.textContent = pad(segundos);
    }
    atualizar();
    setInterval(atualizar, 1000);
  })();

  /* ===================== GALERIA / CARROSSEL ===================== */
  (function galeria() {
    const fotos = CFG.fotos || [];
    const legendas = CFG.legendas || [];
    const slidesEl = document.getElementById("slides");
    const bolinhasEl = document.getElementById("bolinhas");
    const legendaEl = document.getElementById("legenda");
    let atual = 0;

    if (fotos.length === 0) {
      document.getElementById("galeriaBloco").style.display = "none";
      return;
    }

    fotos.forEach((src, i) => {
      const slide = document.createElement("div");
      slide.className = "slide";
      const img = document.createElement("img");
      img.src = src;
      img.alt = legendas[i] || "Foto do casal";
      img.loading = "lazy";
      // Se a foto não existir ainda, mostra um placeholder bonitinho.
      img.onerror = function () {
        slide.className = "slide-vazio";
        slide.innerHTML = '<span>📷</span><div>Adicione sua foto em<br><b>' + src + '</b></div>';
      };
      slide.appendChild(img);
      slidesEl.appendChild(slide);

      const b = document.createElement("span");
      b.className = "bolinha" + (i === 0 ? " ativa" : "");
      b.addEventListener("click", () => irPara(i));
      bolinhasEl.appendChild(b);
    });

    function irPara(i) {
      atual = (i + fotos.length) % fotos.length;
      slidesEl.style.transform = `translateX(-${atual * 100}%)`;
      legendaEl.textContent = legendas[atual] || "";
      [...bolinhasEl.children].forEach((b, idx) =>
        b.classList.toggle("ativa", idx === atual));
    }

    document.getElementById("setaEsq").addEventListener("click", () => irPara(atual - 1));
    document.getElementById("setaDir").addEventListener("click", () => irPara(atual + 1));

    // Auto-play
    let timer = setInterval(() => irPara(atual + 1), 4000);
    document.querySelector(".carrossel").addEventListener("pointerdown", () => {
      clearInterval(timer);
      timer = setInterval(() => irPara(atual + 1), 4000);
    });

    legendaEl.textContent = legendas[0] || "";
  })();

  /* ===================== MÚSICA ===================== */
  (function musica() {
    const botao = document.getElementById("botaoMusica");
    const audio = document.getElementById("audio");
    let tocando = false;

    // Opção Spotify
    if (CFG.musicaSpotify) {
      const id = extrairSpotify(CFG.musicaSpotify);
      if (id) {
        document.getElementById("spotifyBloco").style.display = "block";
        document.getElementById("spotifyEmbed").innerHTML =
          `<iframe src="https://open.spotify.com/embed/${id.tipo}/${id.id}?utm_source=generator&theme=0" height="${id.tipo === "track" ? 152 : 352}" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
      }
    }

    // Opção arquivo de áudio
    if (CFG.musicaArquivo) {
      audio.src = CFG.musicaArquivo;
    } else {
      botao.style.display = CFG.musicaSpotify ? "none" : botao.style.display;
    }

    function toggle() {
      if (!CFG.musicaArquivo) return;
      if (tocando) {
        audio.pause();
        botao.classList.remove("tocando");
      } else {
        audio.play().catch(() => {});
        botao.classList.add("tocando");
      }
      tocando = !tocando;
    }
    botao.addEventListener("click", toggle);

    // Tenta iniciar a música quando o presente é aberto
    window.__iniciarMusica = function () {
      if (CFG.musicaArquivo && !tocando) {
        audio.play().then(() => {
          tocando = true;
          botao.classList.add("tocando");
        }).catch(() => {});
      }
    };

    function extrairSpotify(url) {
      const m = url.match(/open\.spotify\.com\/(track|playlist|album)\/([a-zA-Z0-9]+)/);
      return m ? { tipo: m[1], id: m[2] } : null;
    }
  })();

  /* ===================== EXPLOSÃO DE CORAÇÕES ===================== */
  function explodir(qtd) {
    const emoji = CFG.emojiChuva || "❤️";
    const camada = document.createElement("div");
    camada.className = "explosao";
    document.body.appendChild(camada);
    for (let i = 0; i < qtd; i++) {
      const p = document.createElement("span");
      p.textContent = emoji;
      const ang = Math.random() * Math.PI * 2;
      const dist = Math.random() * 240 + 80;
      p.style.setProperty("--tx", Math.cos(ang) * dist + "px");
      p.style.setProperty("--ty", Math.sin(ang) * dist + "px");
      p.style.fontSize = (Math.random() * 1.4 + 0.8) + "rem";
      p.style.animationDelay = (Math.random() * 0.15) + "s";
      camada.appendChild(p);
    }
    setTimeout(() => camada.remove(), 1600);
  }

  /* ===================== REVELAR AO ROLAR + DIGITAÇÃO ===================== */
  (function revelar() {
    const alvos = document.querySelectorAll(".hero, .bloco");
    alvos.forEach((el) => el.classList.add("reveal"));

    const mensagemEl = document.getElementById("mensagem");
    let digitou = false;

    function digitar() {
      if (digitou) return;
      digitou = true;
      let i = 0;
      mensagemEl.classList.add("digitando");
      (function passo() {
        mensagemEl.textContent = textoMensagem.slice(0, i);
        if (i < textoMensagem.length) {
          i++;
          // mais rápido em espaços, mais lento na pontuação
          const c = textoMensagem.charAt(i - 1);
          const espera = ".!?".includes(c) ? 180 : 28;
          setTimeout(passo, espera);
        } else {
          mensagemEl.classList.remove("digitando");
        }
      })();
    }

    // Só começa a observar depois que o presente é aberto.
    window.__iniciarReveal = function () {
      if ("IntersectionObserver" in window) {
        const obs = new IntersectionObserver((entradas) => {
          entradas.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("ativo");
              if (e.target.classList.contains("mensagem-bloco")) digitar();
              obs.unobserve(e.target);
            }
          });
        }, { threshold: 0.2 });
        alvos.forEach((el) => obs.observe(el));
      } else {
        alvos.forEach((el) => el.classList.add("ativo"));
        digitar();
      }
    };
  })();

  /* ===================== ABERTURA (carta lacrada) ===================== */
  (function abertura() {
    const tela = document.getElementById("abertura");
    const cena = document.getElementById("envCena");
    const conteudo = document.getElementById("conteudo");
    const selo = document.getElementById("selo");
    const continuar = document.getElementById("botaoAbrir");

    // 1) Aperta o selo -> a carta abre e sobe
    selo.addEventListener("click", () => {
      if (cena.classList.contains("aberta")) return;
      cena.classList.add("aberta");
      explodir(22);
      if (window.__iniciarMusica) window.__iniciarMusica();
    });

    // 2) Continuar a leitura -> revela o resto da página
    continuar.addEventListener("click", () => {
      explodir(46);
      tela.classList.add("oculto");
      conteudo.classList.add("visivel");
      if (window.__iniciarMusica) window.__iniciarMusica();
      setTimeout(() => {
        if (window.__iniciarReveal) window.__iniciarReveal();
      }, 300);
    });
  })();

})();
