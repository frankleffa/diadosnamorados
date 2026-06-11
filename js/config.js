/* =====================================================================
   ❤️  CONFIGURAÇÃO DA SUA PÁGINA  ❤️
   ---------------------------------------------------------------------
   Esse é o ÚNICO arquivo que você precisa editar.
   Troque os textos entre aspas pelos seus dados e salve.
   ===================================================================== */

const CONFIG = {

  /* ---------- NOMES DO CASAL ---------- */
  // Aparece grande no topo da página.
  nomeCasal: "Frank ❤️ Ana",

  /* ---------- TÍTULO DA ABA DO NAVEGADOR ---------- */
  tituloAba: "Feliz Dia dos Namorados ❤️",

  /* ---------- DATA EM QUE VOCÊS COMEÇARAM ----------
     Formato: ano, mês, dia, hora, minuto
     ATENÇÃO: o mês começa em 0! (Janeiro = 0, Fevereiro = 1, ... Dezembro = 11)
     Exemplo abaixo = 1 de janeiro de 2022, à meia-noite */
  dataInicio: new Date(2022, 0, 1, 0, 0, 0),

  /* ---------- TEXTO DA CARTA (tela de abertura, antes de abrir o selo) ----------
     Use \n para quebrar linha. */
  cartaConvite: "Hoje é o nosso dia.\nPreparei uma coisinha especial só pra você ler com calma... 💌",

  /* ---------- FRASE ABAIXO DO CONTADOR ---------- */
  fraseContador: "Tempo que estamos compartilhando momentos juntos 💕",

  /* ---------- MENSAGEM DE AMOR ----------
     Pode usar várias linhas. Use \n para quebrar linha. */
  mensagem: "Ana,\n\nCada segundo ao seu lado é o meu lugar favorito no mundo. " +
            "Obrigado por encher os meus dias de sorrisos, carinho e aventuras. " +
            "Você é o meu presente todos os dias, não só hoje.\n\n" +
            "Feliz Dia dos Namorados! Eu te amo. ❤️",

  /* ---------- FOTOS DO CASAL ----------
     Coloque suas imagens na pasta "fotos/" e liste os nomes aqui.
     Ex: "fotos/nossa-foto-1.jpg"  */
  fotos: [
    "fotos/foto1.jpg",
    "fotos/foto2.jpg",
    "fotos/foto3.jpg",
    "fotos/foto4.jpg",
  ],

  /* ---------- LEGENDAS DAS FOTOS (opcional) ----------
     Uma legenda para cada foto, na mesma ordem. Deixe "" se não quiser. */
  legendas: [
    "Nosso primeiro encontro 🥰",
    "Aquela viagem inesquecível ✈️",
    "Rindo de tudo, como sempre 😂",
    "Pra sempre, você e eu ❤️",
  ],

  /* ---------- MÚSICA DE FUNDO (opcional) ----------
     Opção A) Áudio: coloque um arquivo .mp3 na pasta "musica/" e ponha o caminho.
              Ex: "musica/nossa-musica.mp3"
     Opção B) Spotify: cole o LINK de uma música/playlist (começa com https://open.spotify.com/...)
     Deixe "" (vazio) nas duas se não quiser música. */
  musicaArquivo: "musica/perfect.mp3",   // Ed Sheeran - Perfect
  musicaSpotify: "",      // ex: "https://open.spotify.com/track/XXXXXXXX"

  /* ---------- EMOJI QUE CAI NA TELA ---------- */
  emojiChuva: "❤️",       // pode trocar por "💖", "🌹", "✨", etc.
};
