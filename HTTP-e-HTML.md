# HTTP e HTML

Quando abrimos o Web Browser e digitamos o endereço do site, esse endereço web se chama URL (Uniform Resource Locator).

Quando nosso computador faz uma requisição ao DNS para sabermos o IP do website que queremos acessar, essa requisição é através do HTTP (HyperText Tranfer Protocol). É a linguagem utilizada na comunicação entre browsers e servidores. 
O pedido de requisição é através do GET request. 

Já o HTML (HyperText Markup Language) é o "esqueleto" do site. Ele é composto de tags, que são responsáveis por tudo o que compõe o site (texto, fotos, vídeos).
O texto do site é incluído diretamente no HTML, mas as fotos e vídeos são arquivos separados e possuem, cada um, um URL diferente. 
O browser faz uma requisição HTTP para cada URL dessas (vídeo e foto) e as mostra conforme recebem as requisições. Então quanto mais fotos/vídeos um website tiver, maior será o tempo de duração para que a página carregue, pois a cada um deles será necessário fazer uma requisição HTTP. 

Podemos também enviar requisições, como quando enviamos nossas informações através de um formulário.
Isso ocorre através de um HTTP POST Request. 
Exemplo: Na página de login, colocamos nosso email e senha. Ele é enviado pelo POST Request ao DNS da página que queremos acessar. O DNS checa as informações, confirma o ID do usuário e permite que ele logue no site. Ele também envia de maneira invisível ao site os cookies para que ele lembre de quem você é. O cookie funciona, em suma, como um ID card. 
Na próxima vez que você tentar entrar naquele website, já entrará automaticamente por conta do cookie.

Existem algumas formas de prevenir que website sejam hackeados, utilizando SSL (Secure Sockets Layer) e TLS (Transport Layer Security).
O SSL é aquele cadeado que aparece ao lado do URL. Assim, vemos também o HTTPS (HyperText Tranfer Protocol Secure).