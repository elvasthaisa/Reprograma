## Como a Internet funciona?

# Redes, cabos e WiFi

Internet é uma supressão de Inter Network, ou seja, é uma interligação de redes de dispositivos eletrônicos.

A Internet é dividida em duas partes principais:
Hardware e Software

O hardware é a rede de cabos submarinos de fibra óptica que conecta todos os continentes à internet e o software é o responsável por gerenciar os dados e garantir que estes cheguem em segurança ao destino.

Cada dispositivo eletrônico que se conecta à Internet tem um IP (Internet Protocol), que funciona como um identificador. O IP que conhecemos permite cerca de 4 bilhões de combinações e, como estamos perto de atingir este número, criaram o IPV 6, que é uma série de 32 dígitos, que nos dá uma quantidade praticamente inalcançável de dispositivos.

Quando enviamos uma mensagem, o IP a divide em várias partes, conhecidas como pacotes. Elas são enviadas separadamente, possuindo o IP do remetente e do destinário, buscando caminhos menos "congestionados" e passando por diversos roteadores até chegarem ao destinário. 

Ao chegar ao destino, a mensagem estará bagunçada, fora de ordem. Como o TCP (Transmission Control Protocol) tem a função de entregar ordenadamente a informação proveniente do protocolo IP, ele irá organizar os pacotes, de modo que a mensagem possa ser entendida. Caso falte algum pacote, o TCP vai notificar o remetente para que ele volte a enviá-lo. Quando toda a informação estiver pronta e organizada, o destinatário a receberá.

> Mas como é o envio de mensagens?
A Internet utiliza informações através de binários: 0 (off) e 1 (on). Cada dígito representando 1 bit. 
- 8 bits juntos representam 1 byte. 
- 1000 bytes representam 1 KB
- 1000 KB representa 1 MB

> Fisicamente, como isso é feito?
A forma mais rápida que conhecemos de enviar uma mensagem é utilizando feixes de luz. Podemos enviar bits como feixes de luz através dos kilométricos cabos de fibra óptica, de modo que a mensagem possa chegar rápido ao destino. Tais fibras são finos fios revestidos de vidro em seu interior, que refletem os feixes internamente e, alterando-se a angulação, é possível enviar várias informações diferentes através da mesma fibra.

> Como enviamos arquivos wireless (sem cabos)?
Através das ondas de rádio, há máquinas que transformam os bits em frequências específicas AM/FM. Ao chegarem no seu dispositivo, são convertidas a bits novamente. 