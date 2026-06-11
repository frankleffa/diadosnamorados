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
  mensagem: `Meu amor,

Com a chegada de mais um Dia dos Namorados, fiquei pensando em tudo o que já vivemos juntos e em como nossa história foi construída em momentos que realmente importam.

Você esteve ao meu lado quando minha vida não estava fácil (ainda não tá kkk). Esteve presente em momentos de medo, de incerteza e de dificuldade. Quando eu passei por situações que poderiam ter mudado tudo, você estava ali. Quando eu não tinha a estabilidade e ainda estava tentando encontrar meu caminho, você também estava ali.

Muitas pessoas aparecem quando tudo está bem. Poucas permanecem quando as coisas ficam difíceis. Você permaneceu.

Por isso, quando olho para trás, não vejo apenas minha namorada. Vejo uma parceira que escolheu caminhar ao meu lado em fases que nem sempre foram leves ou fáceis, mas a gente passou por todas.

Também sei que nosso relacionamento teve desafios. A distância, as diferenças, os momentos em que parecia que estávamos falando línguas diferentes. Mas tenho orgulho de nós por não termos desistido.

Talvez o que eu mais admire em nós seja justamente isso: não é um relacionamento perfeito, é um relacionamento real. E mesmo assim continuamos aqui, aprendendo, crescendo e escolhendo um ao outro.

Hoje sou muito grato por ter você na minha vida. Grato pelo apoio, pela paciência, pelo carinho e por tudo o que você fez por mim, inclusive nos momentos em que eu talvez nem conseguisse enxergar o quanto aquilo significava.

Espero que você saiba o quanto é especial para mim e o quanto valorizo tudo o que construímos até aqui.

Feliz Dia dos Namorados.

Eu te amo.

Com amor,
Frank`,

  /* ---------- SEÇÃO "EU AMO..." ----------
     Uma lista de coisinhas que você ama nela. Deixe a lista vazia [] para esconder
     a seção, ou personalize à vontade. */
  motivos: [
    "Do seu sorriso, que ilumina até os meus dias ruins",
    "De como você é pura e autêntica, sem máscaras",
    "De a gente ser namorados e, acima de tudo, melhores amigos — isso não tem preço",
    "De cada risada boba que só nós dois entendemos",
    "Da sua parceria, que aguenta qualquer fase ao meu lado",
    "De saber que, com você, até o difícil vale a pena",
  ],

  /* ---------- FOTOS DO CASAL ----------
     Coloque suas imagens na pasta "fotos/" e liste os nomes aqui.
     Ex: "fotos/nossa-foto-1.jpg"  */
  fotos: [
    "fotos/foto1.jpg",
    "fotos/foto2.jpg",
    "fotos/foto3.jpg",
    "fotos/foto4.jpg",
    "fotos/foto5.jpg",
    "fotos/foto6.jpg",
    "fotos/foto7.jpg",
    "fotos/foto8.jpg",
    "fotos/foto9.jpg",
    "fotos/foto10.jpg",
  ],

  /* ---------- LEGENDAS DAS FOTOS (opcional) ----------
     Uma legenda para cada foto, na mesma ordem. Deixe "" se não quiser. */
  legendas: [
    "Nossas noites favoritas 🥰",
    "Do seu lado é o meu lugar ❤️",
    "Estrada e pôr do sol com você 🌅",
    "Parceira de treino e de vida 💪",
    "Pra qualquer lugar, juntos ✨",
    "Prontos pra arrasar juntos 💚",
    "Nossa bagunça favorita 😜",
    "Combinando até sem querer ❤️",
    "Vista linda, companhia melhor ainda 🌊",
    "No topo do mundo, com você ✨",
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
