# Pacotes, Roteadores e Confiança

Vamos supor que você deseje ouvir algumas músicas no Spotify. Você imagina que o que acontece é que o seu dispositivo faz uma requisição ao servidor do Spotify e em seguida ele te manda as músicas escolhidas, certo?
Errado. Não tem como um servidor suportar tantas requisições simultâneas diretamente. 
Além disso, as informações na internet viajam muito menos diretamente do que se imagina. Elas são enviadas através de pacotes e não seguem um caminho fixo, podendo variar entre máquinas, a depender do nível de congestionamento das rotas disponíveis. 

Cada roteador tem diversas rotas por onde os pacotes podem ser enviados e ele em geral envia os pacotes nos melhores caminhos, que em geral são os que têm menos conflitos externos ou quem levam menos tempo para chegar ao destino. Não necessariamente são os caminhos mais curtos.

A confiança da Internet vem das múltiplas rota disponíveis de cada roteador que, mesmo que determinados caminhos sejam lesados, ainda assim a mensagem pode encontra uma rota diferente para chegar aonde precisa. 
Quanto mais roteadores tivermos, mais reliable (confiança) teremos.

Como saber se toda a informação chegará?
Saberemos através do TCP (Transmission Control Protocol), que gerencia e ordena todos os pacotes das informações enviadas. Caso algum pacote falte, ele irá avisar ao IP do remetente para que reenvie. 
