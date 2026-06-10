# 💖 Presente de Dia dos Namorados

Uma página romântica e personalizada pra surpreender quem você ama — igual aos sites pagos (tipo LovePanda), só que **feita por você e 100% de graça**.

Ela tem:
- 💕 Nomes do casal com efeito bonito
- ⏳ Contador ao vivo de quanto tempo vocês estão juntos (anos, meses, dias, horas, minutos e segundos)
- 📸 Galeria de fotos com carrossel automático
- 💌 Mensagem de amor personalizada
- 🎵 Música de fundo (MP3 ou Spotify)
- ❤️ Corações caindo na tela + céu estrelado
- 📱 Funciona lindo no celular (ideal pra mandar por link ou QR Code)

---

## ✨ Jeito fácil: página de configuração (recomendado)

Abra o arquivo **`configurar.html`** no navegador. Lá você preenche tudo num
formulário simples e faz **upload das fotos** sem mexer em código:

1. Preencha nomes, data, mensagem e (se quiser) link de música do Spotify.
2. Arraste/escolha as fotos e ajuste a ordem e as legendas.
3. Clique em **👀 Ver prévia** pra ver como ficou.
4. Clique em **⬇️ Baixar arquivo pronto** — ele baixa um `config.js` com tudo
   embutido (inclusive as fotos).
5. Substitua o arquivo `js/config.js` do projeto por esse que você baixou e publique.

> Pra abrir o `configurar.html` localmente, use o servidor local (veja a seção
> "Como ver no seu computador" mais abaixo) e acesse `http://localhost:8000/configurar.html`.
> Depois de publicar, ele também fica em `https://SEU-USUARIO.github.io/diadosnamorados/configurar.html`.

---

## 🛠️ Jeito manual: editar o arquivo `js/config.js`

### 1. Edite o arquivo `js/config.js`
Esse é o **único** arquivo que você precisa mexer. Abra ele e troque:
- **`nomeCasal`** → o nome de vocês
- **`dataInicio`** → a data em que começaram a namorar
  - ⚠️ Atenção: o **mês começa em 0**! Janeiro = 0, Fevereiro = 1, ... Dezembro = 11.
  - Ex: `new Date(2023, 1, 14, 20, 30, 0)` = 14 de fevereiro de 2023, 20:30.
- **`mensagem`** → seu recado de amor
- **`fotos`** e **`legendas`** → suas fotos

### 2. Adicione as fotos
Coloque as imagens na pasta `fotos/` e liste os nomes em `config.js`.
(Enquanto não adicionar, aparece um espaço reservado mostrando onde colocar.)

### 3. (Opcional) Adicione música
Veja as instruções em `musica/LEIA-ME.txt`.

---

## 👀 Como ver no seu computador (teste)

Como a página usa JavaScript, abrir o `index.html` direto pode dar erro de foto.
O jeito mais fácil é rodar um servidor local:

```bash
# Tendo Python instalado, na pasta do projeto:
python3 -m http.server 8000
```
Depois acesse no navegador: **http://localhost:8000**

---

## 🚀 Como publicar de graça (GitHub Pages)

1. Suba esses arquivos pro seu repositório no GitHub (já está feito 😉).
2. No GitHub, vá em **Settings** → **Pages**.
3. Em "Source", escolha a branch (ex: `main`) e a pasta `/ (root)`.
4. Salve. Em ~1 minuto seu site fica no ar num link tipo:
   `https://SEU-USUARIO.github.io/diadosnamorados/`

### 📲 Gerar o QR Code
Pegue o link do seu site e cole em qualquer gerador de QR Code grátis
(ex: site "qr code generator"). Imprima e cole num cartão ou presente. 💝

---

Feito com ❤️ pra fazer alguém sorrir.
