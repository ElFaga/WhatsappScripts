async function enviarScript(scriptText){

    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    
    if(!textarea) throw new Error("Não há uma conversa aberta")
    
    for(const line of lines){
        console.log(line)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
        
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    return lines.length;
}

enviarScript(`
Um elegante carro esportivo britânico fala diretamente conosco em um
vídeo pixelizado e distorcido. Ele está sem fôlego. Caixas são visíveis atrás
dele. Estamos nas entranhas sombrias de uma sala de aço.
LELAND TURBO
Este é o Agente Leland Turbo. Tenho uma
transmissão flash para o Agente Finn
McMissile.
SOBRE IMPOSTO SOBRE O PRETO: WALT DISNEY PICTURES PRESENTES
LELAND TURBO
Finlandês. Meu disfarce foi comprometido.
Tudo ficou em forma de pêra.
SUPERIMPOR SOBRE O PRETO: UM FILME DO PIXAR ANIMATION STUDIOS
LELAND TURBO
Você não vai acreditar no que descobri
aqui.
Ele inclina a visão da nossa câmera e revela uma PORTA através da qual
podemos ver as chamas subindo à distância.
LELAND TURBO
Isso é maior do que qualquer coisa que já
vimos. E ninguém sabe que isso existe. Finn,
preciso de reforços. Mas não chame a
cavalaria - isso pode estragar a operação. E
tenha cuidado. Não é seguro aqui!
ANGRY VOICES OS É hora do Turbo partir.
LELAND TURBO
Transmitindo minhas grades agora. Boa
sorte!
As coordenadas aparecem: 40 6,80' N - 172 23,84' W
CARTÃO DE TÍTULO: CARROS 2
EXT. EM ALGUM LUGAR DO PACÍFICO NORTE - NOITE
UM TINY CRAB BOAT (CRABBY) atinge o topo de ondas enormes.
CRABBY
Tudo bem amigo, estamos aqui.
Exatamente onde você me pagou para
trazê-lo. A questão é: por quê?
Um carro esportivo azul metálico, dos anos 60, emerge do
sombras. Cagey, suave, ele chamaria a atenção ao dirigir em qualquer
cruzamento do mundo. Conheça FINN MCMISSILE.
FINAL
Estou procurando um carro.
CRABBY
Um carro? Ei, amigo, você não pode ficar
mais longe da terra do que aqui.
FINAL
Exatamente onde eu quero estar.
CRABBY
Bem, tenho novidades para você, amigo.
Não há ninguém aqui além de nós.
De repente, um HORN – um NAVIO DE COMBATE, do tamanho da maioria dos
navios de cruzeiro. FINN rapidamente recua para as sombras, fora de vista.
NAVIO DE COMBATE
O que você está fazendo aqui?
CRABBY
Como é isso, gênio? Estou caranguejo!
NAVIO DE COMBATE
Bem, vire-se e volte de onde você veio.
CRABBY
Sim? E quem vai me obrigar?
Uma mira a laser atinge Crabby entre os olhos.
CRABBY
Tudo bem, tudo bem! Não confunda seu
adereço.
(quando ele se vira para sair) Que
idiota. Foi mal cara. Parece que é o fim da
linha. Companheiro?
NO CONVÉS DE CRABBY: Finn se foi.
CORTE PARA:
FINN - Ele PENDURA na lateral do NAVIO DE COMBATE, clandestino.
Estamos com Finn enquanto a nave segue em frente, atravessando a
escuridão com propósito. De repente, pequenas chamas aparecem, talvez a
um nó ou mais de distância. Então UAU!!! Uma chama surge acima de Finn, o
navio. Ilumina uma TORRE DE ÓLEO.
THWAP! Finn dispara um GANCHO na torre e BALANÇA em direção a ela. Ele
vai bater na lateral com força bruta quando ---
- - - SEUS PNEUS brotam um exoesqueleto magnético. Ele FURA-SE à torre e
agora CONDUZ VERTICALMENTE PARA CIMA...
Deste ponto de vista,centenas de torres aparecem.
EXT. PLATAFORMA - TORRE DE PETRÓLEO - MOMENTOS DEPOIS
Finn se aproxima de um cais de carga por cima e se esconde. Ele observa
enquanto GREMLINS, PACERS e vários outros carros correm.
FINN (PARA RÁDIO)
Leland Turbo, este é Finn McMíssil. Estou no
ponto de encontro. Sobre.
Nenhuma resposta.
FINN (PARA RÁDIO)
Leland, é o Finn. Por favor responda. Sobre.
Uma porta de acesso abre ruidosamente abaixo. Um carro alemão quadradão e
usando monóculo entra. Este é o PROFESSOR OTTO ZUNDAPP.
PROFESSOR ZUNDAPP
(em alemão e inglês) Muitos carros
aqui. Fora do meu caminho!
FINAL
Professor Zundapp?
PACER (SO)
Aqui está, professor.
Zundapp se aproxima de um NOSY PACER que está parado próximo a uma CAIXA.
PACER INTROESSADO
Você queria ver isso antes de carregá-lo?
PROFESSOR ZUNDAPP
Ah sim. Muito cuidado...
Uma empilhadeira abre a caixa – dentro dela há uma CÂMERA de TV,
cuidadosamente embalada em espuma. Finn tira fotos furiosamente.
PACER INTROESSADO
Oh. Uma câmera de televisão. O que isso
realmente faz?
PROFESSOR ZUNDAPP
Esta câmera é extremamente perigosa.
FINAL
(para ele mesmo)
O que você está fazendo agora, professor?
Finn, procurando uma visão melhor, DISPARA OS FIOS DE SUSPENSÃO ---
- - - que navegam para o outro lado da torre ---
- - - PENSE! Eles se prendem firmemente a uma viga de aço.
Finn desliza PARA O FIO como um acrobata, depois expele outro arame
cruzado para se apoiar.
PROFESSOR ZUNDAPP
Este é um equipamento valioso. Certifique-se de
que esteja devidamente protegido para a viagem.
PACER INTROESSADO
Você entendeu.
Finn se abaixa. Ele tira mais fotos.
GREM (OS)
Olá, Professor Z!
Zundapp se vira quando um GUINDASTE ABAIXA UMA CAIXA DO TAMANHO DE UM
CARRO. GREM e ACER, um Gremlin laranja e um Pacer verde, flanqueiam-no.
GREM
Este é um daqueles espiões britânicos de
que lhe falamos.
ACER
Sim. Este nós pegamos enfiando o párachoque onde não deveria.
Finn PRODUZ ARMAS SEMI-AUTOMÁTICAS ao seu lado e se prepara para
uma luta de espionagem com seu amigo Leland.
PROFESSOR ZUNDAPP
Agente Leland Turbo.
A caixa é levantada, revelando um Leland Turbo ESMAGADO E CUBADO.
Os olhos de Finn se arregalam. De repente --- WHOOOOHHH! Outra chama da
torre surge atrás dele, lançando uma SOMBRA em forma de Finn sobre o
Professor. Ele olha para cima.
PROFESSOR ZUNDAPP
É Finn McMíssil! Ele viu a câmera! Mate ele!!
Finn DESCARGA com balas enquanto começa a recuar --- Ele PÁRA:
CARROS BAD GUY estão esperando por ele na passarela de onde ele acabou de
sair - maçaricos prontos.
Finn, preso no ar, percebe um GUINDASTE furioso. Finn SORRISO, tendo
acabado de encontrar sua fuga.
THWAPTHWAPTHWAP!!! Finn solta três de seus quatro cabos, balançando
no estilo Indiana Jones no último EM DIREÇÃO AO GUINDASTE ---
- - - onde ele pousa em seu BOOM, sobe e LANÇA onde ele pousa - em
movimento - em outro deck!
Finn agora DIRIGE, borrifando óleo e gritando nas curvas. Um GREMLIN em
perseguição atinge a mancha de petróleo e perde o controle ---
- - - e despenca pela lateral da plataforma!
O Gremlin CAI... é como uma eternidade...
Ele bate na água e se quebra em um milhão de pedaços.
ON FINN - Agora atacado por MAIS 20 ou 30 carros perseguidores. Ele não tem
para onde ir, a não ser subir uma rampa em direção ao heliporto. Ele avista
alguns BARRIS DE GASOLINA, dispara uma ÚNICA BALA que corta suas tiras de
couro, enviando os barris pela rampa, PASSANDO por FINN ---
- - - PASSADO pelos CARROS perseguidores ---
- - - até o fundo, onde eles EXPLODEM em uma REAÇÃO EM CADEIA, SUBINDO
A RAMPA, eliminando pelo menos 15 CARROS!
NO HELIPAD - Finn aparece e para. Não há mais estrada. Nenhum outro
lugar para ir.
Os 20 CARROS BAD GUY que ainda o perseguem o cercam e acendem seus
maçaricos. Prestes a atacar.
Finn sorri. A segunda vez que vimos esse sorriso. Significa que ele tem algo
cozinhando.
As luzes de ré de Finn aparecem. Ele CONDUZ DE VOLTA para fora da borda do
heliporto até o CHOQUE dos outros carros.
Finn cai. Ele se vira para grelhar primeiro, cortando a água de maneira
limpa.
Ele EMERGE, agora brotando HYDROFOIL e sai em alta velocidade.
GREM
(perplexo)
Vá para os barcos.
OS BARCOS - um exército de navios de combate cai rapidamente no mar e
BATA A ÁGUA com uma fúria sem precedentes enquanto eles rapidamente
percorrem a distância entre eles e Finn, DISPARANDO BALAS enquanto o
fazem.
ACER
Ele está fugindo!
NAVIO DE COMBATE
Não por muito tempo.
O NAVIO DE COMBATE LÍDER lança silenciosamente um TORPEDO na água.
Ele salta, acertando Finn em sua retaguarda e EXPLODINDO com tanta força
que a água dispara nas nuvens noturnas.
SUBAQUÁTICO - PIA McMissile. Então, ele pisca. Ele sorri. Estamos começando
a gostar desse sorriso e do que o segue. Ele agora se CONVERTE em um
submarino. De seu porta-malas ele libera quatro pneus DECOY que flutuam
na superfície como partes de um corpo.
NA TORRE - O professor Zundapp observa tudo de longe.
GREM (NO RÁDIO)
Ele está morto, professor.
PROFESSOR ZUNDAPP
Wunderbar. Com a morte de Finn
McMissile, quem pode nos impedir agora?
EXT. MOLAS DO RADIADOR - DIA
TOW MATER, um caminhão de reboque enferrujado, aparece.
MATÉRIA
Matéria. Tow Mater, é ele quem... está aqui
para te ajudar!
Ele se aproxima de um sedã quebrado na beira da estrada. Ele dirige até a
frente, vendo o rosto de OTIS pela primeira vez.
MATÉRIA
Olá, Otis!
OTIS
Olá, Mater. Meu Deus, sinto muito. Achei
que desta vez conseguiria, mas...
(ele tenta ligar o motor,
para)
Suave como pudim, hein? Ah, quem estou
enganando? Serei sempre um limão.
Mater fisga seu amigo e começa a rebocá-lo.
MATÉRIA
Bem, papai, você está vazando óleo de
novo. Devem ser suas juntas. Ei, veja pelo
lado positivo: este é seu décimo reboque
este mês, então isso significa que é por
conta da casa.
OTIS
Você é o único que é gentil com limões
como eu, Mater.
MATÉRIA
Não se preocupe. Essas coisas acontecem
com todo mundo, Otis.
OTIS
Mas você nunca vaza óleo.
MATÉRIA
Sim, mas não sou perfeito. Não conte a
ninguém, mas acho que minha ferrugem está
começando a aparecer.
Mater e Otis passam pela placa de boas-vindas de RADIATOR SPRINGS. Foi
alterado para dizer: “Casa do Relâmpago McQueen”.
OTIS
Ei, Relâmpago McQueen já voltou?
MATÉRIA
Ainda não.
OTIS
Ele deve estar muito animado com a
ideia de ganhar sua quarta Piston Cup.
Quatro! Uau!
MATÉRIA
Sim, estamos muito orgulhosos dele. Mas eu
realmente gostaria que ele se apressasse e
voltasse, porque temos um verão inteiro de
diversão como melhor amigo para
compensar. Só eu e -
À frente deles, a oitocentos metros de distância, um CARRO DE CORRIDA VERMELHO é visível.
MATÉRIA
- - - McQueen!
Mater PISO, arrastando o pobre Otis atrás dele.
OTIS
Ah, Mater? Eu não estou com pressa.
Você não precisa ir tão rápido!
Estrondo! Eles atingiram um solavanco. Otis pega ar.
EXT. MOLAS DO RADIADOR - DIA
Relâmpago McQueen está cercado por amigos de sua cidade natal.
LUIGI
Ah, Relâmpago. Bem-vindo a casa.
FLO
Que bom ter você de volta, querido.
FILMORE
Parabéns, cara.
SARGE
Bem-vindo ao lar, soldado.
XERIFE
O lugar não era o mesmo sem você, filho.
LIZZIE
O que? Ele foi a algum lugar?
McQueen
É bom estar em casa, pessoal.
MATER (OS)
McQueen!
Todos eles se viram e veem Mater entrando em alta velocidade na cidade, com
Otis desviando atrás dele.
McQueen
Mater!
9.
MATÉRIA
McQueen!
Mater derrapa na rua principal e em um movimento rápido, atira
Otis para frente ---
OTIS
Uauahhhh!
- - - direto pela porta da frente de Ramone ---
INT. RAMONE'S - CONTÍNUO
- - - onde ele pousa perfeitamente no elevador hidráulico. Ramone o
levanta, rotina.
RAMONE
Ei. Até onde você chegou desta vez,
Otis?
OTIS
A meio caminho da divisa do condado.
RAMONE
Nada mal, cara.
OTIS
Eu sei, também não acredito!
EXT. MOLAS DO RADIADOR - CONTÍNUO
MATÉRIA
McQueen, bem-vindo de volta!
McQueen
Mater, é tão bom ver você.
MATÉRIA
Você também, amigo.
Mater e McQueen fazem um ELABORATE PNEU BUMP (estilo soco).
MATÉRIA
Oh cara. Você não vai acreditar nas coisas
que planejei para nós.
Todos observam enquanto o solavanco do pneu continua.
MAC
(para Lizzie, um aparte) Essas
saudações de melhores amigas ficam
mais longas a cada ano.
MATÉRIA
(para McQueen)
Você está pronto para se divertir muito?
McQueen
Bem, na verdade tenho algo para lhe
mostrar primeiro.
INT. MUSEU RADIADOR SPRINGS - DIA
FECHE NO COPO DO PISTÃO. Agora mudou, foi adornado com uma pequena
imagem de Doc. Diz “Hudson Hornet Piston Cup”.
MATÉRIA
Uau. Não acredito que eles renomearam a
Piston Cup em homenagem ao nosso próprio
Doc Hudson.
McQueen e Mater estão sozinhos, o museu fechado ao público. McQueen se
aproxima de uma parede "Hudson Hornet" com as três xícaras Piston de Doc,
artigos emoldurados e outras coisas efêmeras de corrida.
McQueen
Eu sei que Doc disse que essas coisas eram
apenas copos velhos, mas ter outra pessoa
ganhando não parecia certo, sabe?
MATÉRIA
Bem, Doc ficaria muito orgulhoso de você.
Isso é certeza.
McQueen entende isso.
EXT. MOLAS DO RADIADOR - MAIS TARDE
McQueen e Mater saem do Museu Doc Hudson.
McQueen
Tudo bem, amigo. Esperei todo o verão por
isso. O que você planejou?
MATÉRIA
Tem certeza que consegue lidar com isso?
McQueen
Qual é, você sabe com quem está
falando? Este é o Relâmpago McQueen.
Eu posso lidar com qualquer coisa.
EXT. MOLAS DO RADIADOR - DIA
Mater e McQueen rolam em um velho trilho de trem, sem pneus. Eles
estão em seus aros.
McQueen
Uh.... Mater?!
MATÉRIA
Apenas lembre-se, seus freios não vão
funcionar com isso!
Enquanto eles se dirigem para um túnel escuro ---
MCQUEEN (OS)
Mater!
MATER (OS)
Relaxe, esses trilhos de trem não são
usados há anos!
De dentro do túnel, uma buzina de trem alta. Os dois amigos surgem
andando o mais rápido que podem pelos trilhos do trem, subindo a colina,
sem pneus.
McQueen
Vamos! Vamos! Rápido rápido!
Momentos depois, um inofensivo GANSO GALOPANTE aparece, com um
chifre enorme visível, gargalhando e rindo de sua pegadinha.
EXT. CAMPO - MOLAS EXTERNAS DO RADIADOR - MAIS TARDE
Um ENORME MOVEDOR DE TERRA dorme. McQueen e Mater aparecem sorrateiramente.
MATÉRIA
Isso vai ser bom!
Eles tocam a buzina e ele tomba, como se fosse um trator. Eles RIEM da
piada, mas logo percebem que o TUBO DE ESCAPE GIGANTE do
escavador de terra está diretamente acima deles.
MATÉRIA
Ah, ah. Isso não vai ser bom.
O tubo de escape arrota. McQueen e Mater estão fora de vista.
INT. MOLAS DO RADIADOR - Anoitecer
O sol se põe. McQueen e Mater chegam à cidade. McQueen parece exausto.
Mater ainda está cheio de energia.
MATÉRIA
Rapaz, esse foi o melhor dia de todos! E
minha lembrança favorita?
Mater mostra orgulhosamente um amassado.
MATÉRIA
Este novo dente!
McQueen
Rapaz, Mater. Hoje foi, ah...
MATÉRIA
Droga, isso não foi nada. Espere até ver o
que planejei para esta noite.
McQueen
Matéria, Matéria. Uau. Eu estava pensando
apenas em um jantar tranquilo.
MATÉRIA
Isso é exatamente o que eu estava pensando.
McQueen
Não, eu... quis dizer com Sally, Mater.
MATÉRIA
Melhor ainda! Você, eu e a senhorita Sally
saindo para jantar.
McQueen para na frente de Mater e para.
McQueen
Mater, eu quis dizer que seríamos só eu e
Sally.
MATÉRIA
Oh.
McQueen
É só por esta noite. Faremos o que você
quiser amanhã.
MATÉRIA
(desapontado)
OK.
McQueen
Obrigado pela compreensão.
MATÉRIA
Sim claro. Vá em frente e divirta-se agora.
McQueen
Tudo bem, então. Até breve, amigo!
McQueen vai embora. Mater o observa partir.
EXT. A RODA BEM - NOITE
Foi convertido em um restaurante com toalhas de mesa brancas, com carros
jantando ao ar livre e um gastropub movimentado no interior.
MCQUEEN E SALLY têm uma mesa nobre com vista para Radiator Springs e o
céu noturno estrelado.
SALLY
Isso é tão legal.
McQueen
Eu não posso te dizer o quão bom é estar
aqui sozinho. Apenas nós dois. Finalmente,
você e eu ---
MATER (OS)
Boa noite.
Mater está à mesa deles, vestido de garçom.
MATÉRIA
Meu nome é Mater e serei seu garçom.
(para ele mesmo)
Mate o garçom. Isso é engraçado.
McQueen
Mater, você trabalha aqui?
MATÉRIA
Bem, sim, eu trabalho aqui. O que você
achou, eu entrei aqui quando ninguém
estava olhando e fingi ser seu garçom, só
para poder sair com você?
McQueen e Sally trocam um olhar.
McQueen
Oh sim. Quão ridículo isso seria?
MATÉRIA
Agora, posso começar vocês dois
pombinhos com algumas bebidas?
McQueen
Sim. Eu vou querer o meu habitual.
SALLY
Você sabe o que? Eu vou ter isso também.
Mater pisca.
MATÉRIA
Ah, certo. Seu habitual.
CORTE PARA:
DENTRO DO BAR - Fillmore e Sarge observam Guido preparar bebidas, ala
“Cocktail”. Mater chega.
MATÉRIA
Guido! Qual é o costume de McQueen?
GUIDO
(em italiano, legendado)
Como posso saber?
MATÉRIA
Perfeito! Dê-me dois deles.
SARGE
Quieto! Meu programa está ligado.
MEL DORADO (OS)
Hoje à noite no “The Mel Dorado Show”!
ON THE BAR TV - “THE MEL DORADO SHOW”, um talk show a cabo,
começa com imagens de arquivo de MILES AXLEROD, um elegante SUV.
MEL DORADO (NA TV) Sua
história conquistou o mundo! O bilionário
do petróleo Miles Axlerod, na tentativa de se
tornar o primeiro carro a circunavegar o
globo sem GPS, ironicamente ficou sem
gasolina e ficou preso na selva!
Vemos imagens de manchetes de jornais, equipes de busca.
MEL DORADO (NA TV) Temido
que estivesse morto, ele emergiu 36 dias
depois, funcionando com um combustível
que ele mesmo destilou dos elementos
naturais! Desde então, ele vendeu sua
fortuna petrolífera, passou de um bebedor de
gasolina a um carro elétrico e dedicou sua
vida a encontrar um combustível renovável e
de queima limpa!
Imagens de torres de petróleo demolidas; Miles Axlerod sendo convertido
para elétrico; cientistas de laboratório testando produtos químicos.
MEL DORADO (NA TV) Agora
ele afirma ter feito isso com seu Allinol.
Imagens de campos, rios, vegetais e montanhas combinadas para
formar o logotipo da Allinol.
MEL DORADO (NA TV) E para
mostrar ao mundo o que seu novo
supercombustível pode fazer, ele criou uma
competição de corrida como nenhuma
outra, convidando os maiores campeões de
todo o mundo para lutar no primeiro
Grande Prêmio Mundial. Bem-vindo, senhor
Miles Axlerod.
SIR MILES AXLEROD chega e estaciona em frente à mesa de Mel.
MILES AXLEROD (NA TV)
Obrigado, Mel. É muito bom estar aqui.
Agora me escute: Big Oil. Custa uma fortuna.
A poluição está piorando. Quero dizer, vamos
lá. É um combustível fóssil. Fóssil. Como nos
dinossauros mortos. E todos nós sabemos o
que aconteceu com eles. A energia
alternativa é o futuro. Acredite em mim, Mel,
depois de ver o Allinol em ação no Grande
Prêmio Mundial, ninguém mais voltará à
gasolina.
MATÉRIA
(para Fillmore)
O que aconteceu com os dinossauros
agora?
MEL DORADO (NA TV) E no
satélite, um competidor do Grande
Prêmio Mundial e um dos carros mais
rápidos do mundo, Francesco Bernoulli.
Do outro lado da tela:AO VIVO DE ROMA, ITÁLIA.Conhecemos o carro de corrida
de Fórmula FRANCESCO BERNOULLI.
FRANCESCO (NA TV)
É uma honra, Signore Dorado. Para você.
MEL DORADO (NA TV) Miles,
por que não convida o Relâmpago
McQueen?
Mater, recolhendo suas bebidas, olha para cima, meio intrigado.
MILES AXLEROD (NA TV) Claro
que o convidamos. Mas aparentemente
depois de uma longa temporada de corridas
ele está tirando um tempo para descansar.
FRANCESCO (NA TV)
Relâmpago McQueen não teria chance
contra Francesco!
Mater não gosta disso.
FRANCESCO (NA TV)
Posso percorrer mais de 300 quilômetros
por hora! Em milhas isso é, uh... muito mais
rápido que McQueen.
MEL DORADO (NA TV) Vamos
aos telefones. Baltimore, Maryland, você
está no ar.
CHAMADOR (NA TV)
Estou ligado? Olá?
MEL DORADO (NA TV) Você
está ligado. Vá em frente.
CHAMADOR (NA TV)
Olá?
MEL DORADO (NA TV) Vá
em frente, interlocutor.
Tom de discagem.
MEL DORADO (NA TV)
Vamos para Radiator Springs. Você
está ligado, chamador.
VOZ DO MATER (NA TV) Sim,
aquele italiano que você apareceu não pode
falar desse jeito sobre Relâmpago McQueen.
Ele é o melhor carro de corrida do mundo
inteiro.
Fillmore e Sarge olham em volta. Mater está visível na parte de trás do bar em
um telefone do escritório.
SARGE
Uh-oh...
FRANCESCO (NA TV)
Se ele é, como se diz “o melhor carro de
corrida”, então por que ele deveria descansar,
hein?
VOZ DO MATER (NA TV) Porque
ele sabe o que é importante. De vez em
quando ele prefere apenas desacelerar,
aproveitar a vida.
FRANCESCO (NA TV)
Ah, você ouviu! Relâmpago McQueen prefere
ser lento! Claro, isso não é novidade para
Francesco. Quando quero dormir, assisto
uma de suas corridas. Depois de duas voltas,
estou desmaiado.
RXNS audível no bar. Uma multidão vem se formando desde que Mater
começou a falar.
VOZ DE MATER (NA TV) Não
foi isso que eu quis dizer.
CORTE PARA:
MCQUEEN E SALLY - Eles ouvem a comoção lá dentro.
McQueen
Ei, o que está acontecendo aí?
CORTE PARA:
O BAR - Sally e McQueen abrem caminho no meio da multidão e veem que
estão assistindo Francesco na televisão.
McQueen
(para Sally)
Ah, é aquele carro de Fórmula Italiano. O
nome dele é ---
SALLY
Francisco Bernoulli. Não admira que
haja uma multidão.
Quando Sally diz o nome dele, ela enuncia cada parte, como se o italiano
fosse sua língua materna.
McQueen
Espere, por que você sabe o nome dele? E
não diga assim. São três sílabas, não dez.
SALLY
O que? Ele é bonito de se olhar. Você
sabe, com rodas abertas e tudo.
McQueen
O que há de errado com os pára-lamas? Achei
que você gostasse dos meus para-lamas.
VOZ DO MATER (NA TV) Bem,
deixe-me dizer mais uma coisa, Sr.
McQueen
Mate?
VOZ DO MATER (NA TV)
McQueen poderia fazer círculos ao seu
redor.
FRANCESCO (NA TV)
Dirigir em círculos é tudo o que ele pode
fazer, não?
VOZ DE MATER (NA TV) Não! Quero
dizer, sim. Quero dizer, ele poderia vencer você em
qualquer lugar, a qualquer hora, em qualquer pista.
Em McQueen – ele olha para Guido que acena para ---
- - - Mater, afastou-se da multidão, ainda ao telefone.
FRANCESCO (NA TV)
Mel, podemos seguir em frente? Francesco precisa
de um interlocutor que possa fornecer um pouco
mais de informação intelectual
estimulação. Como um caminhão basculante.
EM MCQUEEN. Ele não gosta nada disso.
MATÉRIA
Ha ha! Isso mostra o que você sabe. Caminhões
basculantes são burros.
De repente, Mater é arrancado da cabine e substituído por McQueen.
MCQUEEN (NO TELEFONE)
Sim, olá, aqui é Relâmpago McQueen. Olha,
não gosto que meu melhor amigo seja
insultado assim.
FRANCESCO (NA TV)
McQueen! Esse era seu melhor amigo? Esta é
a diferença entre você e Francesco. Francesco
sabe o quão bom ele é. Ele não precisa se
cercar de guinchos para provar isso.
McQueen
São palavras fortes vindas de um carro tão
frágil.
FRANCESCO (NA TV)
Frágil!? Ele chama Francesco de frágil?
Não tão rápido, McQueen!
McQueen
"Não tão rápido." Qual é esse, seu novo
lema?
Francesco enlouquece em italiano. Eles cortaram o microfone dele.
MILES AXLEROD (NA TV) Bem,
isso parece algo que precisa ser resolvido
na pista de corrida. O que você me diz,
Relâmpago McQueen? Ainda temos espaço
para mais um piloto.
McQueen
Bem, eu adoraria. A única coisa é que
minha equipe está de folga durante a
temporada, então ---
Um som OS McQueen se vira para ver Fillmore, Sarge e Luigi flanqueando uma
toalha de mesa pendurada no bar. Ramone se afasta, pintando com spray
“TEAM LIGHTNING MCQUEEN” nele. Guido abre rapidamente três garrafas de
vinho.
GUIDO
Parada.
McQueen volta para o telefone.
McQueen
Você sabe o que? Eles acabaram de voltar. Me
dê um acordo, querido. Ka-chow!
O lugar irrompe em felicidades.
MOMENTOS DEPOIS - Excitação geral quando McQueen sai da cabine
telefônica onde Sally espera. Fora do visual dela:
McQueen
Eu sei eu sei. Eu acabei de voltar. Mas não
vamos demorar e ---
SALLY
Ah, não, não se preocupe comigo. Já tenho o
suficiente para fazer aqui. Mater vai se
divertir muito.
(fora do silêncio de McQueen) Você
está trazendo Mater, certo? Você nunca o
traz para nenhuma de suas corridas.
McQueen se vira para o bar onde Mater experimenta suas bebidas em
particular, odeia e cospe de volta no copo.
SALLY
Apenas deixe-o sentar nos boxes e dê a ele
um fone de ouvido. Vamos lá, será a
emoção de uma vida inteira para ele.
Mater chega.
MATÉRIA
Suas bebidas, senhor.
McQueen
Matéria.
MATÉRIA
Eu não provei!
McQueen
Você gostaria de vir conhecer o mundo
comigo?
MATÉRIA
É isso que você quer dizer?
McQueen
Você me meteu nisso. Você está vindo junto.
COMECE A MONTAGEM:
- McQueen recebe uma nova pintura e faróis de Ramone. Mater, agora
ostentando o emblema do “Team McQueen”, também parece empolgado.
- Uma SINAL DE PARTIDAS do aeroporto anuncia o próximo vôo: Tóquio,
Japão.
- Mater se despede com seu gancho ao lado de McQueen, Guido, Luigi, Fillmore
e Sarge como ---
- - - o resto de Radiator Springs os observa embarcar em um avião. Gritos
vermelhos.
- NO JATO, MAIS TARDE. McQueen e Mater são os únicos acordados,
assistindo a um game show japonês insano.
- JAPÃO À NOITE. Uma elegante paisagem urbana de Tóquio com néon, glamour,
outdoors, máquinas de venda automática e arranha-céus de alta tecnologia.
- DENTRO DE UMA LOJA DE LEMBRANÇAS carregada de brinquedos McQueen:
Mater e McQueen entram. Um turista vê McQueen e desmaia.
- UM TEATRO KABUKI. A equipe McQueen assiste a uma dança metódica.
Mater, vestido com maquiagem Kabuki, chega. Ele parece louco.
- UMA PARTIDA DE SUMO - Dois CARROS SUZUKI SAMURAI lutam por uma
vaga de estacionamento. Mater, agora em seu elemento, felicidades.
A MONTAGEM TERMINA com esta nota alta enquanto CORTAMOS PARA ---
EXT. MUSEU - TÓQUIO - NOITE
- - - - TEAM MCQUEEN, enquanto enrolam o tapete vermelho. A imprensa é mantida
afastada por trás de cordas. Os logotipos WORLD GRAND PRIX e ALLINOL estão
estrategicamente posicionados para máxima exposição na imprensa. RACERS são
entrevistados pela imprensa atrás das cordas do tapete vermelho.
INT. MUSEU DE TÓQUIO - NOITE
A equipe McQueen entra por um patamar no segundo andar com vista
para uma enorme festa interna em um museu convertido. Ao descerem a
rampa em direção à festa, eles ficam impressionados.
LUIGI
Guido, olha! Ferraris e pneus! Vamos!
McQueen
(impressionado)
Ei, olhe isso. Ok, agora Mater, lembre-se:
melhor comportamento.
MATÉRIA
Você conseguiu, amigo. Ei, o que é
isso?
Ele vê alguma coisa e se afasta.
McQueen
Mater!
LEWIS HAMILTON
Ei, McQueen, aqui!
São os companheiros pilotos JEFF GORVETTE e LEWIS HAMILTON. McQueen agora
não tem escolha a não ser deixar Mater ir.
McQueen
Olá, Jeff. Luís!
CORTE PARA:
MATER enquanto ele se aproxima de um JARDIM DE ROCHAS FECHADO DE VIDRO,
onde um pequeno RAKES balança com precisão. Ele bate no vidro com o gancho.
MATÉRIA
Ei! Você se saiu bem! Você pegou todas as
folhas!
As pessoas se voltam com o barulho que ele está fazendo.
CORTE PARA:
MCQUEEN, JEFF e LEWIS.
JEFF GORVETTE
Confira aquele caminhão de reboque.
LEWIS HAMILTON
Eu me pergunto com quem esse cara está?
McQueen
Vocês podem me dar licença só por um
segundo?
Ele passa para o lado de Mater e rapidamente o tira de vista.
McQueen
Mater, ouça. Isto não é Radiator Springs.
MATÉRIA
Você está percebendo isso? Rapaz, aquele
jet-lag realmente afetou você.
McQueen
Mater, olhe – as coisas são diferentes aqui. O
que significa que talvez você devesse agir de
maneira um pouco diferente também.
MATÉRIA
Diferente do que?
McQueen
Bem, apenas... me ajude aqui, amigo.
EU ---
MATÉRIA
Você precisa de ajuda? Droga, por que você
simplesmente não disse isso? É isso que um
caminhão de reboque faz. Ei, olhe lá, é o Sr.
São Francisco!
FRANCESCO está visível do outro lado da sala, em cortejo.
MATÉRIA
Eu vou te apresentar.
McQueen
Mater, não.
MATÉRIA
(já a caminho) Olhe para mim -
já estou ajudando você!
Em FRANCESCO - MOMENTOS DEPOIS. Mater se aproxima, tonto.
MATÉRIA
Ei, Sr. São Francisco, gostaria que você
conhecesse ---
FRANCESCO
Relâmpago Mcqueen! Boa sorte.
McQueen
Prazer em conhecê-lo, Francesco.
FRANCESCO
Sim, prazer em conhecê-lo também. Você é
muito bonito. Não tão bom quanto eu
pensava, mas você é bom.
MATÉRIA
(para Francisco)
Com licença. Posso tirar uma foto com você?
FRANCESCO
Qualquer coisa pelo amigo do McQueen.
Enquanto Mater posa para uma foto com Francesco:
MATÉRIA
A senhorita Sally vai pirar quando vir isso.
Ela é um relâmpago
Namorada de McQueen.
FRANCESCO
Ahhh.
MATÉRIA
Ela é uma grande fã sua.
FRANCESCO
Ei, ela tem bom gosto.
McQueen
Mater é propenso ao exagero. Eu não
diria que ela é uma “grande” fã.
MATÉRIA
Você tem razão. Ela é uma grande fã. Ela fala
sem parar sobre suas rodas abertas aqui.
McQueen
Mencionar isso uma vez não se qualifica como
"continuar e continuar".
FRANCESCO
Francesco está familiarizado com esta reação
a Francesco. As mulheres respeitam um
carro que não tem nada a esconder.
McQueen
Sim, ah...
FRANCESCO
Vamos fazer um brinde.
McQueen não gosta do rumo que isso vai dar, cobre.
McQueen
Vamos.
FRANCESCO
(levantando uma bebida)
Dedico a minha vitória de amanhã... à
senhorita Sally.
McQueen
Oh, desculpe. Já dediquei MINHA vitória de
amanhã a ela. Então, se nós dois fizermos
isso, não será tão especial. Além disso, não
bebo.
MATÉRIA
Vou pegar um para você. Você se importa se eu
me emprestar alguns dólares para uma daquelas
bebidas?
McQueen
(poderia matá-lo)
Eles são gratuitos, Mater.
MATÉRIA
Livre? Bem, droga, o que estou fazendo
aqui?
Mater fecha.
McQueen
Eu provavelmente deveria ficar de olho nele.
Vejo você na corrida.
McQueen começa a sair.
FRANCESCO
Sim, você verá Francesco. Mas não assim.
Francesco faz um 180, então sua traseira agora enfrenta McQueen.
FRANCESCO
Você o verá assim, enquanto ele se afasta
de você.
Francesco usa um adesivo que diz “Ciao, McQueen!”
McQueen
Que bonitinho. Então você fez um
daqueles para todos os pilotos?
FRANCESCO
Não.
McQueen
OK.
Ele rola.
McQueen
Ele vai levar uma surra amanhã.
INT. FESTA - MOMENTOS DEPOIS
Luzes acariciam o palco principal onde uma multidão se formou.
VOZ
Senhoras e senhores... Sir Miles Axlerod!
MILES AXLEROD passa por uma fonte infinita e aparece.
MILHAS AXLEROD
É uma honra apresentar a vocês os
competidores do primeiro Grande Prêmio
Mundial. Do Brasil. Número oito...
EM FINN MCMISSILE. Ele surge das sombras, mantendo uma distância
cuidadosa do palco. Ele zera seu olhar ---
- - - AS CÂMERAS DE TV DO GRANDE PRÊMIO MUNDIAL que rodam,
captando o discurso de Miles Axlerod para publicidade e posteridade.
O COMPUTADOR DE BORDO de Finn ANALISA cada um, comparando com as
fotos que o vimos tirar na plataforma de petróleo. Cada um “NÃO É UMA
CORRESPONDÊNCIA”. Sua visão é subitamente interrompida por UM BELO
CARRO ESPORTIVO. Ela se aproxima de Finn. Conheça HOLLEY SHIFTWELL.
HOLLEY
Um Volkswagen Karmann Ghia não tem
radiador.
FINAL
Isso porque é refrigerado a ar.
HOLLEY
Sou o agente Shiftwell, Holley Shiftwell, da
estação de Tóquio. Tenho uma mensagem de
Londres.
FINAL
(ruidosamente)
mezanino!
Ele a leva para um elevador. As portas se fecham para eles.
NO ELEVADOR, SUBINDO.
Aqui não.
Você deve experimentar os canapés no
FINAL
Então os rapazes do laboratório analisaram a
foto que enviei? O que eles aprenderam sobre
a câmera?
HOLLEY
Parece ser uma câmera de televisão padrão.
Eles disseram que se você pudesse tirar fotos
mais próximas da próxima vez, seria ótimo.
FINAL
Essefoi a mensagem de Londres?
HOLLEY
Ah, não, não. Não senhor. Hum, as
plataformas de petróleo em que você
estava? Acontece que eles estão na maior
reserva de petróleo do mundo.
FINAL
Como é que perdemos isso?
HOLLEY
Eles estavam mexendo nos satélites de todo
mundo. Na verdade, os americanos
descobriram isso pouco antes de você. Eles
colocaram um agente naquela plataforma,
bem protegido. Ele conseguiu tirar uma foto
do carro que comanda toda a operação.
As portas se abrem e eles saem para o Mezanino.
FINAL
Quem é esse? Alguém já viu a foto?
HOLLEY
Não, ainda não. O americano está aqui esta
noite para passar isso para você. Ele avisará
você quando estiver pronto.
FINAL
Bom ---
Finn de repente PÁRA.
FINAL
Oh não.
O Professor Zundapp está visível abaixo deles. Ele fala com alguns Pacers e
Gremlins. Finn rapidamente recua para as sombras. Holley segue o exemplo.
HOLLEY
O que é?
FINAL
Mudança de planos. Você vai conhecer o
americano.
HOLLEY
O que, eu?
FINAL
Aqueles bandidos estavam na plataforma de
petróleo. Se me virem, toda a missão estará
comprometida.
HOLLEY
Não não. Eu sou técnico, você vê. Estou no
Diagnóstico. Não sou um agente de campo.
FINAL
Você é agora.
CORTE PARA:
MATER enquanto pega uma bebida, continua se movendo.
MATÉRIA
Vou levar um deles.
Ele o pega e joga no fundo, onde agora vemos uma grande variedade de
bebidas equilibradas.
MATÉRIA
Nunca se sabe por qual McQueen terá
desejo.
Ele se aproxima de um sushi bar.
MATÉRIA
Ei, o que você tem aqui de graça? Que tal
aquele sorvete de pistache?
Ele se refere ao wasabi, é claro.
CHEFE DE SUSHI
Não não. Wasabi.
MATÉRIA
Oh, o mesmo, o mesmo. O que se passa
contigo? Isso parece delicioso.
O chef começa a separar um pequeno furo para Mater.
MATÉRIA
Ah, um pouco mais, por favor. É
grátis, certo?
(o chef acrescenta mais)
Deixe vir. Um pouco mais. Vamos, vamos, é
grátis! Você está chegando lá... Colher!
O chef cede. Pega uma bola do tamanho de uma bola de beisebol.
MATÉRIA
Ai está. Agora ISSO é uma bola de sorvete.
CHEFE DE SUSHI
(em japonês, legendas) Minhas
condolências.
CORTE PARA:
MILES AXLEROD - Ele está quase terminando suas introduções.
MILHAS AXLEROD
. . . e agora, nosso último concorrente ---
Número 95, Relâmpago McQueen!
MCQUEEN se aproxima do microfone e pisca os faróis.
McQueen
Muito obrigado por nos receber, Sir Axlerod.
Estou realmente ansioso para correr. Isto é
ótimo
oportunidade.
MILHAS AXLEROD
Ah, o prazer é todo nosso, Lightning. Você e
sua equipe trazem excelência e
profissionalismo para esta competição.
Como se fosse uma deixa, Mater chega com um grito agudo de dor. Todos
se viram enquanto ele avança de cabeça em direção ao palco, indo direto
para aquela FONTE.
MATÉRIA
Alguém me traga água!
Ele bebe água da fonte como um gato diabético.
MATÉRIA
(batendo água)
Doce alívio...
Miles Axlerod fica chocado. A multidão não consegue acreditar.
Francesco gargalha. Mater, agora saciado, se aproxima do microfone.
MATÉRIA
(para a multidão)
Faça o que fizer, não coma o sorvete de
pistache grátis. Já virou!
McQueen
Senhor Axlerod, posso explicar. Este é o
Mater.
MILHAS AXLEROD
Eu o conheço. Este é o cara que ligou para o
programa de televisão.
(para Mate)
Você é quem eu tenho que agradecer.
MATÉRIA
Não, obrigado. Esta viagem tem sido
incrível.
MILHAS AXLEROD
(para McQueen)
Ele está um pouco animado, não está?
INCLINAR PARA BAIXO para revelar uma poça de óleo abaixo de Mater.
McQueen
Mater!
MATÉRIA
Mas espere, eu... ah, droga.
McQueen rapidamente puxa Mater para o lado, fora do alcance da voz de
Miles Axlerod e dos outros. McQueen está fora de si.
McQueen
Mater, você tem que se controlar. Você
está fazendo uma cena.
MATÉRIA
Mas eu nunca vazo óleo. Nunca.
McQueen
Vá cuidar de você agora mesmo.
Mater vai embora.
NO MATER - MOMENTOS DEPOIS
Ele dirige pela festa, frenético.
MATÉRIA
Passando! Com licença, estou vazando óleo.
Onde é o banheiro? Obrigado. Eu tenho que
ir!
Alguém aponta para Mater por um corredor. Ele vira a esquina ---
- - - e PÁRA. Encontra-se diante de DUAS PORTAS DE BANHEIRO, nenhuma das
quais indica claramente MASCULINO ou FEMININO.
MATÉRIA
(confuso)
O que...
Mater escolhe um e entra. Um SHRIEK é ouvido e Mater sai correndo.
MATÉRIA
Desculpe, senhoras!
Ele segue para a outra porta ---
CORTE PARA:
INT. QUARTO MASCULINO - NOITE
Mater entra, ainda 'segurando' como uma criança.
MATÉRIA
Eu nunca vazo, nunca vazo, nunca vazo...
Ele vê alguém saindo de uma barraca. Ele entra.
NA BANCA – Mater entra, olha para cima.
MATÉRIA
Uau...
A barraca é um aparelho complicado com botões e luzes. Japonês de alta
tecnologia. De repente, ele agarra MATER e o levanta como se ele fosse trocar
o óleo.
MATÉRIA
O que diabos---
Uma CARICATURA de desenho animado em estilo japonês aparece em um
MONITOR de TV, seguida de imagens de cachoeiras e rios.
MATÉRIA
(rindo)
Ei, isso faz cócegas.
A caricatura começa a falar em japonês. De repente, a água dispara sob o
chassi de Mater, arrepiando-o. Ele enlouquece.
FORA DA BANCA - Com os gritos de Mater audíveis vemos um GREMLIN
entrar, furtivo. De repente, inexplicavelmente, seu corpo se quebra como
um ovo, revelando um MUSCLE CAR AMERICANO embaixo. Os pedaços do
Gremlin desaparecem sob ele, claramente seu disfarce. Este é ROD REDLINE
- Agente Americano.
HASTE VERMELHA
Ok, McMíssil. Estou aqui. É hora da
queda.
INT. FESTA - MESMO
HOLLEY, rola sozinha. Nervoso. DING! Seu monitor retrovisor ganha vida.
HOLLEY (NO RÁDIO)
O americano activou o seu farol de
localização.
FINN (NO RÁDIO)
Entendido. Mova-se.
INT. BANHEIRO - MESMO
Rod Redline, esperando em uma pia, sente uma presença atrás dele.
GREM e ACER entraram, hesitem brevemente ao ver Rod Redline.
Rod Redline, cuidadoso, tira uma arma do pneu. Ele é subitamente
CARREGADO pelos AMCs --- Rod GIRA e dá um tiro, mas é BATIDO COM A
CABEÇA PRIMEIRO. Uma luta acirrada começa ---
NA BANCA - Mater, ainda PRESO, agora está sendo LAVADO como se estivesse
em um lava-rápido. Ele está indefeso.
FORA DA BANCA - Rod está sendo pulverizado. Justamente quando ele se
afasta de um carro, o outro assume o controle.
NA ESTALAGEM - Mater é misericordiosamente libertado, mas quando
ele desiste ---
- - - Rod Redline é JOGADO NA PORTA DO STALL DE MATER, esmagando-a e
enviando Mater ---
- - - DE VOLTA PARA AS EMBREAGENS do banheiro insano.
INT. FESTA - MESMO
Holley isola a localização do farol de rastreamento no grupo.
HOLLEY
Ah, você só pode estar brincando.
FINAL
Qual é o problema, Shiftwell?
HOLLEY
Ele está no banheiro.
FINAL
Então entre!
HOLLEY
Não posso simplesmente entrar no banheiro masculino.
FINAL
O tempo é essencial, Shiftwell.
INT. BANHEIRO - FORA DA BANCA
Rod Redline está em péssimo estado. Ele recua, revelando uma expressão de
preocupação. Ele está com problemas aqui.
ACER queima borracha, pronta para acabar com ele. Assim que ele muda para
DRIVE ---
- - - A PORTA DO STALL DO MATER SE ABRE, derrubando ACER. Mater salta,
cara a cara com GREM.
MATÉRIA
(sem fôlego)
Faça o que fizer, eu não entraria lá.
A porta se fecha, revelando o Acer pulverizado.
MATÉRIA
Um Gremlin e um Pacer!
Rod Redline, agora atrás de Mater e sentindo uma oportunidade aqui,
rapidamente produz UM PEQUENO DISPOSITIVO.
MATÉRIA
(para Grem e Acer) Sem ofender suas
marcas e modelos, mas vocês desabaram
mais do que minha prima Betsy depois que
ela foi abandonada no ---
Rod Redline, secretamente conecta o dispositivo ao material rodante de
Mater.
MATÉRIA
(como ele está arrepiado)
- - - altar!
Ele se vira e vê Rod Redline pela primeira vez.
MATÉRIA
Você está bem?
HASTE VERMELHA
Estou bem.
GREM
Ei. Caminhão de reboque.
Mater se volta para Grem e Acer.
GREM
Gostaríamos de abordar nossos assuntos
privados aqui, se não se importa.
MATÉRIA
Oh sim. Não me deixe atrapalhar seus
“negócios privados”. Oh! Um pequeno
conselho: quando você ouvir a risada dela e
ver aquela cachoeira, é melhor apertar o
botão verde.
GREM
Obrigado.
MATÉRIA
É para ajustar a temperatura.
ACER
Entendi.
MATÉRIA
Lembre-se que está em Celsius, não em
Fahrenheit.
GREM E ACER
Saia daqui!
MATÉRIA
Tudo bem então.
Mater sai, deixando Rod Redline para Grem e Acer, agora ainda mais
irritados.
EXT. BANHEIRO - MOMENTOS DEPOIS
Holley chega na porta. Ela respira fundo, está prestes a entrar quando Mater
SAI.
MATÉRIA
Com licença, senhora.
Ele passa por ela, expelindo alguns gases no processo. O rastreamento
retrovisor de Holley confirma que o dispositivo está com ele.
MATÉRIA
(para ele mesmo)
Sorvete de pistache Dadgum.
HOLLEY (NO RÁDIO)
Este não pode ser ele.
FINN (NO RÁDIO)
Ele é americano?
MATÉRIA
(saindo dirigindo, para si mesmo)
Cuidado, senhoras. Mater está pronto para
ficar descolado!
HOLLEY (NO RÁDIO)
Extremamente.
FINN (NO RÁDIO)
Então é ele.
Está acordado. Holley respira mais uma vez nervosamente, rapidamente
diminui a distância entre ela e Mater e o interrompe. Ele é forçado a PARAR.
HOLLEY
Olá.
MATÉRIA
Bem Olá.
HOLLEY
Um Volkswagen Karmann Ghia não tem
radiador.
MATÉRIA
Bem, é claro que não. Isso é porque é
refrigerado a ar!
HOLLEY
(aliviado)
Perfeito. Eu sou da estação de Tóquio do ---
MATÉRIA
Claro, os de Karmann Ghia não foram os
únicos. Além dos Fuscas, você tinha seus
Squarebacks Type-3, com motores de
panqueca...
HOLLEY
Sim. Tudo bem eu já entendi---
MATÉRIA
. . . E antes dos dois, há os ônibus Tipo 2 –
meu amigo Fillmore é um deles.
HOLLEY
Ouvir! Devíamos encontrar um lugar mais
privado.
MATÉRIA
Uh, caramba. Você não acha que isso é um
pouco, uh ---
HOLLEY
(energia nervosa)
Você tem razão. Impossível saber quais
áreas aqui estão comprometidas. Então,
quando posso ver você de novo?
MATÉRIA
Bem vamos ver. Amanhã estarei lá nas
corridas.
HOLLEY
Entendi. Nos encontraremos então.
INT. FESTA - MOMENTOS DEPOIS
Mater retorna para sua equipe, perdido em pensamentos.
McQueen
Aí está você. Onde você esteve?
MATÉRIA
O que é um encontro?
LUIGI
É como um encontro.
MATÉRIA
Um encontro?!
McQueen
Mater, o que está acontecendo?
MATÉRIA
Bem, o que está acontecendo é que tenho
um encontro amanhã.
Guido faz uma piada em italiano.
LUIGI
Guido não acredita em você.
MATÉRIA
Bem, acredite. Minha nova namorada acabou
de dizer isso. Ei, lá está ela.
Mater aponta Holley, que está ao alcance da voz.
MATÉRIA
(gritando)
Ei! Ei moça!
Holley, apanhado à vista de todos, PARTE.
MATÉRIA
Ate amanha!
Guido faz outra piada em italiano.
LUIGI
Guido ainda não acredita em você.
EXT. ESTALEIRO - AS DOCAS - NOITE DE TÓQUIO
Um cais industrial, fora da cidade propriamente dita.
INT. ESTALEIRO - NOITE
Rod Redline está pendurado em um ímã de carro. Ele foi espancado, agarrase à consciência.
GREM (OS)
Eu tenho que admitir ---
Grem, Acer e um bando de desordeiros de aparência desagradável olham
para Rod em meio a caixotes e contêineres.
GREM
- - - você nos enganou muito bem.
ACER
E não gostamos de ser enganados.
Rod Redline ri sozinho.
ACER
Ei, o que há de tão engraçado?
HASTE VERMELHA
Bem, você sabe, eu estava apenas usando
um disfarce. Vocês estão presos assim.
Isso não o ajuda. Eles o largam em uma esteira e o prendem. Um contêiner é
empurrado para frente e Rod é abastecido com gasolina da marca Allinol.
HASTE VERMELHA
Alinol? Obrigado, pessoal. Ouvi dizer que
essas coisas são boas para você.
PROFESSOR ZUNDAPP (OS)
Então você pensa.
O Professor emerge da escuridão, atrás de Rod.
PROFESSOR ZUNDAPP
Allinol por si só é bom para você.
Zundapp aperta um botão e a ESTEIRA faz as rodas de Rod girarem em alta
velocidade.
PROFESSOR ZUNDAPP
Mas após exame microscópico, descobri
que tem uma pequena fraqueza. Ao ser
atingido por um
pulso eletromagnético, torna-se
extremamente perigoso.
GREM
Sorriso ---
Grem empurra uma CÂMERA do Grande Prêmio Mundial - a mesma que
estava na caixa da torre de petróleo. Ele aponta para Rod Redline.
GREM
- - - para a câmera.
HASTE VERMELHA
Isso é tudo que você quer? Eu tenho um ato
completo.
PROFESSOR ZUNDAPP
Você ficou muito interessado nesta câmera
na plataforma de petróleo. Agora você
testemunhará o que isso realmente faz.
HASTE VERMELHA
O que quer que você diga, professor.
Acer empurra um MONITOR de TV em direção a Rod. Nele, imagens de
vigilância da festa. Claramente, eles o estavam observando e gravando
ali.
ACER
Você falou sobre muitos carros ontem à
noite. Qual é seu associado?
HASTE VERMELHA
Sua mãe. Ah, não, me desculpe. Foi sua
irmã. Você sabe, não consigo diferenciá-los
hoje em dia.
GREM
(teve o sufuciente)
Posso começar agora, professor?
PROFESSOR ZUNDAPP
Cinquenta por cento de poder.
(para Rod Redline)
Esta câmera é na verdade um emissor
de pulso eletromagnético.
ACER
(re: uma garota na TV) E ela? Você deu
para ela?
PROFESSOR ZUNDAPP
O Allinol agora está fervendo, expandindose dramaticamente, fazendo com que o
bloco do motor quebre sob o estresse,
forçando o óleo para dentro da câmara de
combustão.
O motor de Rod Redline começa a CRACK e QUEBRA.
ACER
(re: um cara na TV) E ele? Você fala
com ele?
HASTE VERMELHA
(para o professor Zundapp)
O que me importa? Posso substituir um
bloco de motor.
PROFESSOR ZUNDAPP
Você pode conseguir, mas após o impacto
total do pulso, infelizmente, não haverá nada
para substituir.
ACER
E ele? Ele tem isso?
O monitor revela MATER saindo do banheiro e andando pelo corredor.
Rod Redline, vendo isso, dá uma olhada dupla mais sutil do mundo. Nós o
pegamos, mas não há como mais alguém na sala ter ---
PROFESSOR ZUNDAPP
Esse é ele. Ele é o único.
GREM
Entendido, Professor Z.
HASTE VERMELHA
Não!
Enquanto Grem liga ainda MAIS a máquina, o Professor faz uma ligação.
PROFESSOR ZUNDAPP (AO TELEFONE)
Sim, senhor. Acreditamos que o infiltrado transmitiu
informações confidenciais
Informação.
(bater, ouvir)
Eu cuidarei disso antes que qualquer dano
possa ser causado.
O Professor desliga, vira-se para a sala.
PROFESSOR ZUNDAPP
O projeto ainda está dentro do cronograma.
Você encontrará este segundo agente ---
Zundapp coloca o poder da câmera no RED.
PROFESSOR ZUNDAPP
- - - e matá-lo.
No MONITOR - Com a imagem congelada de Mater na tela vemos Rod
EXPLODE no reflexo.
EXT. JAPÃO - DIA
No anúncio precedente da televisão do Japão:
BRENT MUSTANGBURGER (VO)
Japão. Terra do sol nascente. Onde a tradição
antiga encontra a tecnologia moderna. Bemvindo à corrida inaugural do Grande Prêmio
Mundial.
EM NOSSOS ANUNCIANTES conforme eles se apresentam:
BRENT MUSTANGBURGUER
Sou Brent Mustangburger, estou aqui com
as lendas do automobilismo Darrell Cartrip
e David Hobbscap. Nunca houve uma
competição como esta antes.
TIROS DOS POÇOS enquanto os pilotos abastecem.
BRENT MUSTANGBURGER (VO)
Primeiro, Allinol, fazendo sua estreia esta noite
como o combustível necessário para todos esses
grandes campeões.
(MAIS)
.
BRENT MUSTANGBURGER (VO) (CONT'D) Em
segundo lugar, o curso em si, e é diferente de tudo que já
vimos. David, como exatamente funciona essa
competição?
DAVID HOBBSCAP (VO)
Bem, Brent, todas essas três pistas de rua
são pistas de corrida clássicas.
ESBOÇOS DE TRÊS CURSOS DE CORRIDA são mostrados. Eles são
rotulados como Japão, Itália e Inglaterra e são diferentes em formato e
tamanho.
DAVID HOBBSCAP (VO)
Isso significa que os carros LMP e Fórmula
devem sair do mercado de forma
espetacular.
FOTOS DOS RACERS enquanto eles avançam pela pista, praticando.
DAVID HOBBSCAP (VO)
Espere por Francesco Bernoulli em
particular para liderar desde o início.
FOTOS DE Francesco, apresentadas em um encarte.
DAVID HOBBSCAP (VO)
E com uma série de reviravoltas
técnicas ao longo ---
MAIS FOTOS do curso, agora destacando as viradas tecnológicas.
DAVID HOBBSCAP (VO)
Carros GT e de turismo como o espanhol
Miguel Camino devem ganhar algum
terreno, mas duvido que seja o suficiente
para impedir Francesco de fugir totalmente.
DARRELL CARTRIP (VO)
Uau, agora segure sua potência. Você está
esquecendo o fator mais importante aqui.
Aquela seção inicial de pista de terra do
percurso! A sujeira deveria ser o grande
equalizador nesta corrida.
OS GRÁFICOS DOS CURSOS agora isolam um trecho após as primeiras curvas,
rotulando-o como "SEÇÕES DE SUJEIRA".
BRENT MUSTANGBURGER (VO) O
carro de rali francês Raoul ÇaRoule conta com
um grande impulso por lá.
DARRELL CARTRIP (VO)
E não se esqueça do Relâmpago McQueen!
Seu mentor, o Hudson Hornet, foi um dos
maiores pilotos de pista de terra de todos os
tempos. Na minha opinião, McQueen é o
melhor piloto desta competição.
DE VOLTA AO ESTÚDIO
DAVID HOBBSCAP
Sério, Darrell, acho que você precisa limpar o
para-brisa. Você claramente não está vendo
isso como realmente é: a corrida de
Francesco para perder.
EXT. LINHA DE PARTIDA - DIA
BRENT MUSTANGBURGER (VO) É
hora de descobrir. Os pilotos estão travando
no grid ---
Os motores aceleram enquanto todos se preparam para partir. Todos estão
com os olhos brilhantes e alertas, exceto McQueen, que encontramos no final
da grade. Ele FECHA os olhos.
McQueen
(para ele mesmo)
Velocidade. Eu sou rápido.
UMA RISADA OS McQueen abre os olhos. Francesco está ao lado dele no grid.
FRANCESCO
Realmente? Você é “velocidade”? Então
Francesco tem velocidade tripla.
(fecha os olhos)
Francisco. É. Velocidade tripla. Francesco
gosta disso, McQueen. Está realmente
colocando-o na zona!
McQueen
Ele éentãosendo derrotado hoje.
As luzes de partida diminuem de VERMELHO para AMARELO e para VERDE. A
corrida começa. Francesco rapidamente assume a liderança. Ele está se
afastando em segundos.
NO PIT ROW - RASTREAMOS enquanto os vários Chefes de Equipe em seus carrinhos
gritam ordens para seus pilotos. Terminamos com a Equipe McQueen. Não há chefe
de tripulação, apenas uma equipe de aparência sólida.
SARGE
Suas estatísticas de suspensão parecem boas.
LUIGI
A pressão dos pneus é excelente.
FILMORE
Ele tem bastante combustível.
MATÉRIA
E ele é incrível!
CORTE PARA:
A mesma visão de Mater, mas agora ATRAVÉS DE UM DISPLAY TELESCÓPICO.
Revele Finn e Holley observando do alto de um prédio comercial no centro da
cidade, atrás de um vidro refletivo.
HOLLEY
Por que ele está nos boxes? Ele está tão
exposto.
FINAL
É o disfarce dele. Um dos melhores que já vi
também. Veja o detalhe dessa ferrugem.
Deve ter custado uma fortuna a ele.
HOLLEY
Mas por que ele ainda não nos contatou?
FINAL
Provavelmente há calor nele. Ser
paciente.
HOLLEY
Certo, é claro. Ele nos sinalizará quando
puder.
FINAL
E então descobrimos quem está por trás de
tudo isso.
NA PISTA - VÁRIAS TIRAS DA CORRIDA por Tóquio enquanto Francesco
amplia sua liderança e McQueen tenta recuperar terreno.
NO POÇO DE MCQUEEN - Mater observa os monitores, os vê se
aproximando da seção de terra.
MATÉRIA
McQueen! É hora de fazer a sua jogada.
Saia e mostre a eles o que Doc lhe ensinou.
MCQUEEN (NO RÁDIO)
Dez quatro, Mater.
NA PISTA - Francesco bate na terra e perde todo o controle. Ele para, seus
pneus não ganham tração.
DAVID HOBBSCAP (VO)
Francesco é paralisado
bruscamente!
MCQUEEN aparece derrapando, virando à direita para virar à esquerda, passando
por Francesco, seguido por outros carros ---
BRENT MUSTANGBURGER (VO)
Relâmpago McQueen é o primeiro a tirar
vantagem. E assim mesmo, pessoal, a liderança
de Francesco foi deixada para trás.
McQueen
Bela decisão, Mater. Mantem!
McQueen agora lidera o grupo, saindo da terra e começando a relaxar.
DARRELL CARTRIP (VO)
Quem-hoo! Cara, McQueen parece mais feliz do
que um rollbar em um derby de demolição!
NA ESTRADA PAVIMENTADA NOVAMENTE - MOMENTOS DEPOIS
O campo de carros troveja em um túnel.
BRENT MUSTANGBURGER (VO)
Todos estão brigando por posição enquanto
voltamos ao asfalto.
Francesco chega ao topo da colina, em último lugar. Ele morde,
determinado, e então PERSEGUE.
BRENT MUSTANGBURGER (VO)
Francesco perdeu muito impulso na terra. Ele
tem muito trabalho pela frente se quiser voltar
a esta corrida.
VÁRIAS FOTOS DE TÓQUIO enquanto os pilotos se movem pela Rainbow
Bridge. Aos poucos, Francesco segue em direção à frente, em direção ao
Relâmpago McQueen enquanto CORTAMOS PARA ---
- - - UM TELHADO E UMA VISTA ATRAVÉS DA LENTE DA CÂMERA WGP. Grem e
Acer estão comandando este. Eles se concentram nos pilotos conforme eles se
aproximam.
PROFESSOR ZUNDAPP (NO RÁDIO)
Chegou a hora.
GREM
Entendido.
NA PISTA - Um piloto (Miguel Camino) de repente PLUME DE FUMO e
derrapa.
DARRELL CARTRIP (VO)
Oh! Miguel Camino explodiu um
motor!
BRENT MUSTANGBURGER (VO)
Muito incomum, Darrell. Ele tem sido tão
consistente o ano todo.
Camino rapidamente para, passando pelo poço de McQueen onde Mater
é visível.
NO GREM E ACER, observando de cima.
GREM
Você deve estar brincando comigo.
ACER
O que é?
GREM
É aquele caminhão de reboque do
banheiro.
ACER
Aquele do banheiro?
GREM
Sim, aquele para quem o agente
americano passou o dispositivo.
ACER
E ele?
GREM
E ele? Ele está nos boxes!
ACER
Não por muito tempo.
Acer sai, com propósito.
EM FINN E HOLLEY, ainda no esconderijo do escritório. O computador de
bordo de Holley emite um ALERTA.
HOLLEY
Aguentar. Acho que tenho
alguma coisa.
FINAL
O que é?
HOLLEY
O Pacer da festa de ontem à noite.
Ela avistou Acer, avançando rapidamente.
HOLLEY
Referência cruzada com as fotos das torres
de petróleo... Sim. Seus números VIN
correspondem.
FINAL
Alguém com ele? Ele não estará sozinho.
HOLLEY
Realização de análises no alvo.
O computador descobre que cada vez mais Pacers e Gremlins bandidos estão
na multidão.
HOLLEY
Ele não é o único aqui. Três... cinco... eles
estão por toda parte. E eles estão todos se
aproximando... ah, não.
Nós PAN OVER para ver que é MATER.
HOLLEY
Finn? Finn, onde você está?
Ela se vira. Ele se foi, deixando apenas uma janela aberta.
FINN (NO RÁDIO)
Tire-o dos buracos agora!
NO POÇO DE MCQUEEN. Um carro WHIPS BY OS
MATÉRIA
Uau! Alguns deles são muito barulhentos.
HOLLEY (no rádio de MATER) Você
pode me ouvir? Sobre.
MATÉRIA
Uh o quê?
HOLLEY (NO RÁDIO DE MATER)
Saia do buraco agora. Você me ouve?
Mater percebe que essa garota de alguma forma invadiu seu rádio.
MATER (NO RÁDIO)
Oi te conheço. Você é aquela garota da
festa de ontem à noite. Você quer marcar
nosso encontro agora?
NA PISTA - McQueen elimina Francesco, mantém sua pequena vantagem,
mas por pouco.
McQueen
Pessoal, um pouco de conversa demais.
Vamos manter essa linha clara.
ESTRONDO! Um piloto atrás de McQueen de repente expele fumaça preta e
derrapa fora de controle.
NO GREM – rindo. Isso foi claramente obra dele.
NO POÇO DE MCQUEEN - MESMO
HOLLEY (NA RÁDIO DE MATER)
Não há tempo para brincadeiras. Você tem
que sair dos buracos.
MATÉRIA
Haverá TV a cabo onde você está para que
eu possa assistir o resto da corrida?
ON HOLLEY - Assistindo do prédio do centro da cidade.
HOLLEY (NO RÁDIO)
Seu tempo está acabando!
FINN (NO RÁDIO)
Eles estão vindo, Shiftwell.
HOLLEY (NO RÁDIO)
Sim eu sei.
FINN (NO RÁDIO)
Tire-o daí.
HOLLEY
(para Finn)
Estou tentando.
(para Mate)
Saia agora!
CORTAMOS PARA ---
- - - MATÉRIA. Ele cede e sai do poço.
MATÉRIA
Bem, tudo bem, mas geralmente gosto de
fazer um detalhamento adequado antes de
encontrar uma amiga.
Ele se move em direção à PORTA do POÇO dos fundos e está prestes a abri-la.
FORA DOS POÇOS - ACER e outro Pacer se aproximam da porta do poço de
McQueen do outro lado. Pronto para atacar. As portas se abrem, revelando ---
- - - Finn, segurando um extintor de incêndio.
ACER
Finn McMíssil? Mas você está morto!
FINAL
Então isso não deveria doer nada.
Ele esvazia o extintor nos olhos deles e passa em alta velocidade. Eles tentam
seguir, mas ficam cegos. Um deles bate direto em um policial.
ON FINN - Já em movimento, por uma rua lateral.
FINAL
Senhorita Shiftwell?
ON HOLLEY - Rastreando tudo em um mapa de grade. Mater se parece com
Pac Man, serpenteando pelas ruas enquanto bandidos se aproximam dele.
HOLLEY
Eu o peguei nos becos a leste das garagens.
Vários agressores estão se aproximando
rapidamente.
FINN (NO RÁDIO)
Mantenha-o em movimento. Estou a caminho.
ON MATER - Ele vira uma esquina e vê uma floricultura.
MATÉRIA
Ei, nova amiga? Você gosta de flores?
NA PISTA - McQueen, ao ouvir isso, fica surpreso.
McQueen
O que?
ON MATER – Desaceleração na floricultura.
HOLLEY (NO RÁDIO)
Não! Não entre em lugar nenhum. Apenas
continue andando.
MATÉRIA
Fique do lado de fora. Peguei vocês.
NA PISTA
McQueen
Fora?
McQueen sai, permitindo que Francesco passe!
FRANCESCO
Grazie e cheguederci!
DARRELL CARTRIP (VO)
Não posso acreditar no que acabei de ver,
Brent. Esse foi um movimento estúpido.
Você não abre o interior assim!
NOS BECOS - Conforme Mater segue em frente, ele é seguido por
Pacers e Gremlins. De repente ---
- - - CABOS chicoteiam na frente deles, parando máquinas de venda automática
de flores e deixando os donos da loja em frenesi. Eles direcionam sua atenção
para os AMCs, que tentam explicar.
NO FINN, admirando seu trabalho enquanto ele aparece. Assim que ele se
vira para sair, ele é BROADSIDED e empurrado PARA UM BECO ESCURO.
NO BECO - Finn é cercado por dois Pacers e empurrado em direção a ---
- - - ACER, que agora possui um LANÇA-CHAMAS.
ACER
Desta vez vou garantir que você continue
morto.
Ele atinge a chama. UUUUUUUUUUUU!!
EM OUTRA RUA - Mater segue em frente, ainda procurando por Holley.
Assim que ele passa pela entrada do beco onde Finn encara a morte:
HOLLEY (NO RÁDIO)
Você está indo de maneira brilhante. Agora é só
manter o foco.
MATÉRIA
O que é isso? Você quer que eu vá em
direção a essa confusão?
Mater entra no beco.
HOLLEY (NO RÁDIO)
Não! Não desça essa rua!
NO BECO - Finn, agora quase completamente empurrado para dentro do
lança-chamas, salta no ar. Ele REVIDA, usando as rodas, o eixo e, na verdade,
toda a estrutura do carro como se fosse humano, chutando, jogando e
atirando em seus inimigos.
Mater testemunha tudo.
MATÉRIA
Uau! Uma demonstração de caratê ao vivo!
NA PISTA - McQueen, agora tentando recuperar o atraso novamente, faz uma careta.
McQueen
Pare com isso, Mater. Basta assinar.
NO BECO - Finn acaba com os AMCs disparando uma bala em uma linha
principal de gás, causando uma EXPLOSÃO que joga Acer pelo ar, onde ele cai
em uma PLACA DE UMA LOJA DE NOODLE.
NA PISTA - O fim da corrida está próximo ---
BRENT MUSTANGBURGER (VO) Eles estão
de pára-choque com pára-choque enquanto se
aproximam da linha de chegada!
O carro de Fórmula chega primeiro.
BRENT MUSTANGBURGER (VO)
Francesco é o vencedor, o número dois de
McQueen!
NO BECO - Finn respira fundo e examina seus danos.
MATÉRIA
Isso foi legal! Ei, posso pegar seu autógrafo?
.
Mater se aproxima quando uma MASSA DE FÃS DE CORRIDA irrompe pela porta,
bloqueando momentaneamente a visão de Mater sobre Finn. Assim que os fãs
passaram, Finn desapareceu.
MATÉRIA
Ei, onde ele foi?
HOLLEY (NO RÁDIO)
Nosso encontro foi comprometido.
Mantenha o dispositivo seguro.
Manteremos contato.
MATÉRIA
Papai, eu perdi nosso encontro?
EXT. ESTÁGIO DE IMPRENSA - MAIS TARDE
Conferência de imprensa pós-corrida. Francesco é o centro das atenções.
DARRELL CARTRIP
Francisco, aqui! Ei, qual foi sua estratégia
hoje?
FRANCESCO
Estratégia?Francesco não precisa de
estratégia, é muito simples. Você começa a
corrida, espera o Relâmpago McQueen
engasgar, passa por ele e vence. Francesco
sempre vence. É aborrecido.
McQueen, esperando nos bastidores, revira os olhos. De repente ele
percebe algo OS
Ponto de vista de McQueen - É MATER, aparecendo de uma rua lateral,
caminhando em direção aos boxes, alheio à coletiva de imprensa.
DARRELL CARTRIP
(para Francisco)
Eu tenho que te contar, cara. Você esteve em
apuros por um tempo. Aquela seção de pista
de terra fez você rastejar!
Enquanto McQueen foge ---
FRANCESCO
Para realmente destruir o sonho de alguém, você
deve primeiro aumentar muito suas esperanças.
NA GARAGEM DE MCQUEEN - Mater procura por todos enquanto McQueen se
aproxima.
McQueen
Matéria.
MATÉRIA
Olá McQueen! O que aconteceu? A corrida
acabou? Você ganhou, certo?
McQueen
Mater, por que você estava gritando comigo
enquanto eu corria?
MATÉRIA
Gritando? Oh, você pensou... isso é
engraçado. Não, veja, isso é porque vi esses
dois caras fazendo algum tipo de
apresentação de caratê na rua. Foi uma
loucura. Um deles até tinha um lançachamas ---
McQueen
Um lança-chamas? O que você está falando?
Eu não entendo. Onde você estava?
MATÉRIA
Indo conhecer meu par.
McQueen
Seu encontro?
MATÉRIA
Ela começou a falar comigo como uma voz
na minha cabeça, me dizendo para onde ir
---
McQueen
O que?
MATÉRIA
Espere um minuto - eu não estraguei você,
não é?
McQueen
Perdi a corrida por sua causa!
MATÉRIA
Bem, me desculpe. Eu não quis dizer ---
McQueen
Uma namorada imaginária, lança-chamas. É
exatamente por isso que não levo você
nessas coisas.
MATÉRIA
Talvez se eu, não sei, conversasse com
alguém e explicasse o que
aconteceu eu poderia ajudar.
McQueen
Eu não preciso de sua ajuda. Eu não
quero sua ajuda.
IMPRENSA (SO)
Ei, lá está ele!!
A imprensa encontra McQueen e ataca-o. Mater é empurrado para
trás enquanto as perguntas voam novamente.
IMPRENSA
- McQueen, você estava com tudo na bolsa!
- Sim, o que aconteceu?
McQueen
Eu cometi um erro. Mas posso garantir que
isso não acontecerá novamente.
Na Matéria. Ele aceita isso mal.
McQueen
Olha, pessoal. Sabemos qual é o problema e
já cuidamos dele.
ESMAGUE PARA:
SOBRE FOTOGRAFIAS DE FRANCESCO e vários outros destaques:
BRENT MUSTANGBURGUER
Relâmpago McQueen perde na última volta
para Francesco Bernoulli na primeira corrida
do Grande Prêmio Mundial e três, contem,
três carros pegaram fogo, levando alguns a
sugerir que seu combustível, Allinol, pode ser
o culpado.
FOTOGRAFIAS DE MILES AXLEROD, falando para uma imprensa agressiva. Ele
deve GRITAR para a imprensa.
MILHAS AXLEROD
Allinol é seguro! Combustível alternativo é
seguro! Não há como meu combustível ter
feito esses carros pegarem fogo!
NO ESTÚDIO DE TV - Darrell, Brent e David conversam para a câmera.
DARRELL CARTRIP
Bem, o júri ainda pode decidir se Allinol
causou esses acidentes, mas uma coisa é
certa: Relâmpago McQueen estragou esta
corrida.
Em uma IMAGEM CONGELADA de McQueen cruzando a linha de chegada,
uma expressão de severa consternação em seu rosto ---
BRENT MUSTANGBURGUER
A equipe McQueen não pode estar feliz
agora.
- - - CORTE DA PARTIDA PARA ---
INT. AEROPORTO - JAPÃO - DIA
- - - CARA SORRISO de McQueen, em um pôster do Time McQueen.
REVERSE para revelar Mater olhando para ele, infelizmente. Ele segue em frente,
passando (mas sem perceber) ---
- - - GREM e ACER.
NA VERIFICAÇÃO DE SEGURANÇA - MOMENTOS DEPOIS. Os carros tiram os
pneus, passam pelo detector de metais. Mater espera na fila. Um CARRO DE
SEGURANÇA se aproxima de Mater.
CARRO DE SEGURANÇA
(em japonês e inglês) Venha
comigo, por favor, senhor.
MATÉRIA
Mas vou perder meu avião.
NO SALA DO ALMIRAL - MOMENTOS DEPOIS. O carro de segurança leva
Mater para dentro.
CARRO DE SEGURANÇA
Por aqui.
À medida que eles passam por nós, o carro de segurança deixa cair
secretamente um ROLAMENTO DE ESFERAS que rola para um canto. O
rolamento de esferas então brota PERNAS MECÂNICAS, tripé e SAI,
revelando-se uma pequena CÂMERA.
NA SALA PRINCIPAL - SALA DO ADMIRAL - CONTÍNUO
Mater segue o carro de segurança, nervoso.
MATÉRIA
Cachorra. Isto é sobre o meu refrão, não é?
Eu sei que deveria ter verificado, mas não
posso, olhe - está preso a mim.
ZWAPPPPPP!! O carro de segurança de repente se DECLOA, revelando
ser Finn McMissile!
MATÉRIA
Oi te conheço. Você é aquele cara da
demonstração de caratê.
FINAL
Nunca me apresentei adequadamente. Finn
McMíssil. Britânico
Inteligência.
MATÉRIA
Reboque Mater. Inteligência média.
FINAL
Quem está com você? FBI, CIA?
MATÉRIA
Digamos apenas que sou afiliado AAA.
Você sabe, eu sei um pouco de caratê. Não
quero me gabar nem nada, mas tenho
uma faixa preta.
BIP! Os alarmes retrovisores de Finn. Sua câmera capturou Grem e Acer. Eles
acabaram de entrar no salão e estão logo ali na esquina.
MATÉRIA
Ei, você quer ver alguns movimentos que eu
inventei?
FINAL
Você está sendo seguido.
Finn rapidamente se vira e atira um pequeno BESOURO DE CORTE DE VIDRO
na janela. Enquanto Mater fala, alheio, o besouro abre um buraco redondo.
MATÉRIA
Este primeiro posso enfiar a mão no capô
de um carro, retirar a bateria e mostrar a
ele antes que ele pare. Eu chamo isso de
“O que eu
acidentalmente fiz com meu amigo Luigi uma
vez.”
Mater faz seus melhores (piores) movimentos de caratê enquanto Acer e Grem
dobram a esquina.
GREM
Ali está ele!
O vidro cai, deixando um buraco do tamanho de um carro.
MATÉRIA
(olha o relógio)
Olha, eu provavelmente deveria ir. Estou
prestes a perder meu voo.
FINAL
Não se preocupe.
Finn GANCHA Mater por trás. Ele o puxa para frente ---
FINAL
Eu cuidei disso. Espere.
- - - e SALTOSFORA A JANELA!
EXT. TARMAC - AEROPORTO - JAPÃO
Finn puxa Mater com força para a pista, rebocando-o para longe do
terminal.
MATÉRIA
Este é um serviço de primeira classe. Você
nem precisa passar pelo terminal.
ACER e GREM aparecem, perseguindo-os. Mater, que está voltado para
trás enquanto é puxado, fica de frente para eles. Eles estão a cerca de
cem metros atrás.
MATÉRIA
(para Finn)
Seus parceiros de caratê estão de volta aqui.
Eles meio que parecem estar tentando
alcançá-los!
FINAL
Segue em frente. Faça o que fizer, não
pare.
Finn derrapa, chicoteando Mater em 180º, de modo que Mater agora está
rebocando Finn.
Grem produz um ROCKET e alinha Finn como seu alvo.
Finn, sem hesitação, dispara um MINI ROLLING-JACK. O macaco se dirige em
direção a Grem, ancora-se sob sua estrutura e o vira como uma tartaruga, mas
não antes de Grem disparar o foguete ---
O FOGUETE - voa em direção a Mater e Finn.
FINN mira e lança um MÍSSIL de volta.
O FOGUETE E O MÍSSIL COLIDEM NO AR, EXPLODEM.
MATÉRIA
(só ouvindo isso)
Está tudo bem aí atrás?
SIDDELEY (OS)
Finn, é o Sid. Estou em abordagem.
Um JATO GULFSTREAM voa acima de nós. Este é SIDDELEY.
FINAL
Entendido.
Mater olha para cima: ACER surge à frente, arrastando uma longa fila de
carrinhos de bagagem no caminho de Mater, tentando criar um acidente.
MATÉRIA
(para Finn)
Você se lembra daquela coisa toda sobre eu
não parar, aconteça o que acontecer?
Assim como parece terrível --- RATATATATATATAT!!! SIDDELEY desce como um
falcão, dispara balas e explode os carrinhos de bagagem. Mater e Finn
passaram por eles, a bagagem agora chovendo de cima.
MATÉRIA
Eu sabia que deveria ter feito bagagem de mão!
FINAL
(para Siddeley)
Obrigado, meu velho!
Siddeley pousa com força na pista à frente deles. Sem tempo para parar, ele
abre as costas, revelando HOLLEY.
MATÉRIA
Ei, droga. É minha namorada imaginária!
HOLLEY
Vamos! Entre aqui!
Mater acelera em direção à rampa de Siddeley, Holley.
MATÉRIA
(para Holley)
Garoto, vou te dizer uma coisa, você
realmente quer esse primeiro encontro, não
é? Essa é uma atitude de não desistir.
Assim que as rodas de Mater tocam a rampa, BALAS SUBEM ao redor dele
em um spray. Siddeley é batido, um pneu estourado. Ele grita de dor.
FINAL
Espere, Sid!
Siddeley sai da pista e cai na grama.
Um tiroteio começa entre Finn e Acer. Finn ATIRA NO PNEU DE ACER,
estourando-o e jogando-o para fora do curso.
Acer CAREENS fora de controle, sobe e ATRAVÉS DE UM JATO ---
- - - FORA DO OUTRO LADO onde ele pousa em um petroleiro.
EM SIDDELEY - Ele está indo em direção à beira da pista, onde a grama e a
pista encontram a ÁGUA. Ele ACESSA O GÁS, sua única esperança.
SIDDELEY
Finn, é agora ou nunca!
Finn FREIA, 180s e agarra a rampa no momento em que Siddeley pega ar.
SIDDELEY
Aguentar!
Mater, a única coisa que não está no jato, oscila e desaparece de nossa vista
enquanto Siddeley sobe em direção às nuvens. Enquanto ele é PUXADO pela
escotilha traseira:
MATER (VO)
Quando você ler isto, estarei em segurança
em um avião, voando para casa.
INT. LOBBY - HOTEL - TÓQUIO - DIA
FECHAR COM uma NOTA manuscrita (er, escrita em pneus?) Em rabiscos
infantis. Não vemos tudo, apenas um pouco. A voz de Mater começa a nota
com a primeira frase, mas nós DISSOLVEMOS na voz de McQueen.
McQueen
“Sinto muito pelo que fiz. Não quero ser a
causa de você perder mais corridas. Quero
que você prove ao mundo o que eu já sei:
que você é o maior carro de corrida do
mundo. Seu melhor amigo, Mater.
McQueen entende isso.
McQueen
Eu realmente não queria que ele fosse embora.
LUIGI
Espere, tem mais aqui.
(lê)
"PS Por favor, diga ao hotel que eu não
pretendia encomendar aquele filme. Achei que
era apenas uma prévia e não percebi que
estava pagando por ele. PPS... Isso é
engraçado aí - PP."
(para os outros)
Há mais algumas páginas de PS aqui.
McQueen
(voltar atrás)
Bem, pelo menos sei que se ele estiver
em casa estará seguro.
EXT. CÉU - DIA
SIDDELEY rompe algumas nuvens e voa com propósito.
INT. JATO - DIA
Um jato espião bem equipado. Vários computadores cobrem as paredes.
FINAL
Agora é assim que gosto de começar o dia!
Você nunca se sente mais vivo do que
quando está quase morto.
HOLLEY
(digitalizando Matéria)
Espero que esse dispositivo não tenha caído.
MATÉRIA
Foi o mais perto que estive de perder meu
voo! Aquilo foi ---
Com um BRAÇO ROBÓTICO, Holley pega o DISPOSITIVO que Rod Redline
escondeu embaixo de Mater. Ela arranca com um GOOSE.
MATÉRIA
(pula)
Uau!
HOLLEY
Ainda inteiro, ótimo.
Holley coloca o dispositivo em um computador mainframe. Começa
“ANALISANDO”.
MATÉRIA
Eu tenho que ir ao médico. Eu continuo
sentindo dores agudas no meu material
rodante.
HOLLEY
Baixando a foto agora.
MATÉRIA
Ei, deixe-me apresentar vocês dois.
(para Holley)
Este aqui é Finn McAlgo ou outro. Ele é um
aeroporto VIP de primeira classe,
whatchamacallit. E Finn, este é o meu
encontro.
(para Holley)
Nunca descobri seu nome.
HOLLEY
Ah, sim, desculpe. É Shiftwell. Holley
Shiftwell.
MATÉRIA
(para Finn)
É Shiftwell. Holly ---
DING! O computador terminou de analisar. As luzes da cabine diminuem.
FINAL
Finalmente. É hora de ver quem está por trás de
tudo isso.
UMA IMAGEM é explodida entre os três. É uma fotografia, uma
complicada mistura de peças metálicas coladas.
HOLLEY
(para Mater, com expectativa)
O que é isso?
.
MATÉRIA
Bem, esse é um dos piores motores já feitos.
É um velho V8 de alumínio com sistema
elétrico Lucas e parafusos Whitworth. Atire,
aqueles parafusos Whitworth são uma dor,
vou te dizer uma coisa. Eles não são métricos,
não são polegadas...
HOLLEY
Sim, certo, certo. Mas quem é esse motor,
Mater?
MATÉRIA
Bem, é meio difícil dizer por esta foto, não
é?
HOLLEY
Mas foi você quem pegou.
FINAL
Holley.
HOLLEY
Oh, certo. Sim claro. “Um bom agente
consegue o que pode e sai antes de ser
morto.” Desculpe.
MATÉRIA
Agente? Você quer dizer como agente de
seguros, tipo,
(canta)
'Como um bom vizinho, Mater está aí'?
Espere, você quer dizersegredo agentes.
Vocês são espiões!
FINAL
Holley, em quantas marcas e modelos
apareceu esse tipo de motor?
Holley tem essas estatísticas em segundos. Brincadeira de criança.
HOLLEY
Foi padrão em sete modelos ao longo de
um período de 12 anos. Pelo menos
35.000 carros foram fabricados com este
motor.
Mater MOVE SEU ASSENTO PARA A FRENTE, através de uma parte do
holograma para ficar cara a cara com Holley.
MATÉRIA
Você é bonita.
HOLLEY
(incomodado)
Sim tudo bem. Obrigado.
MATÉRIA
E tão legal.
HOLLEY
Apenas preste atenção.
Ela move a foto do motor para bloquear Mater novamente.
FINAL
Isto parece um beco sem saída. Se
houvesse algo na foto que pudesse
restringir um pouco isso, eu ficaria muito
mais feliz.
MATÉRIA
Você pode não estar feliz, mas aposto que
esse cara está. Viu como ele teve a maioria de
suas peças substituídas? E vê todas aquelas
caixas ali? São todas peças originais. Eles não
são fáceis de encontrar.
HOLLEY
Peças raras.
FINAL
Isso é algo que podemos rastrear.
HOLLEY
Exatamente!
Holley abaixa a tela.
FINAL
Muito bem, Mater! Eu nunca teria visto
isso.
(para Holley)
Conheço um negociante de peças no
mercado negro em Paris, um canalha
traiçoeiro. Mas ele é o único carro no
mundo que pode nos dizer de quem é esse
motor. Mater, o que você diria sobre a
criação de uma força-tarefa informal sobre
este assunto?
MATÉRIA
Espere o que?
FINAL
Você obviamente tem muita
experiência na área.
MATÉRIA
Bem, sim, eu moro ao lado de um.
(pensa sobre isso)
Não sei, Finn. Não tenho ajudado muito
ninguém recentemente.
FINAL
Você está me ajudando. Por favor, Mater.
MATÉRIA
Bem, ok. Mas você sabe que sou apenas um
caminhão de reboque, certo?
FINAL
Certo. E estou apenas no negócio de
importação/exportação. Siddeley?
SIDDELEY
Sim, Finn?
FINAL
Paris. Tudo de suíte.
MATÉRIA
Sim, dois desses doces para mim
também, Sid!
(para Holley)
Você sabe, eu sempre quis ser um espião.
HOLLEY
(sorrindo docemente)
Realmente? Eu também.
SIDDELEY
Pós-combustores, senhor?
FINAL
Existe alguma outra maneira?
EXT. JATO - EM MOVIMENTO
Siddeley BATE O SUCO, eles chutam para frente como uma mula enquanto
CORTAMOS PARA ---
UMA MONTAGEM DE PARIS: Mater tenta entrar no tráfego da rotatória;
mímicos incomodam os turistas na Torre Eiffel; um pintor faz sua mágica com
um casal pouco atraente; um casal se beijando no lugar mais romântico do
mundo; podemos até pegar o RESTAURANTE GASTOW'S.
A introdução encantadora e discreta termina com uma VISTA Arrebatadora do
centro de Paris de longe, enquanto descemos para ---
EXT. RUA - DIA
- - - uma rua suja no 1º Arrondissement. Finn e Holley dirigem juntos enquanto
Mater, brincando de “espião”, corre para frente e para trás atrás deles, da porta
até a lixeira, “se escondendo”. Ele está se divertindo.
FINAL
(para Holley)
Quando estivermos lá dentro, fique por perto. Não
se preocupe em verificar os números VIN em busca
de registros criminais, eles são todos duvidosos
aqui.
HOLLEY
Sem varreduras VIN. Entendi.
FINAL
Não fale com ninguém. Não olhe para ninguém. E
absolutamente, positivamente, nada de
inatividade. Estamos entendidos?
HOLLEY
Sim certo. Sem ociosidade. Sim senhor.
FINAL
Mate?
MATÉRIA
Sim, Finn?
FINAL
Não estamos aqui para fazer compras.
Enquanto Finn, Holley e Mater dobram a esquina...
MATÉRIA
Compras? O que você quer dizer? Por que
eu deveria ---
Mater vira a esquina e entra em um enorme mercado parisiense inspirado em Les
Halles, repleto de peças de automóveis. O sonho de um caminhão de reboque.
MATÉRIA
Papai.
COMERCIANTES
- Peças à venda, senhor!
- Senhor! Peças à venda!
NO MERCADO - MOMENTOS DEPOIS
Mater segue em frente, impressionado com os produtos à venda.
MATÉRIA
Você deve estar brincando comigo - eles
têm tudo aqui. Olhe para aqueles capuzes!
Eu poderia usar um capuz.
Mater continua, porém, seguindo o conselho de Finn.
MATÉRIA
Desculpe pessoal, preciso ir.
INT. MERCADO FECHADO - DIA
Mater, agora fora da vista de Finn e Holley, passa por uma barraca escura. Ele
PÁRA, espia. Tem alguém lá dentro.
MATÉRIA
Com licença. O que você está vendendo?
De repente ABRE os faróis revelando... OLHOS!! Em francês, o carro
mutante oferece seus produtos para Mater. Mater ENFRENTA-SE,
acelera, ATERRIFICADO.
AO REDOR DA ESQUINA - FINN E HOLLEY
Alguns carros à frente de Mater. Eles rolam, procurando... Aha! Finn e
Holley desaparecem nas sombras.
Em FINN'S SIDE MIRROR: TOMBER, um revendedor de peças de três rodas,
discute com um cliente francês.
FINAL
Aí está você.
Mater de repente vira a esquina e vê Finn e Holley.
MATÉRIA
Cara, existem alguns ótimos ---
FINAL
Mater, volte!
Tarde demais. Tomber vê Mater, então percebe FINN, refletido em uma
calota. Ele PARAFUSA. Finn e Holley o perseguem.
MATÉRIA
Ei, espere por mim!
Tomber, derrapando, chuta uma barraca no caminho de Finn. Holley
rapidamente gira para a DIREITA e desaparece. Onde ela foi?
Finn, em sua perseguição, salta outro obstáculo e perde terreno para ---
- - - Tomber que vira uma esquina e se vê grelhado após grelhado com
HOLLEY. Ele vira para a esquerda, mas vira, rolando para o lado e
parando.
Holley ZAPS nele com ELETROCHOQUES. Finn chega de repente e a impede.
FINAL
(para Holley)
Você perdeu a cabeça?!
HOLLEY
Mas eu pensei ---
FINAL
Mater! Este sujeito precisa de um reboque.
Ligue-o.
MATÉRIA
Coisa certa.
CORTE PARA:
MOMENTOS DEPOIS - Mater reboca Tomber, seguindo Finn e Holley.
TÚMULO
Seu lixo enferrujado, tire seu anzol sujo de
cima de mim!
INT. UMA PEQUENA GARAGEM - MOMENTOS DEPOIS
Finn abre uma porta. Os carros se espalham como baratas.
FINAL
(para os carros)
Alez! Manutenção - viva!
Mater desengata um Tomber furioso que cospe em francês. Finn puxa a porta
para baixo. Como ele trava firmemente ---
TÚMULO
(para Finn)
Eletrochoque! Você está brincando comigo??
FINAL
Calma, Tomber. Este é o primeiro trabalho
de campo dela. Ela não sabia que você era
meu informante.
HOLLEY
Informante?
TÚMULO
Um novato, hein? Nunca gostei de cheiro de carro
novo.
Holley FUME de raiva.
FINAL
Tomber estava cumprindo 20 anos de prisão
perpétua em um depósito marroquino na
primeira vez que o salvei, se bem me lembro.
TÚMULO
Falando em recalls, você está subindo muito
em quilometragem, não está, Finn?
HOLLEY
Tudo bem, entendemos. Vocês dois se
conhecem, vocês dois são velhos. Então.
Holley tira uma FOTO HOLOGRÁFICA do motor na frente de Tomber.
HOLLEY
Pronto, informante. Nos informe.
Tomber olha para a foto. Ele recua, impressionado.
TÚMULO
Esse é o pior motor já feito.
De repente, Tomber estreita o olhar.
TÚMULO
Espere. Aquele filtro de óleo... aqueles
rolamentos de roda.
FINAL
Essas partes parecem familiares,
Tomber?
TÚMULO
Eles deviam. Eu os vendi.
HOLLEY
A quem?
TÚMULO
Nenhuma idéia. Ele é meu melhor cliente,
mas sempre faz negócios por telefone.
Sempre me perguntei por que ele precisa de
tantas peças. Agora eu sei.
MATÉRIA
Bem, um limão precisa de partes. Não há
nada mais verdadeiro do que isso.
FINAL
"Limão?"
MATÉRIA
Sim, você sabe. Carros que nunca funcionam
direito. Limões são o pão com manteiga de
um caminhão de reboque. Como aqueles
Gremlins e Pacers que encontramos na festa,
na corrida e no aeroporto.
FINAL
Holley, veja as fotos da plataforma de
petróleo. Quero saber que outros tipos de
carros existiam por aí.
Holley obedece e de repente FOTOS DE CARROS DA PLATAFORMA DE
PETRÓLEO ficam suspensas no ar na frente deles.
HOLLEY
Certo. Vamos ver. Havia Hugos. E Trunkovs.
FINAL
Mater, esses carros são considerados
limões?
MATÉRIA
O Papamóvel é católico?
HOLLEY
Finlandês. Todos os envolvidos nesta
trama são um dos maiores perdedores da
história.
Holley refere-se à FOTO DO MOTOR, que agora surge como a imagem
proeminente, talvez a única à vista.
FINAL
E todos eles estão recebendo ordens do carro
atrás deste motor.
TÚMULO
Isso explica tudo!
FINAL
O quê, Tomber?
TÚMULO
Gremlin, Pacer, Hugo e Trunkovs nunca
ficam juntos. Mas eles terão uma reunião
secreta em dois dias.
FINAL
Onde está acontecendo essa reunião?
TÚMULO
Porto Corsa, Itália.
MATÉRIA
É aí que será a próxima corrida!
FINAL
Então há uma boa chance de que nosso
mecanismo misterioso também esteja lá.
TÚMULO
Suas chances são mais do que boas. Acabei
de lhe enviar ontem um novo conjunto de
embreagem... para Porto Corsa.
FINAL
Holley, contacte Stephenson e peça-lhe que
nos encontre na Gare de Lyon. Bom trabalho.
EXT. ALPES FRANCESES - NOITE
STEPHENSON, UM TREM BALA DE LUXO DE TRÊS CARROS acelera ao longo
de uma montanha coberta de neve na calada da noite, seu farol de
halogênio cortando a escuridão. Ele MERGULHA em um TÚNEL ---
MATER (OS)
Rapaz, vou te dizer uma coisa. Aquele sujeito
de três rodas devia estar certo sobre uma
grande reunião.
INT. CARRO ESPIÃO - EM MOVIMENTO - NOITE
Mater, Finn e Holley percorrem fotos do TRÁFEGO em estilo de vigilância em
uma rua italiana. Eles estão no vagão da frente, que funciona como uma
luxuosa área de estar e centro de comando de inteligência.
MATÉRIA
Você nunca vê tantos limões em uma
cidade. A menos que haja uma feira de
trocas ou algo assim.
(para Holley)
(MAIS)
MATER (CONTINUAÇÃO)
Ei, como você conseguiu todas
essas fotos?
HOLLEY
Bem, reprogramei remotamente as câmaras
de semáforo do Porto Corsa para fazerem
reconhecimentos.
MATÉRIA
Uau, você não é apenas o carro mais bonito
que já conheci, mas também o
mais inteligente também.
HOLLEY
Obrigado. Eu penso.
MATÉRIA
Essa é uma visão familiar.
Mater refere-se a uma foto de VICTOR HUGO, o HUGO Lemonhead, sendo
rebocado por um REBOQUE DO LESTE EUROPEU.
MATÉRIA
Um Hugo sendo rebocado. Mas ele parece
absolutamente perfeito.
FINAL
Claro. Eles devem ser os chefes das
famílias dos limões.
MATÉRIA
Faz sentido. Se eu fosse rico e quebrasse
todos os dias, também me contrataria para
me rebocar o tempo todo.
FINAL
Temos que nos infiltrar naquela reunião. É a
única maneira de descobrir quem está por
trás de tudo isso.
HOLLEY
(olhando Mater)
Aguarde um minuto.
MATÉRIA
O que?
HOLLEY
Segure firme.
Holley tira a foto de Mater, cegando-o temporariamente.
MATÉRIA
Ahh!.
Holley volta para o monitor. O rosto de Mater aparece na tela. Ela
rapidamente enxerta no caminhão de reboque do Hugo.
FINAL
Bom trabalho, senhorita Shiftwell.
Holley não tem certeza do que a surpreende mais: o elogio ou o quanto isso a
deixa satisfeita.
HOLLEY
Obrigado, Finn.
MATÉRIA
Rapaz, eu realmente gostaria que meus amigos
pudessem me ver agora.
EXT. CIDADE PEQUENA - ITÁLIA - FORA DE PORTO CORSA - DIA
Uma pitoresca praça italiana. Uma FONTE MASERATI imaculada,
completa com um antigo tridente, surge à nossa vista.
Luigi e Guido aparecem.
LUIGI
Guido, seus olhos não te enganam. Estamos
na Itália. Estamos em casa!
Sarge, Fillmore e McQueen saem de um caminhão de transporte WGP.
FILMORE
Olá, Luigi. Qual caminho para o hotel, cara?
LUIGI
O que? Nenhum amigo meu ficará num
hotel na minha aldeia. Você vai ficar com
meu --- Tio Topolino!
TIO TOPOLINO, um distinto Fiat Topolino 1937, avança. Ele os cumprimenta
calorosamente com afetuosas saudações italianas enquanto a notícia da
chegada de Guido e Luigi se espalha. A praça se enche de família e amigos.
EXT. PRAÇA - Anoitecer
Uma festa festiva de regresso a casa. Luzes espalhadas pela praça. Música e
dança. Fillmore e Sarge estão sentados à mesa de jantar.
SARGE
Como eles fazem isso? São os mesmos
ingredientes de casa, mas tem um gosto tão
bom.
FILMORE
É orgânico, cara.
SARGE
Abraçador de árvores.
RELÂMPAGO MCQUEEN rola pela periferia da praça, parece perdido em
pensamentos.
TIO TOPOLINO (OS)
Carro de corrida.
Tio Topolino acena para McQueen.
TIO TOPOLINO
Você parece tão deprimido, tão deprimido. É como se
você tivesse pneus furados.
MAMA TOPOLINO, uma avó italiana robusta, aparece, a um quilômetro por minuto
e depois vai embora, agora um carro em uma missão.
TIO TOPOLINO
Ela disse que você parece estar morrendo
de fome. Que ela vai fazer uma grande
refeição para você e engordar você.
McQueen
Não, mamãe Topolino, por favor. Você
não precisa fazer barulho!
Tarde demais. Ela desapareceu dentro de sua cozinha.
TIO TOPOLINO
Capisco.Eu entendo. É um problema,
sim? Entre você e um amigo?
McQueen
Como você sabia disso?
TIO TOPOLINO
Um carro sábio ouve uma palavra e
entende duas.
McQueen absorve isso, impressionado.
TIO TOPOLINO
Isso, e Luigi me contou. Enquanto mamãe
cozinha, venha passear comigo.
Eles avançam, tio Topolino ditando o ritmo.
McQueen
Trouxe meu amigo Mater na viagem. E eu
disse a ele que ele precisava agir de forma
diferente, que não estávamos em Radiator
Springs.
TIO TOPOLINO
Este Mater. Ele é um amigo próximo?
McQueen
Ele é meu melhor amigo.
TIO TOPOLINO
Então por que você pediria a ele para ser
outra pessoa?
McQueen considera isso uma realização.
McQueen
O que eu fiz? Eu disse algumas coisas
durante a nossa briga...
TIO TOPOLINO
Você sabe, quando Guido e Luigi trabalhavam
para mim, eles brigavam por tudo.
NA PRAÇA - Guido dança com uma menina. Luigi de repente interrompe. Eles
começam a DISCUTIR.
TIO TOPOLINO
Eles brigam para saber qual Ferrari era a
melhor Ferrari; qual deles se parece mais
com uma Ferrari... Houve até algumas
brigas não-Ferrari.
Guido agora LEVANTA Luigi e volta.
TIO TOPOLINO
Então eu digo a eles,vai bem.Não há problema
em lutar. Todo mundo briga de vez em quando,
especialmente os melhores amigos.
McQueen absorve isso. Parece sentir um pequeno conforto.
TIO TOPOLINO
Mas você tem que fazer as pazes rápido.
O conforto de McQueen evapora rapidamente.
TIO TOPOLINO
Nenhuma luta é mais importante
que a amizade.
Guido e Luigi agora dançam juntos com a menina e sua amiga que
acabaram de chegar. Todos se divertindo muito. Eles passam por nós
dançando, passando na frente de MCQUEEN E TIO TOPOLINO. FICAMOS
COM eles.
TIO TOPOLINO
Chi encontrou um amigo, encontrou um
tesouro.
McQueen
O que isso significa?
MAMÃE TOPOLINO
(A chegar)
Quem encontra um amigo, encontra
um tesouro.
Mama Topolino deixa cair uma bandeja de comida na frente de McQueen.
MAMÃE TOPOLINO
Agora,manga! Comer!
EM MCQUEEN, distante, absorvendo tudo isso, perdido em pensamentos
enquanto, ao fundo, tio Topolino e mamãe Topolino conversam, depois
discutem, depois fazem as pazes (tudo em italiano), tudo isso enquanto
ficamos no rosto pensativo de McQueen ---
INT. TÚNEL DE TREM - MAIS TARDE
Stephenson segue em frente, todo profissional.
STEPHENSON
Finn, uma hora para Porto Corsa.
INT. TREM - EM MOVIMENTO - MAIS TARDE
FINAL
Obrigado, Stephenson.
Finn observa enquanto HOLLEY instala uma nova LUZ DE EMERGÊNCIA
no telhado de Mater. Parece exatamente igual ao antigo.
HOLLEY
Isso deve bastar.
FINAL
Perfeito.
HOLLEY
Então, Mater, é ativado por voz. Mas você
sabe, tudo é ativado por voz hoje em dia.
MATÉRIA
O que? Achei que você deveria estar me
disfarçando.
COMPUTADOR DO MATER
Voz reconhecida. Programa de disfarce
iniciado.
ZWWWWAT! Um disfarce HOLOGRÁFICO surge de repente, emitido do telhado
de Mater. Ele deixa cair uma imagem de camuflagem limpa do LESTE EUROPEU
TOW TRUCK sobre Mater.
MATÉRIA
Legal! Ei, computador. Faça-me um
caminhão alemão!
COMPUTADOR DO MATER
Solicitação reconhecida.
ZWATTTT! Mater de repente usa lederhosen e um chapéu alemão.
MATÉRIA
Confira. Estou usando Materhosen.
Faça de mim um caminhão monstro!
COMPUTADOR DO MATER
Solicitação reconhecida.
Ele se transformou em Drácula, completo com presas.
MATÉRIA
(ala Drácula)
Quero sugar seu gás. Agora faça para mim um
caminhão de taco!
COMPUTADOR DO MATER
Solicitação reconhecida.
MATÉRIA
Um carro engraçado!
COMPUTADOR DO MATER
Solicitação reconhecida.
Finn de repente aperta um botão e interrompe a loucura.
FINAL
A ideia é manter a discrição, Mater.
Mater, castigado, segue em frente.
MATÉRIA
Então eu simplesmente entro e finjo ser esse
caminhão.
FINAL
E deixe o resto conosco.
HOLLEY
Agora fique quieto.
Holley volta ao trabalho. A camuflagem do disfarce é maior que a do Mater.
Como resultado, Holley deve reduzi-lo para caber em seu corpo. Enquanto
ela calibra cuidadosamente o holograma:
HOLLEY
Tenho que fazer a prova final do seu
disfarce.
Holley PÁRA. O disfarce 3D agora está nivelado com sua moldura, mas
mostra marcas.
HOLLEY
Oh céus. Isso não é bom.
Ela coloca um BONDO SPRAYER em um braço robótico e o move em direção a
um dos DENTS de Mater. Mater se afasta.
MATÉRIA
Ei, o que você está fazendo?
HOLLEY
O disfarce não será calibrado de
forma eficaz sem uma superfície lisa
para enxertar.
MATÉRIA
Oh. Por um segundo pensei que você estava
tentando consertar meus amassados.
HOLLEY
Eu era.
MATÉRIA
Bem, então não, obrigado. Eu não faço com que
esses amassados sejam polidos, puxados,
preenchidos ou pintados por ninguém. Eles são
valiosos demais.
HOLLEY
Seus dentes são valiosos?
MATÉRIA
Venho conhecer cada um deles com meu
melhor amigo, Relâmpago McQueen.
(MAIS)
MATER (CONTINUAÇÃO)
Eu não conserto isso. Quero me
lembrar dessas marcas para sempre.
HOLLEY
Então você estava falando sério em Paris?
McQueen não é apenas parte do seu
disfarce?
FINAL
As amizades podem ser perigosas no nosso
ramo de trabalho, Mater.
MATÉRIA
Mas minha linha de trabalho é reboque e
salvamento.
FINAL
Certo. E Miss Shiftwell está criando
aplicativos para iPhone.
MATÉRIA
Não, eu quis dizer de verdade. EU ---
HOLLEY
Tudo bem. Não diga mais. Vou contornar o
dente.
FINAL
Enquanto isso...
Finn aperta um botão. As paredes se transformam em um ENORME
CACHE DE ARMAS.
FINAL
Você parece um pouco leve em armas.
Fora do RXN de Mater ---
EXT. ALPES - AMANHECER
- - - STEPHENSON Surge ruidosamente de um túnel. Ele avança, inicia
sua descida para a Itália ---
BRENT MUSTANGBURGER (VO)
Você está assistindo ao vivo a bela Porto Corsa,
Itália, na Riviera Italiana. Que cenário
magnífico para a segunda corrida do Grande
Prémio Mundial.
EXT. PORTO CORSA, ITÁLIA - DIA
Sobre um helicóptero arrebatador BEAUTY SHOTS:
DAVID HOBBSCAP (VO)
Bem, Brent, eles chamam esse lugar de “A
Jóia da Riviera” e é fácil entender por quê.
Um barco de pesca local navega por um canal idílico, sob pontes que
conectam vilas nas encostas.
DAVID HOBBSCAP (VO)
Com as suas praias isoladas e casinos
opulentos, Porto Corsa é verdadeiramente
um parque de diversão para os ricos.
Uma longa fila de iates de aparência rica no porto.
DAVID HOBBSCAP (VO)
E todo mundo que é alguém está aqui
hoje.
CARROS ESPORTIVOS ricos passam por lojas caras.
DAVID HOBBSCAP (VO)
Dos ultra-ricos e superfamosos aos
líderes mundiais e dignitários
importantes.
O POPEMOBILE, visível no meio da multidão, atravessa a cidade.
DARRELL CARTRIP (VO)
Você não está brincando, David. Você não
pode dar uma volta de três pontos por aqui
sem esbarrar em alguma celebridade!
TIRO DE HELICÓPTERO do Cassino.
BRENT MUSTANGBURGER (VO)
Bem-vindos à segunda corrida do Grande
Prêmio Mundial!
CORTE PARA:
MUSTANGBURGER, HOBBSCAP e CARTRIP na cabine de controle.
BRENT MUSTANGBURGUER
A grande novidade continua sendo o Allinol.
Sir Miles Axlerod falou à imprensa hoje cedo
para responder a perguntas sobre sua
segurança.
FOTOGRAFIAS DA CONFERÊNCIA DE IMPRENSA - Miles Axlerod, em um pódio,
dirige-se à multidão da imprensa. Ele parece um pouco exasperado.
MILHAS AXLEROD
Um painel independente de cientistas
determinou que o Allinol é totalmente
seguro. OK? Seguro! Aí está.
BRENT MUSTANGBURGUER
Então a corrida vai continuar, pessoal.
GRÁFICOS DA CORRIDA mostram Francesco com 10 pontos no topo da
classificação da corrida.
DARRELL CARTRIP
Mas a pergunta que todos estão
fazendo: o verdadeiro Relâmpago
McQueen aparecerá hoje?
NA PISTA - À medida que os pilotos começam a se posicionar no grid.
BRENT MUSTANGBURGER (VO)
Bem, é melhor ele. Fale sobre uma vantagem
do hometrack. Francisco
Bernoulli cresceu correndo neste
percurso.
LOCUTOR DE PISTA ITALIANO (VO)
Signore e signori, na pole position, numero uno...
A torcida já está torcendo, sabe quem é.
LOCUTOR DE PISTA ITALIANA (VO)
. . . Francescooooo!
A multidão italiana ruge e canta pelo herói da sua cidade natal.
FRANCESCO
(para a multidão)
Belissima! Obrigado pelo seu apoio.
(para McQueen)
E seu grande erro, McQueen!
McQueen perdeu este comentário. Ele se aproxima de sua posição na grade, perdido
em pensamentos.
LOCUTOR DE PISTA ITALIANO (VO) Na
segunda posição.Número novantacinque.
Relâmpago Mcqueen!
Aplausos (não tão estrondosos, obviamente) da multidão. McQueen parece não
notar.
NO POÇO DE MCQUEEN - Sua equipe troca olhares, preocupados.
LUIGI
McQueen? Está tudo bem?
FILMORE
Se você está preocupado com seu combustível,
cara, não se preocupe. É perfeitamente seguro.
DE VOLTA À GRADE DE PARTIDA
McQueen
Não, pessoal, eu realmente queria que Mater
estivesse aqui.
FRANCESCO (OS)
Francesco entende, McQueen.
Francesco estaciona ao lado dele, sorrindo.
McQueen
Ah, ótimo. Aí vem. O que você tem,
Francesco?
FRANCESCO
Para carros de corrida famosos como
Francesco e bem...você, estar longe de casa
não é fácil.
McQueen
Acho que você esqueceu a parte
insultuosa desse insulto.
FRANCESCO
Não é um insulto. Quando Francesco está
longe de casa, ele sente falta da mãe, assim
como você sente falta do seu amigo guincho.
McQueen
Nossa, talvez eu tenha julgado mal você, porque
foi exatamente assim que eu ---
FRANCESCO
Claro que eusou em casa. E minha mãe
está bem aqui.
Francesco se refere à sua MAMÃE que se senta em um camarote especial no meio
da multidão, torcendo por ele, mandando-lhe beijos.
FRANCESCO
(grita)
Mamãe! Não se preocupe, mamãe!
(MAIS)
FRANCESCO (CONTINUAÇÃO)
McQueen está muito triste! Eu vou bater
no traseiro dele hoje!
McQueen
E aí está o insulto que estávamos
perdendo.Grazie!
AS LUZES - CLIQUE DO VERMELHO PARA O VERDE ---
OS RACERS DECOLAM!
EXT. PORTO CORSA - DIA
FOTOS dos pilotos fazendo as primeiras voltas pelas ruas da cidade. Seguimos
para o CASINO DI PORTO CORSA. A arquitetura em estilo Beaux Arts ergue-se
no topo de uma colina, com vista para o campo.
EXT. O CASINO - MOMENTOS DEPOIS
Um grupo de HUGOS bandidos - carros feios do Leste Europeu - espera
impacientemente na frente. Um porta-carros ESTILO LIMOUSINE chega à
rotatória.
Um estimado e idoso GREMLIN passa com um grupo de GREMLIN
THUGS que o conduz para dentro do cassino.
ALEXANDRE HUGO
Gremlins. Cara, esses carros são feios. Parece
que alguém roubou seus baús.
Os bandidos todos SNICKER.
HOLLEY
Escusatemi, todos! Senhor!
Holley chega com um sotaque italiano decente.
HOLLEY
Mio nonno, meu avô, quebrou. Se um de
vocês pudesse ajudar eu ficaria muito
grato.
IVAN, UM CAMINHÃO DE REBOQUE DO LESTE EUROPEU (aquele que Holley e
Finn prepararam Mater para personificar), avança.
IVAN, O CAMINHÃO DE REBOQUE
Parece que você precisa de “assistência na
estrada”.
OUTRO HUGO
Ela estava falando comigo, Ivan.
IVAN, O CAMINHÃO DE
REBOQUE Ah, é mesmo? Prove.
HOLLEY
Não, não, não lute por mim.
Holley direciona seu interesse para Ivan.
HOLLEY
Signore Tow Truck, por favor?
CORTE PARA:
MATER - Ele observa isso de um esconderijo seguro em uma esquina.
FINN (VO)
Prepare-se, Mater.
CORTE PARA:
FINN, em um café ao ar livre nas dependências do cassino.
FINAL
Você está a qualquer momento.
CORTE PARA:
MATER, agora parecendo um pouco nervoso. Ele recua e desaparece de vista.
MATÉRIA
Eu não sei sobre isso, Finn. E se eu
estragar tudo?
FINN (NO RÁDIO)
Impossível. Basta aplicar o mesmo nível de
dedicação que você tem usado para bancar o
“caminhão de reboque idiota” e você ficará
bem.
MATÉRIA
É que esses caras parecem bem durões e ---
Espere, você disse “idiota”? É assim que você
me vê?
FINN (NO RÁDIO)
É assim que todo mundo vê você. Não é essa
a ideia? Eu lhe digo, essa é a genialidade
disso. Ninguém percebe que está sendo
enganado porque está muito ocupado rindo
do tolo. Brilhante.
Enquanto Finn fala, Mater absorve isso. Ele vê seu próprio reflexo em uma
janela próxima. Parece estar se vendo com novos olhos.
ZZZZATTT! Mater pula ao ouvir o som, vira-se a tempo de ver Ivan CHOCADO
INCONSCIENTE pelos ZAPPERS de Holley.
HOLLEY
Por que você não está disfarçado?
MATÉRIA
Eu, uh---
HOLLEY
Vamos, não há tempo. Ir!
MATÉRIA
Está bem, está bem. Computador: disfarce.
COMPUTADOR DO MATER
Solicitação reconhecida.
EXT. NA PRÓXIMA ESQUINA - CONTÍNUO
Mater, agora disfarçado de Ivan, o Caminhão de Reboque, se aproxima dos
Hugos. Chega mais um LIMO CARRIER.
ALEXANDRE HUGO
É o chefe! Ele está vindo!
A transportadora estaciona e a parte traseira se abre. VICTOR HUGO espera.
VICTOR HUGO
Ivan!
Mater percebe que Victor está falando com ele. Ele pula para isso.
VICTOR HUGO
Ivan, por que você me insulta tanto me
fazendo esperar?
Mater, agora com Victor fisgado, o reboca até a porta da frente do cassino.
NO FINN - agora acompanhado no café por Holley, que monitora tudo e
VÊ TUDO QUE MATER VÊ em seu display.
HOLLEY
Ele está dentro.
EXT. PERCURSO DE CORRIDA - PORTO CORSA - DIA
McQueen e Francesco lutam pelo primeiro lugar ---
BRENT MUSTANGBURGER (VO) Os
pilotos agora estão contornando o grampo e
descendo a colina em direção à ponte do
cassino.
INT. CASSINO - DIA
Carros jogam dados com FUZZY DICE; caça-níqueis com hodômetros para
números de jackpot; garotas de cigarro vendem itens de carro.
CARRO MENINA CIGARRO
Ambientador, esferas de antena,
velas...
ON MATER - Ele reboca VICTOR. Eles são flanqueados em todas as quatro
esquinas por bandidos do Hugo, como uma comitiva presidencial. A
generosidade do design de interiores parece finalmente tirar Mater de seu
medo.
MATÉRIA
(olhos arregalados)
Uau, esse lugar parece feito de ouro.
Os Hugos de ambos os lados de Mater trocam olhares.
HOLLEY (NO RÁDIO)
É porque é, Mater. Agora, tome cuidado
com o que você diz.
MATÉRIA
Por que é que? O que quer dizer com não falo
com você?
(mais conversas de Holley que
não podemos ouvir)
Então você quer que eu pare de falar com
você. Agora mesmo?
ALEXANDRE HUGO
Você está agindo de forma estranha hoje, Ivan.
MATÉRIA
Não tenho ideia do que você está falando...
PONTO DE VISTA DE MATER - Uma leitura digital isola o Hugo e começa a
rolar informações ao lado.
MATÉRIA
. . . Alexander Hugo, também conhecido como “Chop Shop
Alex”.
Num plano mais amplo, percebemos que esta exibição é invisível para todos,
exceto para Mater. Alguns dos outros pseudônimos de Alex incluem “Alexander
Hu-Don't Go” e “Alexander the Not-So Great”.
MATÉRIA
Ei, você tem muitos akas, Alex. Mas acho que
faz sentido, visto como você é querido na
França, na Alemanha, na República Tcheca...
HOLLEY
(interrompendo sua
exibição)
Mater! Pare com isso!
Alexander Hugo, sem saber da interrupção de Holley, sussurra para Mater
enquanto eles dobram uma esquina.
ALEXANDRE HUGO
Está bem, está bem. Fale baixo. Você vai
me fazer ser preso.
(para os outros Hugos)
Não mexa com Ivan hoje. Ele está de mau
humor.
EXT. CASSINO - DIA
Holley, ao ouvir isso, não consegue acreditar.
FINAL
Ele é tão bom.
INT. CASSINO - DIA
Mater reboca Victor para dentro de uma sala privada, onde estão os PIORES
CARROS DO MUNDO, incluindo VLADMIR TRUNKOV, TUBBS PACER e J. CURBY
GREMLIN.
VLADIMIR TRUNKOV
Vencedor!
PACER TUBBS
Olá, Vitor!
J. CURBY GREMLIN
Aí está você.
VLADIMIR TRUNKOV
Entre, entre.
J. CURBY GREMLIN
Victor Hugo. Sou J. Curby Gremlin, de Detroit.
É bom te ver. Agora podemos começar.
VICTOR HUGO
O chefão já chegou?
VLADIMIR TRUNKOV
Não, ainda não.
PACER TUBBS
Ele deveria estar aqui a qualquer
minuto.
UAU! Uma PORTA é aberta. OS Todos se viram, agora em silêncio.
NA PORTA - Está aberta. Ninguém entra.
A sala dos Limões observa, nervosa.
ON MATER – Observando nervosamente também.
EXT. CASSINO - CONTÍNUO
FINAL
Aqui vamos nós.
INT. QUARTO PRIVADO - CASSINO - CONTÍNUO
Um carro finalmente aparece. É o Zundapp.
PROFESSOR ZUNDAPP
Tag Guten!
Todo mundo parece desapontado.
PACER TUBBS
É só o Professor.
VICTOR HUGO
Zundapp, quando ele vem?
PROFESSOR ZUNDAPP
Ele já está aqui.
MONITORES descem do teto. Neles, uma imagem de UM MOTOR - omesmo
maldito motor da foto. Mas esta é uma imagem AO VIVO. O carro está sendo
reformado.
VOZ
Sejam todos bem-vindos.
A VOZ está distorcida, embaralhada. Não há como determinar quem.
VOZ DO MOTOR
Eu gostaria de poder estar com você neste
dia tão especial, mas... meu conjunto de
embreagem quebrou. Você sabe como é.
Todos os Limões acenam com a cabeça em compreensão.
PACER TUBBS
Esteve lá.
J. CURBY GREMLIN
Esqueça isso.
VLADIMIR TRUNKOV
Nós sabemos como você se sente.
EXT. CASSINO
FINAL
Decifre essa voz!
HOLLEY
(já está nele)
Estou tentando... É muito
sofisticado!
INT. QUARTO PRIVADO - CASSINO - CONTÍNUO
VOZ DO MOTOR
Estamos aqui para comemorar. Hoje todo o
seu trabalho duro vale a pena. O mundo
virou as costas para carros como nós. Eles
pararam de nos fabricar, pararam de fabricar
nossas peças. A única coisa que eles não
pararam de fazer foi rir de nós. Eles nos
chamaram de nomes terríveis...
Sobre VICTOR HUGO.
VOZ DO MOTOR
Calhambeque. Balde enferrujado.
No TUBBS PACER.
VOZ DO MOTOR
Pilha. Máquina velha.
Em J. CURBY GREMLIN:
VOZ DO MOTOR
Junker, batedor, naufrágio.
No ZUNDAPP.
VOZ DO MOTOR
Cascavel.
E finalmente de volta ao monitor. O motor.
VOZ DO MOTOR
Limão. Mas os insultos deles apenas nos
dão força. Porque hoje, meus amigos...
Os monitores mudam para FOOTAGE AO VIVO.
VOZ DO MOTOR
. . . isso tudo acaba.
Nas TELAS DE VÍDEO - GOLPE DO MOTOR DE CARLA VELOSO ---
EXT. CURSO DE CORRIDA - CONTÍNUO
Veloso desvia e tenta mitigar acidente ---
DARRELL CARTRIP (VO)
Há fumaça! Na ponte do cassino!
DAVID HOBBSCAP (VO)
Oh não.
BRENT MUSTANGBURGER (VO) É
Carla Veloso, a automobilística brasileira.
Ela escorrega contra uma parede, com força.
EXT. CASSINO - CONTÍNUO
FINAL
O que acabou de acontecer?
HOLLEY
(analisando os dados)
Eu estou trabalhando nisso.
INT. QUARTO PRIVADO - CASSINO - CONTÍNUO
Os limões estão FELIZ. Mater está assustado.
VOZ DO MOTOR
Eles riram de nós. Mas agora é a nossa
vez de rir de volta.
ESTRONDO! Outro piloto explode um motor. Mater SALTA novamente.
EXT. CURSO DE CORRIDA - MESMO
Enquanto o piloto bate no corrimão ---
DAVID HOBBSCAP (VO)
Outro acidente! É o número nove, Nigel
Gearsley.
VOZ DO MOTOR (VO)
Abrace o seu limão interior! Deixe isso te
levar!
EXT. CASSINO
FINAL
Holley?
HOLLEY
Estou detectando um pulso
eletromagnético extremamente forte.
Holley relembra aquele último acidente. O CONTORNO DO FEIXE é visto
atingindo o piloto. Holley TRAZ ISSO até sua fonte ---
- - - uma CÂMERA WGP, que Grem e Acer apontaram para os pilotos de
uma posição de torre.
HOLLEY
Finn, é a câmera!
FINAL
Onde?
HOLLEY
Na torre.
Finn DECOLA, acelerando em direção a Grem e Acer ---
VOZ DO MOTOR (VO)
Este deveria ser o melhor momento do
combustível alternativo.
EXT. Arquibancadas - PERCURSO DE CORRIDA - CONTÍNUO
Fãs furiosos derrubam latas de Allinol. Um passa por cima de uma placa
da Allinol. Eles estão fartos disso.
VOZ DO MOTOR (VO)
Depois de hoje, todos voltarão à gasolina.
Nós RACK FOCUS para revelar outro fã enquanto ele rasga um banner da
Allinol com raiva.
INT. QUARTO PRIVADO - CASSINO - CONTÍNUO
As telas de vídeo agora estão preenchidas com UMA IMAGEM – das
PLATAFORMAS DE PETRÓLEO no Pacífico desde o início do filme.
VOZ DO MOTOR
E nós, os proprietários da maior reserva
inexplorada de petróleo do mundo, nos
tornaremos os carros mais potentes do
mundo!
EXT. RUAS DE PORTO CORSA - CONTÍNUA
Finn se abaixa, tece, acelera e abre caminho entre os espectadores ---
FINAL
Saia do caminho!E comeu!
Ele acelera furiosamente pela cidade.
EXT. PERCURSO DE CORRIDA - PORTO CORSA - CONTÍNUO
McQueen e Francesco VOAM POR NÓS.
INT. QUARTO PRIVADO - CASSINO
VOZ DO MOTOR
Eles virão até nós e não terão escolha,
porque eles irão precisarnós.
NO FINN - Ele acelera por uma estrada, Grem e Acer visíveis à sua frente. Ele
SALTA sobre a fenda em direção aos primos AMC ---
De repente, FINN CONGELA. Ele está imobilizado no ar!
Ele olha para cima. UM CHOPPER com um GRANDE ÍMÃ paira sobre ele.
ACER
(para Finn)
Achamos que você poderia passar por aqui.
VOZ DO MOTOR (VO)
E eles finalmente nos respeitarão.
Portanto, mantenham os capuzes bem
altos. Depois de hoje você nunca mais terá
vergonha de quem você é!
Grem e Acer voltam-se para a câmera. Eles alinham Shu Todoroki, que
está um pouco mais adiantado agora.
FINAL
Não!
INT. QUARTO PRIVADO - CASSINO - CONTÍNUO
VOZ DO MOTOR
Viva os limões!.
EXT. CURSO DE CORRIDA
Grem ZAPA O RACER.
Chamas explodiram de Todoroki. Ele perde o controle.
BRENT MUSTANGBURGER (VO) O
número sete está solto! Shu Todoroki!
Shu derruba mais três carros com ele e outros fazem o mesmo. É um
acúmulo de pesadelo.
EXT. CASSINO - MESMO
Holley vê Finn sendo levado pelo helicóptero.
HOLLEY
Finlandês.
EXT. LINHA DE CHEGADA - PORTO CORSA - CONTÍNUA
BRENT MUSTANGBURGER (VO) Párachoque contra pára-choque enquanto eles se aproximam da
linha de chegada.
McQueen elimina Francesco para uma vitória, ambos alheios ao que
acabou de acontecer.
BRENT MUSTANGBURGER (VO)
McQueen é o vencedor, Francesco é o
segundo. E eles não têm ideia do que
aconteceu atrás deles.
McQueen
Sim!
FRANCESCO
Ah! Isto é impossível!
McQueen
É disso que estou falando. Kachow! Ei,
onde estão todos os outros carros?
FRANCESCO
O que está acontecendo?
Eles veem o acúmulo em um monitor suspenso. Sirenes soam enquanto um
MEDIC CHOPPER voa para o local do engavetamento.
McQueen
(percebe)
Oh não.
CORTE PARA:
MILHAS AXLEROD - MAIS TARDE. Ele está perto do cassino. Ele está
completamente cercado, 360 graus, pela imprensa. Ele é abafado por uma
nevasca de perguntas.
BRENT MUSTANGBURGUER
Senhor Axlerod! A corrida final em Londres
ainda vai acontecer?
RETIRE para revelar que estamos assistindo isso nos monitores da SALA
PRIVADA DE CASSINO com Lemonheads, Zundapp e Mater.
MILES AXLEROD (NA TV)
Suponho que... Olha, “o show deve
continuar”, como dizem. Mas agora não é
hora de falar sobre...
J. CURBY GREMLIN
Não acredito que isso esteja realmente
acontecendo.
VLADIMIR TRUNKOV
Shh, quieto!
BRENT MUSTANGBURGER (NA TV) E
Allinol? Você exigirá que todos os pilotos ainda
corram com Allinol?
VLADIMIR TRUNKOV
Aí vem.
Sobre Miles Axlerod: Ele está arrasado.
MILES AXLEROD (NA TV) Não
posso, em sã consciência, continuar a arriscar
a vida de mais carros de corrida. A corrida
final não será disputada com Allinol.
ELOGIOS SELVAGENS enchem a sala. Rolhas de limonada estouram.
BRENT MUSTANGBURGER (NA TV)
Aí está. Sir Miles Axlerod claramente devastado
anunciando que não exigirá que os carros usem
Allinol na corrida final.
PROFESSOR ZUNDAPP
Uma torrada! Até a morte do Allinol e do
combustível alternativo para sempre!
EXT. CASSINO - CONTÍNUO
Holley já está fugindo. Acelerando.
HOLLEY
Matéria. Abortar a missão. Eles pegaram
Finn. Saia daí. Saia daí agora mesmo!
Ela vira uma esquina e PÁRA.
Sua fuga agora está bloqueada pelos mesmos HUGO THUGS que ela enganou
antes. Outro veículo aparece ATRÁS DELA, SE APARECE.
IVAN, O CAMINHÃO DE
REBOQUE Como está seu avô?
INT. QUARTO PRIVADO - CASSINO - CONTÍNUO
Os Lemonheads comemoram, cantando “Viva os limões!” Mater, assustado,
se vira para sair. Ele foi parado por ALEXANDER HUGO.
ALEXANDRE HUGO
Não é uma grande festa, Ivan?
MATÉRIA
Ah, sim, é inacreditável.
ALEXANDRE HUGO
Você não vai embora, vai?
MATÉRIA
Uh, claro que não vou embora.
MCQUEEN (OS)
Estou em choque como todo mundo...
MATÉRIA
McQueen?
Ele se vira e vê que McQueen está sendo entrevistado nos monitores.
MCQUEEN (NA TV)
Acidentes fazem parte das corridas, eu sei.
Mas algo assim nunca deveria acontecer.
DARRELL CARTRIP (NA TV)
Eles estão deixando você escolher o
combustível para a corrida final. Você tem
alguma ideia do que vai ser?
MCQUEEN (NA TV)
Alinol.
A excitação de repente ESCAPA da sala.
CABEÇAS DE LIMÃO
- O que?! - Ele acabou de dizer
Allinol? Depois de hoje?
MCQUEEN (NA TV)
Meu amigo Fillmore diz que o combustível é
seguro. Isso é bom o suficiente para mim.
Não apoiei um amigo meu recentemente.
Não vou cometer o mesmo erro duas vezes.
Na Matéria. Ele absorve isso.
BRENT MUSTANGBURGER (NA TV)
Então, uma revelação surpreendente de
Relâmpago McQueen...
Zundapp já está ao telefone com seu Big Boss que, com base em sua voz
irritada do sistema operacional, parece irritado.
PROFESSOR ZUNDAPP
Sim senhor. Claro.
Zundapp desliga e se vira para a sala.
PROFESSOR ZUNDAPP
Allinol deve acabar para sempre. McQueen
não pode vencer a última corrida.
Relâmpago McQueen deve ser morto.
Os olhos de Mater se arregalam.
MATÉRIA
Não!
Mater recua, BATINDO sua luz de emergência contra um dos monitores.
ZZZZZAT! Seu disfarce holográfico desaparece e rapidamente percorre todos os
seus disfarces anteriores, finalmente revelando o velho e enferrujado Mater.
PROFESSOR ZUNDAPP
É o espião americano!
Os bandidos sacam armas aterrorizantes.
MATÉRIA
Papai.
COMPUTADOR DO MATER
Pedido de "metralhadora Gatling" reconhecido.
WHIRRRR! ARMAS saem de Mater de cada lado.
MATÉRIA
Atirar. Eu não quis dizer ---
COMPUTADOR DO MATER
Solicitação reconhecida.
Mater PULVERIZ BALAS na multidão.
VLADIMIR TRUNKOV
Abaixe-se!
MATÉRIA
Uau!!
Os Limões e Lemonheads atingem o convés e RETORNAM O FOGO ---
Mater é JOGADO PARA TRÁS pela força das armas, de volta por algumas
portas duplas e para uma VARANDA.
MATÉRIA
Espera espera! Eu não quis dizer esse tipo de
filmagem!
COMPUTADOR DO MATER
Correção reconhecida. Implantando rampa.
QUEM! UM PÁRA-QUEDAS EXPLODE nas costas de Mater, ele pega ar e
é ARRANCADO PARA O CÉU!
Os Lemonheads o observam flutuar, maravilhados.
NO MATER, fora da frigideira mas ainda quentinho. Ele olha em volta e
percebe:
LIGHTNING MCQUEEN, ao longe, saindo do pódio de imprensa.
MATÉRIA
McQueen!
Mater olha para o porto, sobre o qual sobrevoa. Ele avista um MOTORBOAT.
Mater BAIXA seu anzol e rouba uma carona atrás do barco EM DIREÇÃO A
MCQUEEN.
BARCO A MOTOR ITALIANO
Aspetti!
A lancha não fica feliz com isso, tenta sacudi-lo. Mater é JOGADO EM UMA
placa de “HOTEL” e, em seguida, ESMAGA uma barraca de souvenirs de
Francesco. Enquanto ele cai no chão com força, nós quebramos o corte
para ---
EXT. CHECKPOINT DE SEGURANÇA - CÍRCULO DE VENCEDORES
- - - uma barricada. Separando a imprensa do público, os CAMINHÕES DE
SEGURANÇA ITALIANOS ficam de guarda.
MATÉRIA
Deixe-me passar! Deixe-me passar!
MATER vira uma esquina. Ele agora está coberto de recordações de Francesco
e folhas de palmeira. A palavra 'HOT' agora está pendurada nele como a
maior joia do mundo. Ele parece INSANO.
MATÉRIA
(para segurança)
Você tem que me deixar entrar! Preciso
ligar para avisar McQueen!
Os seguranças se olham. Isso é sério.
SEGURANÇA ITALIANA #1
Você não pode passar por aqui. Cópia de
segurança,signore.
SEGURANÇA ITALIANA #2
(em um walkie-talkie)
Temos um lunático no GateNovembro.
MATÉRIA
Não, ouça! Eu estava disfarçado de caminhão
de reboque para me infiltrar nesta reunião
de Lemonhead e meu sistema de armas
interpretou mal o que eu estava dizendo ---
SEGURANÇA ITALIANA #2
Eu repito. Lunático no PortãoNovembro.
Mater avista McQueen ao longe.
MATÉRIA
McQueen! McQueen!
APENAS FORA DO PALCO DE IMPRENSA - McQueen é conduzido em direção à saída.
CONTATO COM A IMPRENSA
Por aqui,signore.
MATER (OS)
(distante)
McQueen!
McQueen
Mate?
McQueen olha para cima, mas só consegue ver UM MAR DE VEÍCULOS,
flashes, câmeras, caminhões de TV com aquelas antenas de satélite
altas, coisas que giram em direção ao céu...
DE VOLTA À BARRICADA DE SEGURANÇA - Mater, como um ágil running back,
dança para evitar ser capturado pela segurança.
MATÉRIA
McQueen!
SEGURANÇA ITALIANA #1
Faça backup, senhor. Pare de se mexer! Parar!
Mater Head os finge e avança para a multidão ---
SEGURANÇA ITALIANA #1
Oi! Parar!Ferma li!
NA MULTIDÃO - Mater abre caminho. Ele ainda está bem atrás.
MATÉRIA
McQueen!
EM MCQUEEN
McQueen
Isso realmente parecia Mater. Mate?
CONTATO COM A IMPRENSA
(para McQueen)
Signor...
NO MATER, cada vez mais perto...
MATÉRIA
McQueen, eles vão te matar!!
ON MCQUEEN - Ok, ele tem certeza que era amigo dele, mas onde ele
está?
McQueen
Matéria?!
McQueen avista um TOW HOOK, movendo-se no meio da multidão em sua
direção, como “Tubarão”.
McQueen
Com licença.
McQueen desaparece no meio da multidão da imprensa.
CONTATO COM A IMPRENSA
Não, não, onde você está indo? Por
favor, Sr. McQueen!
McQueen passa pela imprensa.
McQueen
Scusi. Mater!Scusi...
McQueen rastreia o gancho de reboque e se aproxima. Ele empurra os
últimos veículos ---
McQueen
Mater, estou tão feliz em ver você. Sinto
muito ---
NÃO É MATÉRIA. É o IVAN, o guincho do Hugo Thug.
IVAN, O CAMINHÃO DE REBOQUE
Relâmpago McQueen! Eu sou um grande fã.
McQueen
(confuso)
Oh, me desculpe. Eu pensei ter ouvido ---
IVAN, O CAMINHÃO DE
REBOQUE Sim, mas fui eu. Eu disse: “Você
matou lá fora hoje”. Você é o melhor.
McQueen
O que? Oh. Quero dizer, obrigado.
CONTATO COM A IMPRENSA
Por aqui,signore---
Agora, o representante da imprensa e seus assistentes estão empurrando
McQueen na outra direção ---
McQueen
(enquanto ele se afasta)
Eu realmente pensei ter ouvido meu amigo.
Enquanto ele se afasta, a imprensa e os curiosos começam a se
colocar entre ele e Ivan, que não se mexe.
IVAN, O CAMINHÃO DE
REBOQUE (para McQueen)
Na Inglaterra você estará acabado. Na
linha de chegada.
Ivan agora está obscurecido novamente.
McQueen
Espere o que?
A IMPRENSA ITALIANA está fervilhando.
CONTATO COM A IMPRENSA
Por favor, a imprensa mundial está esperando.
Você vem comigo, por favor.
McQueen é puxado para trás ---
EXT. RUA - PORTO CORSA - MOMENTOS DEPOIS
- - - assim como Mater, agora amarrado e com a boca tapada, é puxado e
jogado na traseira de um veículo de transporte. Ele cai de lado e cospe sua
FITA.
MATÉRIA
Me deixar ir!
PROFESSOR ZUNDAPP
Você realmente se preocupa com aquele carro
de corrida. Pena que você não o avisou a tempo.
À medida que as portas se fecham em Mater --- PHHHHHSSSSSSTTTTTTT!
Um gás espesso e nocivo começa a encher o caminhão.
No MATER, enquanto o gás nocaute faz sua mágica. SEUS OLHOS SE FECHAM.
CORTE PARA:
TELA PRETA.
MATER (VO)
Idiota? É assim que você me vê?
FINN (VO)
É assim que todo mundo vê você. Eu lhe
digo, essa é a genialidade disso.
FADE IN em Mater, de volta ao Cassino, olhando seu reflexo na janela de vidro.
É o mesmo momento de antes, exceto que agora estamos assistindo de uma
PERSPECTIVA DESTACADA E FLUTUANTE.
FINN (NO RÁDIO)
Ninguém percebe que está sendo
enganado porque está muito ocupado
rindonoo bobo.
- NO TEATRO KABUKI NO JAPÃO - Novamente, de antes. Mater faz um
espetáculo de si mesmo, GRITANDO E GRITANDO nas arquibancadas com a
pintura facial.
MATÉRIA
Domo arigato!
McQueen, Fillmore, Guido, Luigi, Sarge e os clientes olham para Mater,
envergonhados e zangados.
- NO MUSEU JAPONÊS - Momento de Mater batendo no vidro do jardim de
pedras Zen. Exceto que agora vemos todos os tipos de reações de decepção e
de levantar as sobrancelhas.
MATÉRIA
Você se saiu bem! Você pegou todas as
folhas!
JEFF GORVETTE
Confira aquele caminhão de reboque.
LEWIS HAMILTON
Eu me pergunto com quem esse cara está?
McQueen
(humilhado)
Vocês podem me dar licença só por um
segundo?
Agora REVELAMOS que esta PERSPECTIVA FLUTUANTE DE TERCEIRA PESSOA é
MATER. Ele está DENTRO de seu passado, observando-o do ponto de vista dos
outros. Ele não gosta do que vê.
- NO MATER, agora no sushi bar.
MATÉRIA
Agora isso é uma bola de sorvete!
Mater engole o wasabi com uma grande mordida. Ele GRITA! Os clientes do
sushi bar empalidecem de repulsa ao seu lamento.
- NA FONTE, enquanto Mater aparece à vista de todos os outros na festa.
Enquanto Mater bebe água de uma fonte:
McQueen
(envergonhado)
Matéria?!
TODOS OS RACERS, com FRANCESCO na frente e no centro, riem de Mater.
- Em MCQUEEN, agora repreendendo Mater momentos depois.
MATÉRIA
Eu nunca vazo óleo. Nunca.
McQueen
Mater, você tem que se controlar. Você
está fazendo uma cena!
- NA MCQUEEN'S PIT GARAGE, após a corrida japonesa.
MATÉRIA
Espere um minuto. Eu não estraguei você,
não é?
McQueen
Perdi a corrida por sua causa!
MATÉRIA
Talvez se eu falasse com alguém, ou...
McQueen
Eu não preciso de sua ajuda. Eu não
quero sua ajuda!
- Agora DE VOLTA À FESTA, um momento que não víamos antes mas que
presumivelmente aconteceu. Mater está BATENDO um GONG cerimonial,
para horror dos convidados japoneses.
MATÉRIA
Bata um gongo, vá em frente!
VAI!!! ---
Nos PARTYGOERS, RACE CARS, PARTY STAFF - todos estão rindo de Mater
enquanto as palavras finais de McQueen se misturam, formando uma
cacofonia insatisfeita
McQueen
Ouça, isto não é Radiator Springs. É
exatamente por isso que não levo você
nessas coisas!
Fora do GONG na festa ---
INT. GRANDE BENTLEY - DIA
- - - para o GONG de um RELÓGIO.
CLOSE ON MATER enquanto ele abre os olhos.
Ao seu redor, tudo o que ele vê são PEÇAS GIGANTES DE UM RELÓGIO
MECANIZADO.
HOLLEY e FINN também estão aqui, amarrados pára-choques com pára-choques
nos buracos de grandes movimentos de relógio.
MATÉRIA
Holley! Finn! Onde estamos?
FINAL
Estamos em Londres, Mater. Dentro do Grande
Bentley.
EXT. BIG BENTLEY - CONTÍNUO
A MÃO GRANDE termina AVANÇANDO um minuto. São 15h.
INT. BIG BENTLEY - CONTÍNUO
De repente, Mater CAI RAPIDAMENTE em direção a ---
- - - máquinas zumbindo e assustadoras.
MATÉRIA
Uau! ---
O QUE! A corrente para.
Mater, em vez de estar a 9 metros da morte, agora tem 20.
Finn e Holley estão apenas alguns cliques mais perto de serem esmagados. O
relógio marca 3h01.
MATÉRIA
Isto... isto é tudo culpa minha.
FINAL
Não seja tolo, Mater.
MATÉRIA
Mas eu sou, lembra? Você disse então.
FINAL
Quando eu... Ah. Mater, eu estava
elogiando você por ser um bom espião.
MATÉRIA
Eu não sou um espião!
Isso ecoa durante todo o relógio.
MATÉRIA
Eu tenho tentado te dizer isso o tempo todo.
Na verdade, sou apenas um caminhão de
reboque.
Finn e Holley entendem isso.
HOLLEY
Finn, ele não está brincando.
FINAL
Eu sei.
MATÉRIA
Você estava certo, Finn. Eu sou um idiota. E
o que aconteceu com McQueen é porque eu
sou um grande problema. Isso é tudo minha
culpa.
GREM e ACER chegam em um elevador e aparecem em uma passarela.
GREM
Bom, você está de pé!
ACER
E bem na hora!
GREM
O Professor Z queria que você tivesse um
lugar na primeira fila pela morte de
Relâmpago McQueen.
MATÉRIA
(esperançoso)
Ele ainda está vivo?
Acer afasta uma folha, revelando a CÂMERA WGP, e vira-a em direção ao
mostrador do relógio.
ACER
Não por muito mais tempo.
Ele empurra a câmera através de uma pequena janela aberta e a vira na
direção do campo. Mater cai novamente ---
FINN e HOLLEY CLIQUEM EM FRENTE.
EXT. LONDRES - DIA
A grande mão de Big Bentley CLICA à frente por mais um minuto. Mas estamos
um pouco mais longe disso do que antes.
SALLY (OS)
Viemos assim que você ligou.
INT. POÇO DE MCQUEEN - LONDRES
Sally, ladeada por Red, Flo e Ramone, estão na frente de ----
- - - McQueen e o resto da equipe.
McQueen
Liguei para falar com Mater. Nunca me
ocorreu que ele não estaria lá.
RAMONE
O Xerife está conversando com a Scotland Yard
neste momento.
FLO
E Sarge está em contato com seus
amigos do exército britânico.
SALLY
Você só precisa se concentrar na corrida.
McQueen
Eu sei, mas Sal, com tudo o que está
acontecendo, não tenho certeza se deveria...
A HORN OS Alguém está entrando no poço. Todos se separam,
revelando MILES AXLEROD.
McQueen
Senhor Axlerod.
MILHAS AXLEROD
Lamento interromper.
McQueen
Não, não, está tudo bem.
MILHAS AXLEROD
Eu só queria vir aqui e agradecer
pessoalmente. Porque depois da Itália, eu
estava acabado. E então você me deu uma
última chance.
McQueen
Ouça, eu ---
MILHAS AXLEROD
E eu provavelmente não deveria estar
dizendo isso, mas... espero que você ganhe
hoje. Mostre ao mundo que eles estão
errados sobre o Allinol.
McQueen percebe isso. Ele olha para Sally.
SALLY
Mater gostaria que você corresse.
McQueen
Tudo bem. Para Mater.
EXT. A GRELHA DE PARTIDA - MOMENTOS DEPOIS
PNEUS GRITANDO ---
MCQUEEN, FRANCESCO e os outros pilotos PEEL OUT ---
Nós PAN UP para revelar os LEMONHEADS assistindo de um camarote VIP.
EXT. CURSO DE CORRIDA - LONDRES - DIA
McQueen lidera Francesco enquanto eles se aproximam do Big Bentley...
INT. BIG BENTLEY - LONDRES - CONTÍNUO
GREM
Aí vem ele!
Grem aumenta o suco para o NÍVEL MAIS ALTO, QUE INDUZ A MORTE.
Holley e Finn assistem, indefesos. Mate fecha os olhos.
Grem ZAPS MCQUEEN.
EXT. CURSO DE CORRIDA - LONDRES
McQueen PASSA POR Big Bentley, ileso. Alheio ao que deveria ter acontecido.
INT. BIG BENTLEY - LONDRES
Zundapp de repente GRITA no rádio.
PROFESSOR ZUNDAPP (NO RÁDIO) O
que aconteceu!?
GREM
Não sei, professora.
ACER
O que você fez?
GREM
(para Acer)
Eu não fiz nada. Shh! Estou
conversando com o professor ---
Estão todos falando ao mesmo tempo e por um momento não
conseguimos entender o que está sendo dito.
ACER
Você o quebrou.
GREM
(no rádio)
Quieto!
Eu entendo, senhor. Sim.
Grem desliga.
ACER
O que ele disse?
GREM
Vamos para o plano de backup.
MATÉRIA
Plano B??
GREM
Colocamos uma bomba na cova do McQueen!
ACER
Na próxima vez que ele parar, em vez de
dizer “ka-chow”, ele fará “ka-boom”!
Eles riem. Mater estremece, chateado.
GREM
Não se sinta mal, caminhão de reboque.
Você não poderia tê-lo salvado.
ACER
Oh espere. Você pode ter!
Grem e Acer riem. Ao entrarem no elevador:
MATÉRIA
Limões papai.
COMPUTADOR DO MATER
Solicitação reconhecida.
De repente, as GATLING GUNS de Mater giram novamente - uma surpresa
para Mater. Mas eles GIRAM NO LUGAR, vazios.
Grem e Acer apenas riem mais.
GREM
O quê, você não achou que pegaríamos
suas balas?
Mater OBSERVA ALGO.
FECHAR O QUE MATER VÊ: Um pequeno pedaço de suas cordas foi
raspado pelo Gatling.
Ele cuidadosamente gira suas armas de volta, fingindo que não viu nada.
ACER
Isso mesmo! Você não tem nada.
GREM
(enquanto o elevador desce)
Quem é o limão agora, hein?
Eles foram embora.
FINAL
Boa tentativa, Mater.
MATÉRIA
Papai!
COMPUTADOR DO MATER
Solicitar confirmação
As armas GIRAM NOVAMENTE, GIRAM. Mater observa enquanto os
barris giratórios CORTAM nas cordas, causando alguns danos.
MATÉRIA
Papai! Papai! Papai!
O COMPUTADOR responde com cada “papai”. Os barris continuam a
GIRAR, CORTANDO as cordas.
MATÉRIA
Dadgumdadgumdadgumdadgum ---
PING! As cordas se rompem e Mater CAI --- direto na direção do maquinário
que zumbia!
HOLLEY
Mater!
Mater BATA RAPIDAMENTE o cabo de reboque, engancha um cano e se
joga na rampa com um baque forte. Ele não hesita:
MATÉRIA
Preciso tirar todos vocês daí!
FINAL
Não há tempo. McQueen precisa de sua
ajuda, Mater.
MATÉRIA
Mas não posso, sou apenas um guincho.
FINAL
Você decide. Vá para os boxes e tire todo
mundo. Você pode fazer isso.
MATÉRIA
E vocês?
FINAL
Nós ficaremos bem.
HOLLEY
Vá e faça mais alguns amassados, Mater.
EXT. BIG BENTLEY - LONDRES
Mater sai correndo pela porta da frente, um morcego saído do inferno ---
INT. BIG BENTLEY - LONDRES - MESMO
Em Finn e Holley, agora mais perto da morte.
HOLLEY
Então ficaremos “bem”? Realmente?
FINAL
Ele não teria ido embora se eu lhe
contasse a verdade.
(re: sua armadilha mortal) Sendo morto
por um relógio. Dá um novo significado a
“sua hora chegou”.
Com essa menção, Holley parece se animar e tem uma ideia.
HOLLEY
Tempo. É isso!
Ela avista uma CAIXA DE ENGRENAGENS abaixo deles, a pelo menos 6 metros de profundidade.
Holley DISPARA SEUS ELETROCHOQUES ---
- - - mas eles erram o alvo. Ela os recua.
FINAL
O que você está fazendo?
HOLLEY
Tentando voltar no tempo. Se eu puder
inverter a polaridade...
Ela os dispara novamente. Ataque direto!
Holley SUCULA a caixa de câmbio com ALTA TENSÃO. O RELÓGIO PARA. Ele se
inverte.
A roda de Finn e Holley agora gira para longe do perigo.
FINAL
Bom trabalho! Pensamento rápido, Holley!
EXT. LONDRES - CONTÍNUO
BIG BENTLEY, visível do nível da rua, agora se move PARA TRÁS. Rápido.
GUINDASTE PARA ---
- - - Mater, acelerando em direção à pista, inconsciente.
MATÉRIA
Por que todo mundo está do lado errado da
estrada?!
INT. BIG BENTLEY - CONTÍNUO
Finn e Holley estão agora se movendo na direção oposta, em direção a
OUTRA ENGRENAGEM! E está indo MUITO MAIS RÁPIDO. Eles estão a
segundos de uma morte esmagadora...
HOLLEY
Oh não!
FINAL
Dirigir!
Ambos CONDUZEM o mais rápido que podem com FULL FORCE ---
FINAL
Queime borracha!!
Eles dirigem MAIS FORTE, separando pára-choques com espaço suficiente
para a marcha descendente estalar suas cordas!
Com os pneus girando, ambos LANÇAM em direções opostas e ATERRAM
COM FORÇA em plataformas opostas. Enquanto Finn grita para o lado do
relógio de Holley:
FINAL
Temos que ir para o curso. Calcule o
caminho mais rápido para ---
Holley tira ASAS do seu lado.
HOLLEY
Feito.
FINAL
(impressionado)
Senhorita Shiftwell.
HOLLEY
Eles são um problema padrão agora.
FINAL
Vocês, crianças, recebem todo o bom hardware.
Eles se viram para sair quando PARAM, veem ALGO. É um FILTRO DE AR no
chão.
HOLLEY
Oh não. Esse é do Mater.
FINAL
Eu sabia que sua fuga foi muito fácil.
EXT. BIG BENTLEY - LONDRES
Finn irrompe pelas portas da frente do Big Bentley, acelera enquanto HOLLEY
ESMAGA através do mostrador do relógio, aparece voando sobre o trânsito ---
INT. PIT ROW - LADO DA PISTA - DIA
Mater irrompe pelo portão de segurança com segurança, atravessa os
boxes e para no MCQUEEN'S.
LUIGI
Mater!
MATÉRIA
Todos saiam! Saia agora! Vocês têm que
sair dos buracos!
TODA A GANGUE RADIADOR SPRINGS está aqui.
MATÉRIA
Ei, o que vocês estão fazendo aqui?
SALLY
Estamos aqui por sua causa, Mater.
FLO
Está tudo bem?
MATÉRIA
Não! Não está tudo bem! Tem uma bomba
aqui! Vocês precisam sair! Agora!
TODOS
- Uma bomba? - Huh? - Uau.
FINN (NO RÁDIO)
Mater!
MATER (NO RÁDIO)
Finn! Você está bem!
EXT. RUAS DE LONDRES - CONTÍNUO
FINAL
Mater, me escute. A bomba está ligada você .
NO DISPLAY TRASEIRO: Podemos ver que uma BOMBA foi detectada,
ancorada no filtro de ar do Mater.
FINAL
Eles sabiam que você tentaria ajudar
McQueen. Quando fomos nocauteados, eles
colocaram-no no seu filtro de ar.
INT. POÇO DE MCQUEEN - CONTÍNUO
Mater SNORTS, soprando a tampa do filtro de ar. Estrábico, Mater vê o
dispositivo explosivo preso a ele. Ele olha para cima:
Um RECIPIENTE DE ALLINOL paira ameaçadoramente sobre sua cabeça.
MATÉRIA
Ah, ah.
McQueen
Mater! Aí está você!
Mater se vira. McQueen entra no Pit Row, a 100 metros de distância e
fechando em RÁPIDO.
MATÉRIA
Pare aí mesmo!
McQueen
Oh cara, estive tão preocupado com você!
CORTE PARA:
A visão dessa cena pela janela de um camarote luxuoso. Revele o Zundapp no
reflexo da janela. Ele está observando de dentro. Ele está pronto para apertar
um BOTÃO DETONADOR.
À medida que o pneu dianteiro do Zundapp se aproxima do detonador ---
INT. POÇO DE MCQUEEN - CONTÍNUO
MATÉRIA
Não chegue mais perto!
McQueen
Você está bem?
MATÉRIA
Não, não estou bem. Fique longe de
mim!!
Mater DESCASCA PARA TRÁS, na pista.
McQueen
Não, espere. Espere!
CORTE PARA:
PROFESSOR ZUNDAPP - Ele hesita, não acredito.
FILMES DE TV DE MCQUEEN CHASING MATER
BRENT MUSTANGBURGER (VO)
Espere tudo. Um caminhão de reboque acaba
de entrar na pista. E ele está dirigindo para
trás!
NO POÇO DE MCQUEEN
McQueen
Mater, espere!
Ele passa direto pelo buraco e vai atrás de Mater.
DAVID HOBBSCAP (VO)
Normalmente, um veículo de emergência
na pista significa que houve um acidente.
BRENT MUSTANGBURGER (VO)
Espere, espere. Relâmpago McQueen o está
perseguindo!
EXT. PISTA - DIA
Mater sobe a pista. McQueen ganha rapidamente. Como Mater está andando
para trás, eles ficam cara a cara (mas ainda com alguma distância entre eles).
McQueen
Mater, espere!
MATÉRIA
Fique atrás! Se você chegar perto de mim,
você vai se machucar muito!
McQueen
Eu sei que já fiz você se sentir assim
antes, mas nada disso importa porque
somos melhores amigos!
CORTE PARA:
FILMES DE TV DE MCQUEEN CHASING MATER
BRENT MUSTANGBURGER (VO) E
McQueen parece estar conversando com o
caminhão de reboque!
DARRELL CARTRIP (VO)
Não sei quem é aquele caminhão, Brent. Mas
vou te dizer uma coisa, ele deve ser o melhor
piloto de ré do mundo.
REVEAL ZUNDAPP está assistindo a esta filmagem em seu camarote luxuoso.
Quanto mais perto McQueen chega de Mater, mais seu pneu ROLA no
detonador. Mas ele se segura um pouco para não se precipitar.
NA PISTA - McQueen ganha em Mater.
MATÉRIA
McQueen, você não entende. Eu sou a
bomba!
McQueen
Sim, Mater! Você é a bomba! É isso que estou
tentando dizer aqui. Você sempre foi a
bomba! E você sempre será a bomba.
MATÉRIA
Ficar longe!
McQueen
Não! Nunca!
NO ZUNDAPP. Ele observa McQueen ACELERAR.
PROFESSOR ZUNDAPP
Quase lá...
EM MCQUEEN. Ele já está farto de brincadeiras. Aí vem ele.
McQueen
Eu não vou... deixar você...
Ele vai pegá-lo agora.
McQueen
. . . vá embora de novo!
McQueen SALTA PARA FRENTE, na tentativa de agarrar o GANCHO de Mater ---
MATÉRIA
(para ele mesmo)
Tenho que ficar longe do McQueen.
McQueen fisga Mater com seu pára-choque ASSIM COMO ---
COMPUTADOR DO MATER
Solicitação reconhecida.
FOGUETES DE TURBINA deslizam para fora do Mater.
McQueen
Oh meu Deus!
BAWHOOOOOOM!!!!! Mater SALTA para frente com um lançamento de
foguete e desaparece, levando McQueen com ele.
NO ZUNDAPP. Ele agora EMPURRA livremente o detonador, mas diz “FORA
DE ALCANCE”.
Zundapp não consegue acreditar. Ele sai.
MAIS AINDA NA PISTA - Francesco acelera. ZHWAAAAAAP!!! Mater e
McQueen ZING PASSAM POR ELE com um BLUR VERMELHO.
FRANCESCO
O que está acontecendo? É um sonho
ruim.
AGORA AINDA MAIS ALTO NA PISTA - Mater dá uma volta, ATRAVÉS DE UMA
CERCA e derrapa em uma esquina, desaparecendo de vista. Um JET TRAIL
branco e esfumaçado é tudo o que resta.
NO POÇO DE MCQUEEN - Todos em Radiator Springs assistem aos
monitores de televisão, estupefatos.
BRENT MUSTANGBURGER (VO) E
Relâmpago McQueen simplesmente explodiu,
preso ao caminhão de reboque agora movido a
foguete.
CORTE PARA:
EXT. RUAS DE LONDRES - DIA
POV aéreo: Mater e McQueen desviam pelas ruas.
INT. BOX LUXO - CONTÍNUO
Zundapp ainda está apertando furiosamente o botão quando Holley aparece
logo além do vidro.
Assustado, Zundapp dá uma volta de 180° e quebra uma janela de vidro, pousa
em um balão ridiculamente grande amarrado ao chão e sai em alta velocidade
---
INT. BOX LUXO ADJACENTE - CONTÍNUO
Os LEMONHEADS assistem, perplexos, enquanto Zundapp vai embora.
J. CURBY GREMLIN
O professor está fugindo.
PACER TUBBS
Alguém precisa pegar McQueen.
VLADIMIR TRUNKOV
Pegue McQueen!!
Grem e Acer já estão fora de casa ---
EXT. RUA LATERAL - MESMA
Finn aparece rapidamente, a tempo de ver Zundapp virar uma esquina e
desaparecer de vista.
FINAL
Holley. Vou chamar o Zundapp, você ajuda o
Mater.
EXT. PISTA - MESMO
Holley, ainda no ar, vira ---
HOLLEY
Entendi!
Mais adiante na pista - Holley passa por Francesco e desaparece de vista.
FRANCESCO
O que está acontecendo?!
EXT. RUAS DE LONDRES - MESMAS
Finn grita em uma esquina e vê ---
- - - Professor Zundapp, acelerando em direção às docas ao longo do Tâmisa, onde um
NAVIO DE COMBATE espera.
NAVIO DE COMBATE
Depressa, professora!
NO ZUNDAPP - Com Finn ganhando rápido, ele acelera. De repente
- - - O QUE!
Ele foi amarrado por Finn com cabos de tração agora presos à sua
extremidade traseira. Zundapp GRITA como uma garotinha.
FINAL
Você realmente acha que vou deixar você
flutuar, professor?
Finn o puxa. Zundapp gira as rodas e é pego.
De repente, Zundapp milagrosamente, inconcebivelmente, GANHA TRAÇÃO!
Agora são as RODAS DE FINN que estão girando.
NO NAVIO DE COMBATE - o ELETROÍMÃ foi virado para fora e ligado. Ele está
PUXANDO ZUNDAPP E FINN com a força magnética. Ele pega um laser e
aponta para o para-brisa de Finn.
CORTE PARA:
EXT. RUAS DE LONDRES - MESMAS
Mater, ainda rebocando McQueen, vira uma esquina e desce outra rua ---
MATÉRIA
McQueen, solte!
McQueen
Nunca!
Eles passam por um Gremlin com fone de ouvido.
NO GREM E ACER - Por outra rua lateral. Eles entendem essa mensagem e
partem na direção oposta.
CORTE PARA:
EXT. DOCAS PERTO DO TAMISA - CONTÍNUO
FINN, com os pneus cantando, perde cada vez mais terreno para o barco.
Zundapp, a “corda” neste cabo de guerra, cede sob a tensão.
PROFESSOR ZUNDAPP
Desista, McMíssil!
Finn lança uma confusão de balas, granadas e outras armas no ar ---
O ÍMÃ SUGA rapidamente como um buraco negro ---
PENSE! Tudo gruda no ímã, bem próximo às balas de Finn. São BOMBAS,
GRANADAS, FOGUETES e um pequeno detonador com uma luz piscando
e apitando.
Fora do RXN do barco ---
CORTE PARA:
OUTRA PARTE DE LONDRES, A NÍVEL DA RUA
KA-BOOOOOOM! Uma explosão distante (a quilômetros de distância) surge
no ar, visível sobre os telhados. Holley de repente ASAS aparece. Ela vê ---
Mater e McQueen, acelerando a rua.
HOLLEY
Mater, pare!
MATÉRIA
Sem chance! Você pode se machucar!
Então ela olha e vê GREM E ACER avançando sobre eles vindos de uma rua
lateral. Eles vão atacar Mater e McQueen.
HOLLEY
Oh não.
SOBRE MATER E MCQUEEN – Eles não estão cientes do impacto iminente.
Holley CAI DO CÉU, bate na calçada, derrapa no caminho dos AMCs e os
desvia. Eles VIRAM Holley, Finn e McQueen e navegam ---
- - - EM UM PUB ---
- - - onde eles deslizam pela sala e batem no bar, derrubando uma fileira de
canecas de cerveja no chão.
NO PUB - MOMENTOS DEPOIS
Grem e Acer são pulverizados pelos clientes do bar.
EXT. RUA DE LONDRES - MOMENTOS DEPOIS
Holley, McQueen e Mater estão agora parados.
HOLLEY
Mater, temos que tirar essa bomba de
você.
Ela já está escaneando a bomba, trabalhando.
McQueen
Bombear?
MATÉRIA
Sim, eles me amarraram para matá-lo
como plano alternativo.
McQueen
Plano B? Mater, quem colocou uma bomba
em você?
PROFESSOR ZUNDAPP (OS)
Ahhhhh!
O professor Zundapp de repente ROLA e para ao lado de (agora totalmente
assustado) McQueen, enredado em ganchos aos cuidados de ---
- - - Finn, que o prendeu.
PROFESSOR ZUNDAPP
(para McQueen)
Você. Por que meu raio da morte não matou
você?
McQueen
Raio da morte?
FINAL
Desligue a bomba, Zundapp!
PROFESSOR ZUNDAPP
Vocês são todos tão densos? É ativado por
voz. Tudo é ativado por voz hoje em dia.
MATÉRIA
Desativar! Desativar!
VOZ DE COMPUTADOR DA BOMBA
Voz negada.
A BOMBA de repente se TRANSFORMA em uma BOMBA-RElógio, agora completa
com um mecanismo de contagem regressiva de 4:59... 4:58... Mater GASPS.
PROFESSOR ZUNDAPP
Ops. Esqueci de mencionar que só pode ser
desarmado por quem o ativou?
Holley imediatamente enfia uma ARMA na grelha de Zundapp.
HOLLEY
Diz!
PROFESSOR ZUNDAPP
Desativar.
VOZ DE COMPUTADOR DA BOMBA
Voz negada.
O TEMPORIZADOR DA BOMBA: Perde um minuto inteiro! Vai de 4:48 para
3:48 para 3:47... Mater GASPS.
PROFESSOR ZUNDAPP
(sorrindo)
Não fui eu quem o ativou. Alguém mais
gostaria de tentar?
ZZZZZZATTT! Holley o deixa inconsciente.
FINAL
(para Holley)
Você leu minha mente.
HOLLEY
Ele estava me irritando.
McQueen
O que nós fazemos?
VICTOR HUGO (OS)
É muito simples.
VICTOR HUGO bloqueia a entrada de uma rua lateral. Ele está cercado
por parentes de Hugo.
VICTOR HUGO
Você explode.
As quatro ruas que os cercam estão agora bloqueadas por cada um dos
Lemonheads e suas famílias.
McQueen
(para Mate)
Eu vou me arriscar aqui. Esses são os
caras que me querem morto, correto?
VLADIMIR TRUNKOV
Não é nada pessoal.
MATÉRIA
(para os limões)
Fellers, ouçam.
(MAIS)
MATER (CONTINUAÇÃO)
Eu sei o que você está passando. Todo
mundo também riu de mim durante toda a
minha vida ---
McQueen se volta para Mater – ele não esperava por isso.
Todos os Limões se olham, considerando as palavras de Mater.
MATÉRIA
- - - mas tornar-se poderoso e rico além dos
seus sonhos não vai fazer você se sentir
melhor.
J. CURBY GREMLIN
Sim, mas vale a pena tentar.
QUEM!!! Ele é BROADSIDED por uma rajada de água do SO
É vermelho! Ele está sentado do lado de fora de uma entrada subterrânea,
seguido por Sally e o resto da gangue de Radiator Springs.
A GUERRA TOTAL acontece entre os LIMÕES, RADIATOR SPRINGS junto com
FINN e HOLLEY.
FINN prende seus ganchos de cabo de quatro vias aos bandidos e salta no ar,
esmagando os quatro juntos.
HOLLEY abre as asas e derruba dois carros ao seu lado.
VÁRIAS FOTOS DE MOLAS DO RADIADOR CHUTANDO BUNDA:
Guido tira alguns pneus LEMON com sua pistola de ar comprimido. Em
segundos ele tem uma pilha de nozes ao seu lado.
GUIDO
Parada.
Os pneus dos dois Pacers CAIAM.
Flo atinge VLADIMIR TRUNKOV com seu farol alto, CEGANDO-O. O xerife dá
um BOOT nele.
XERIFE
Hoje não, rapazes!
Guido afasta seu bandido incansável, GRITANDO COM ELE EM
ITALIANO.
Mater KARATE CHOPS limões, três e quatro de cada vez.
Ramone PINTA SPRAY o para-brisa de um limão.
PACER TUBBS
Retiro!
Alguns limões voltam por onde vieram. BLOCKING THEIR PATH é uma linha de
VEÍCULOS MILITARES BRITÂNICOS vestidos com camuflagem digital, liderada
por SARGE.
SARGE
Obrigado pela ajuda, Cabo.
CABO BRITÂNICO
Qualquer coisa por um dos amigos do pop.
E no meio de toda essa loucura CORTAMOS PARA ---
- - - MATÉRIA. PEDAÇOS DE CHAVE estão espalhados ao seu redor
enquanto Guido tenta chave após chave para tirar os parafusos. Sem
dados. Guido gesticula descontroladamente, cospe italiano a mil por hora.
McQueen
O que ela está dizendo?! O que está errado!?
LUIGI
Nenhuma de suas chaves cabe nos parafusos!
Este é um momento luminoso para Mater. Ele olha os parafusos.
MATÉRIA
Entendo. Entendo! Eu sei o que precisa
ser feito.
McQueen
Então faça!
MATÉRIA
O que? Não, eu não posso fazer isso. Olha,
ninguém me leva a sério. Eu sei disso
agora. Isto não é Radiator Springs.
McQueen
É sim.
Mater olha para McQueen. Isso é?
McQueen
Você está em Radiator Springs. Seja você
mesmo aqui. E se as pessoas não estão
levando você a sério, entãoelesprecisa
mudar. Você não. Eu sei disso porque estava
errado antes. Agora você pode fazer isso.
Você é a bomba.
MATÉRIA
Obrigado parceiro.
McQueen
Não, não, não, você é orealbombear.
Agora vamos!
MATÉRIA
Oh, certo! Espere!
Mater GANHA McQueen e eles vão embora.
Eles ATIRARAM EM FINN, que está no meio de uma batalha contra limões.
FINAL
Aonde ela está indo?
SOBRE MATER E MCQUEEN - Voando por uma rua lateral.
MATÉRIA
Computador!
COMPUTADOR DO MATER
Sim, Agente Mater.
MATÉRIA
Preciso daquilo que você fez antes para me
afastar do McQueen!
COMPUTADOR DO MATER
Solicitação reconhecida.
Os PROPULSORES DE FOGUETES entram em ação. Eles vão direto para uma PAREDE.
McQueen
Matéria...
MATÉRIA
Agora preciso que você faça o chute, o
segundo tipo não é o primeiro!
COMPUTADOR DO MATER
Implantando rampa.
A rampa de Mater se abre, pegando ar e enviando Mater e McQueen
NAVEGANDO PARA O AR.
Mater começa a orientá-los na direção que deseja. Ele e McQueen estão
VOANDO SOBRE LONDRES.
EXT. VARANDA - PALÁCIO DE BUCKINGHAM - DIA
A RAINHA, seus assistentes e diversos dignitários estão aqui.
RAINHA
Quem está ganhando a corrida?
Mater e McQueen caem do céu. Eles pousam e param pouco antes dos
guardas da Rainha sacarem suas armas.
GUARDA DA RAINHA
Cópia de segurança! Afaste-se!
RAINHA
(atingido por uma estrela)
É o Relâmpago McQueen!
GUARDAS DA RAINHA
Voltam!
McQueen
Não, não, está tudo bem! Diga a eles,
Mater. Explicar.
MATÉRIA
OK! Alguém está sabotando os pilotos e
danificando os carros e eu sei quem. Ah,
espere... Seu
Majestade.
Mater se curva para a rainha. Ao fazer isso, o TICKING TIME BOMB aparece.
O relógio está em T menos 1:53.
GUARDAS DA RAINHA
- Bombear! - É uma bomba! - Todo mundo
para baixo! - Olhe!
FINN (OS)
Segure seu fogo! Ele não pode desarmá-lo!
Finn mergulha na plataforma e rola entre a Rainha e a Mater.
FINAL
Mater, não sei o que você está fazendo,
mas afaste-se agora!
MATÉRIA
(à parte, para McQueen)
Isto não é nada parecido com Radiator
Springs.
McQueen
Mater, vá direto ao assunto!
MATÉRIA
OK.
Ele se volta para Miles Axlerod.
MATÉRIA
É ele.
MILHAS AXLEROD
O que? Meu? Você deve estar louco.
Todos trocam olhares confusos, incluindo Finn e Holley.
MATÉRIA
Eu descobri quando percebi que todos vocês
anexaram esta bomba-relógio com parafusos
Whitworth. Os mesmos parafusos que
prendem aquele velho motor britânico da
fotografia. Holley! Mostre essa foto.
HOLLEY
OK...
Holley projeta a tão discutida FOTO DO MOTOR.
MATÉRIA
E então me lembrei do que dizem sobre os
antigos motores britânicos: “Se não há óleo
embaixo deles, não há óleo neles”.
MILHAS AXLEROD
Do que ele está falando?
MATÉRIA
Foi você vazando óleo na festa no Japão. Você
acabou de me culpar.
MILHAS AXLEROD
Carros elétricos não usam óleo, seu
idiota.
MATÉRIA
Então você está fingindo. Você não se
converteu para nenhum elétrico. Abrimos o
capô e veremos o motor daquela foto ali.
Mater se move em direção a Miles Axlerod para abrir o capô.
MILHAS AXLEROD
Este caminhão é uma loucura. Ele vai
matar todos nós!
Miles Axlerod RECUA até a beira do palco.
MILHAS AXLEROD
Ficar longe!
HOLLEY
Mas Sir Axlerod criou a raça, Mater. Por
que ele iria querer machucar alguém?
MATÉRIA
Para fazer com que o Allinol ficasse mal, para
que todos voltassem a usar óleo. Quero dizer,
ele mesmo disse isso com aquela voz
disfarçada.
MILHAS AXLEROD
“Voz disfarçada de Dee?” O que você está
falando? Você é louco, você é!
Os GUARDAS DA RAINHA já estão fartos. Assim como o PRÍNCIPE.
PRÍNCIPE WHEELIAM
Isso não vai a lugar nenhum rápido.
Nós realmente deveríamos ir, vovó.
RAINHA
Um momento. Eu gostaria de ver onde isso
vai dar.
FINAL
Mater, elecriadaAlinol.
MATÉRIA
Sim, mas e se ele encontrasse aquele enorme
campo de petróleo no momento em que o
mundo tentava encontrar outra coisa?
Mater enfia seu nariz de bomba na grelha de Miles Axlerod.
MATÉRIA
E se ele inventasse o Allinol apenas para fazer com
que o combustível alternativo parecesse ruim?
MILHAS AXLEROD
"E se?" Você está baseando isso em um “E
se”?!
GUARDA
Ok, é isso.
E os GUARDAS DA RAINHA tiram a Rainha e o Príncipe Wheeliam de lá
RAPIDAMENTE ---
MILHAS AXLEROD
Espere! Alguém me salve! O caminhão está uma
loucura!
Agora são apenas Miles Axlerod, Mater, McQueen, Finn e Holley. Os pneus
traseiros de Miles Axlerod escorregam na beira do pódio quando ele é
encurralado por Mater.
MILHAS AXLEROD
Fique longe, seu idiota!
00:00:08...
FINAL
Mater!
HOLLEY
Mater!
00:03...00:02...
MILHAS AXLEROD
Alguém faça alguma coisa!
Todos SE RECOLEM, PATAS ou MERGULHAM PARA SE COBERTAR, exceto
McQueen, Mater e Axlerod ---
MILHAS AXLEROD
Você é louco, você é!
Desativar!!
A bomba CONGELA às 00:01.
A VOZ DO COMPUTADOR DA
BOMBA Bomba desativada. Tenha um bom dia,
senhor Axlerod.
Choque geral ao redor. Miles Axlerod percebe o que fez e parece
aterrorizado. A polícia o cerca.
Mater FLINGS o capô de Miles Axlerod aberto com seu gancho, revelando
UM MOTOR DE COMBUSTÃO INTERNA, óleo pingando de todos os lados.
CORRESPONDE à foto.
FINAL
O motor da foto.
HOLLEY
É uma combinação perfeita!
MILHAS AXLEROD
Como o caminhão de reboque descobriu
isso?
McQueen
(para Mate)
É oficial. Você virá para todas as minhas
corridas de agora em diante.
MATÉRIA
Agora você está falando!
Batida de pneu.
EXT. PALÁCIO DE BUCKINGHAM - DIA
Uma enorme multidão lota as ruas e parques adjacentes.
INT. PALÁCIO DE BUCKINGHAM - DIA
Mater faz as “caretas bobas” necessárias na tentativa de quebrar a compostura
de um guarda do Palácio de Buckingham. Não está funcionando. McQueen se
aproxima.
McQueen
Mater, vamos embora. Você está ligado.
INT. CÂMARA DA RAINHA - PALÁCIO DE BUCKINGHAM - DIA
A Rainha está sentada em posição de sentido na frente do salão de baile
principal. Conforme abordagem de Mater e McQueen:
SENHOR STEWARD
Sua Majestade. Posso apresentar-me para a
investidura do título de Cavaleiro Honorário
do Reino Britânico. Mater de reboque de
molas de radiador.
McQueen
Vá buscá-los, amigo.
McQueen se junta a seus amigos de Radiator Springs. Mater avança. Ele se
curva, como se tivesse praticado isso o dia todo.
RAINHA
Eu, por meio deste, te chamo de "Sir Tow Mater".
Aplausos de todos os lados.
MATÉRIA
(olha para cima)
"Senhor?" Droga, você pode me chamar de
Mater, Sua Majestade. Não quero ouvir
nada sobre esse negócio de “Senhor”. A
propósito, vocês já se conheceram? Rainha?
McQueen. McQueen, Rainha. McQueen?
McMíssil.
(MAIS)
MATER (CONTINUAÇÃO)
McMíssil, McQueen. Rainha?
McMíssil.
Ele continua apresentando a todos enquanto CORTAMOS PARA ---
EXT. MOLAS DO RADIADOR - DIA
A placa da cidade agora diz “BEM-VINDO A RADIADOR SPRINGS - CASA DE
LIGHTNING MCQUEEN E SIR TOW MATER”.
EXT. FLO'S - DIA
Carros cercam Mater e McQueen. O resto da turma de Radiator Springs
também está aqui, observa. VAN e MINNY estão na frente e no centro.
MATÉRIA
Então lá estava eu: foguetes a jato a todo
vapor, McQueen se segurando para salvar
sua vida quando de repente aqueles dois
limões nojentos surgiram do nada, armas em
punho. Estávamos perdidos. Mas então, do
nada, este lindo carro espião surge do céu
para nos salvar!
MINNY
Essa é uma história muito divertida, meu
jovem.
FURGÃO
Ah, Minny, por favor. Vamos lá, nada disso
aconteceu. Jatos-foguete? Carros espiões
voadores?
HOLLEY
Não, você está certo. Parece um pouco
rebuscado.
A multidão se vira, vê HOLLEY abrindo as asas e avançando. FINN está logo
abaixo dela, subindo a rua.
MATÉRIA
Holley! Finn!
HOLLEY
Olá, Mater. É tão bom ver você de novo.
MATÉRIA
O que você está fazendo aqui?
FINAL
Nossos satélites captaram um comunicado
urgente.
LUIGI
Então você recebeu meu e-mail.
MATÉRIA
Oh cara. Vocês vão se divertir muito. Todo
mundo! Este aqui é Finn McMíssil. Ele é um
agente secreto.
(sussurros)
Não conte a ninguém. E este é Holley
Shiftwell. Ela é ---
HOLLEY
Sou namorada do Mater. É tão bom
conhecer todos vocês.
Todo mundo está chocado. Incluindo Mater. O queixo de Guido cai.
LUIGI
(para Mate)
Guido acredita em você agora.
FLO
(para Holley)
Uau, querido. Você tem um amassado feio
aí.
Na verdade, Holley ainda apresenta marcas de quando salvou Mater de Grem e
Acer.
FURGÃO
(já apaixonado por ela) Foi quando
você apareceu e os salvou em Londres?
MINNY
Furgão!
FURGÃO
O que? Eu só estou perguntando.
FLO
(para Holley)
Não se preocupe, docinho. Meu bebê
Ramone pode consertar isso para você
rapidamente.
RAMONE
Sim, claro. Não há problema. Deixa-me ir
buscar as minhas ferramentas.
HOLLEY
Ah, não, não. Estou mantendo esse
amassado. É muito valioso.
Mater entende isso.
LIZZIE
Um dente “valioso”? Oh, ela é tão louca
quanto Mater.
MAC
Esses dois são perfeitos um para o
outro.
McQueen
Você sabe, há uma coisa que ainda não
entendi. Os bandidos me acertaram com o
feixe da câmera, certo? Então por que eu não,
você sabe...
MATÉRIA
Explodir em um inferno de fogo?
McQueen
Sim.
FINAL
Também não conseguimos descobrir
isso.
HOLLEY
Nossa investigação provou que Allinol era na
verdade gasolina. E Miles Axlerod o projetou
para que, quando fosse atingido pelo raio,
explodisse.
McQueen
Espere um segundo. Fillmore, você disse que meu
combustível era seguro.
McQueen se volta para Fillmore. Todo mundo faz.
FILMORE
Se você está insinuando que eu troquei
aquela desculpa esfarrapada por
combustível alternativo com meu biocombustível
totalmente natural, sustentável e orgânico só
porque nunca confiei em Axlerod, você está
completamente errado, cara.
(re: Sargento)
Era ele.
SARGE
Uma vez Big Oil, sempre Big Oil. Homem.
FILMORE
Abraçador de árvores.
EXT. RUA PRINCIPAL - MAIS TARDE
Um banner diz “Grande Prêmio de Radiator Springs”.
O XERIFE aparece na rua.
XERIFE
O Grande Prêmio de Radiator Springs está
prestes a começar! Todos os espectadores
saem da linha de partida!
MCQUEEN segue pela Main Street, seguido por outros pilotos.
LEWIS HAMILTON
Cara, mal posso esperar para começar a
arrasar. Isso vai ser perverso.
JEFF GORVETTE
Sim, deveríamos fazer isso todos os anos.
Imaginei que nunca descobrimos quem é o
carro mais rápido do mundo. E mais: sem imprensa, sem
troféu. Apenas corridas - do jeito que eu gosto.
FRANCESCO
Francesco também gosta desse jeito.
McQueen vê Sally. Ele e Francesco se aproximam dela.
MCQUEEN
Francesco. Eu gostaria que você conhecesse ---
FRANCESCO
Signorina Sally. É oficial: Relâmpago
McQueen é o carro mais sortudo do mundo.
SALLY
(desmaiando)
Obrigada!
FRANCESCO
E ele terá que ser assim para ter uma chance
contra Francesco hoje.
Francesco se vira para sair. Enquanto ele está se afastando:
FRANCESCO
Vejo você na linha de chegada, Mc...
Francesco pára.
FRANCESCO
O que é isso?
McQueen tem um novo adesivo para o para-choque: "Ka-ciao, Francesco".
MCQUEEN
É apenas algo que eu inventei para a
ocasião.
FRANCESCO
É bom, McQueen. Muito engraçado. Era mais engraçado
quando eu o fiz, mas é muito engraçado. O que você
vai fazer agora? Você vai tirar
seus para-lamas? Experimente. Você vai gostar.
Francesco vai embora. Ficamos com McQueen e Sally.
SALLY
Então ele não é tão bonito.
MCQUEEN
É verdade. Boa tentativa.
SALLY
Estou falando sério.
MCQUEEN
É por isso que eu amo você, Sally.
(enquanto ele sai)
Deseje-me sorte.
SALLY
Você não precisa disso!
Ele sai dirigindo. Flo se aproxima de Sally.
FLO
Mmm-mmm. Esse Francesco é
bonito.
SALLY
E essas rodas abertas.
FLO
Vou ter que comprar um pouco de
refrigerante.
EXT. RUA PRINCIPAL - MAIS TARDE
Os pilotos no grid de largada. No semáforo no centro da cidade. Ele
passa de VERMELHO para VERDE!
EXT. WILLY'S BUTTE - DIA
Enquanto os corredores, liderados por McQueen e Francesco, fazem a curva ampla e arrebatadora
em torno de Willy's Butte, vemos MATER, FINN, HOLLEY e a turma de
gangue de Radiator Springs assistindo. Todos aplaudem.
MATER
Força McQueen!!! Whoo-hoo!!!
Holley recebe um alerta.
HOLLEY
Finn, é hora de ir. O Siddeley está com gás,
engrenado e pronto para voar.
Finn começa a se afastar.
MATER
Você já está indo embora?
FINN
Temos outra missão, Mater. Só
Parei aqui para "pegar uma coisa".
Os dois olham para Mater, com expectativa.
MATER
Algo me diz que você não está falando
de adesivos de para-choque de lembrança.
FINN
Sua Majestade perguntou por você
pessoalmente, Mater.
MATER
Mas eu já lhe disse tudo antes. Não sou um espião.
HOLLEY
Nós sabemos.
FINN
Espião ou não, você ainda é o cara mais inteligente e
honesto que já conhecemos.
HOLLEY
Não se esqueça de que é extremamente charmoso.
Mater olha para Holley. Ele parece emocionado.
MATER
Bem, obrigado. Mas por mais divertido que tenha sido
estar com vocês, isso...
Ele olha para os amigos que assistem à corrida e torcem por MCQUEEN.
MATER
Aqui é o lar.
HOLLEY
Tudo bem, nós entendemos. Mas eu voltarei.
Você ainda me deve aquele primeiro encontro.
FINN
Se houver algo que eu possa fazer por você,
é só me avisar.
MATER
Bem, eu agradeço muito, obrigada.
(pensa)
Na verdade... há uma coisa.
CORTA PARA:
EXT. MOLAS DO RADIADOR - MOMENTOS DEPOIS
MATER, avançando rapidamente.
MATER
Whoo-hoo!!!
Ele se lança para a frente, atravessando toda a cidade. Ao fazer isso, ele agarra um
OTIS QUEBRADO, enganchando-o ---
OTIS
Uau!!!
- - e o arremessa direto para Ramone.
OTIS (O.S.)
Obrigado, Mater!
NA "PISTA DE CORRIDA" - Mat passa voando por todos os corredores, inclusive
Francesco ---
FRANCESCO
Impossível!
- - até que ele se aproxima de MCQUEEN.
MCQUEEN
Matéria!?
MATÉRIA
(manutenção de ritmo)
Confira. Eles me deixaram ficar com os
foguetes!
McQueen
Te vejo na linha de chegada, amigo!
MATÉRIA
Não se eu te ver primeiro!
McQueen e Mater se separam do resto dos pilotos, conduzindo-os para fora da
estrada e para a terra para mais uma volta. Os dois amigos estão lado a lado
quando FADE OUT.
O FIM
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
