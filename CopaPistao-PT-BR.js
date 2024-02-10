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

enviarScript(`🚨 Como é a estrutura da Copa Pistão?

➤ 1940 - 1950:
Temporada regular = 20 corridas
Semifinal = 3 corridas
Final = 1 corrida
(24 TOTAL)

➤ 1951 - 1965:
Temporada regular = 25 corridas
semifinal - 3 corridas
Final = 1 corrida
(29 TOTAL)

➤ 1966 - 1990:
Temporada regular = 28 corridas
Repescagem = 2 corridas
Semi final = 3 corridas
Final = 1 corrida
(34 TOTAL)

➤ 1991 - 2012:
Temporada regular = 28 corridas
Repescagem = 2 corridas
Quartas = 2 corridas
Semifinal = 2 corridas
Final = 1 corrida
(35 TOTAL)

➤ 2013 - Atual:
Temporada regular: 28 corridas
Repescagem = 1 corrida
Oitavas = 2 corridas
Quartas = 2 corridas
Semifinal = 2 corridas
final = 1 corrida
(36 TOTAL)
-----------------------------------------------------------------------

🏁Quem mais venceu corridas?

🥇 Strip Weathers 'The King' - 118
🥈 Relâmpago McQueen - 92
🥉 Doc Hudson - 78
4️⃣ Chick Hicks - 60
5️⃣ Dale Earnhardt Sr - 58
6️⃣ Bobby Carsac - 51
7️⃣ Cal Weathers - 50
8️⃣ Don Chapcar - 49
9️⃣ Kraig Shiftright 'The Ninja' - 44
🔟 Joe Allen Foyt - 41
1️⃣1️⃣ Louise Nash - 38
1️⃣2️⃣ Murray Clutchburn - 35
1️⃣3️⃣ Klint Shiftright - 33
1️⃣4️⃣ Mario Andretti - 32
1️⃣5️⃣ Slide Powers - 31
1️⃣6️⃣ Cruz Ramirez - 30
1️⃣7️⃣ Jackson Storm - 28
1️⃣7️⃣ Thomas Tireson - 28
1️⃣8️⃣Dale Earnhardt Jr - 26
1️⃣9️⃣ Bobby Swift - 25
2️⃣0️⃣ Alloy Wilson - 24
2️⃣0️⃣ Brick Yardley - 24
2️⃣1️⃣ Ya Chun Fei - 23
2️⃣1️⃣ Andrew Axler - 23
2️⃣2️⃣ Darrell Cartrip - 22
2️⃣3️⃣ Kurt Shiftright - 21
2️⃣4️⃣ James Cleanair - 19
2️⃣5️⃣ Junior Moon - 18
2️⃣5️⃣ Chuck Armstrong - 18
2️⃣6️⃣ Eugene Carbureski - 17
2️⃣6️⃣ Morris Axler - 17
2️⃣7️⃣ Jack Ford - 15
2️⃣8️⃣ Blue Byron - 13
2️⃣8️⃣ Jay Roper - 13
2️⃣9️⃣ Ronald Oaks - 12
3️⃣0️⃣ Haul Inngas - 10
3️⃣1️⃣ ️River Scott - 9
3️⃣2️⃣ LeRoy Heming - 8
3️⃣3️⃣ Rusty Dipstick - 7
-----------------------------------------------------------------------

🎯 Equipes com mais títulos:

🥇 11 ➤ Dinoco 🇺🇸

🥈 8 ➤ RusTeze 🇺🇸

🥉 6 ➤ Clutch Aid 🇺🇸

🏅 5 ➤ Vitoline 🇮🇹

🏅️ 4 ➤ Nitroade 🇺🇸 | RPM 🇺🇸 | Goodwrench 🇩🇪

🎖️ 2  ➤ Ramen Ya 🇯🇵 | Sidewall Shine | Andretti Racing 🇺🇸 | Wood Brothers 🇺🇸 | Comcast 🇺🇸 | Sony Vaio 🇯🇵 | Sputter Stop 🇺🇸 | Mood Springs 🇺🇸 | IGNTR 🇺🇸

🎖️ 1 ➤ Speed Water 🇺🇸 | Re-Volting 🇺🇸 | Bumper Save 🇺🇸 | Sidewall Shine 🇺🇸 | Corrison Seal 🇺🇸 | EQSY Indie 🇺🇸 | Gator 🇺🇸 | Retread 🇺🇸 | Tank Coat 🇺🇸 | HTB 🇺🇸 | Octane Gain 🇺🇸
-----------------------------------------------------------------------

🏆 Maiores campeões da Copa Pistão

🥇 7 ➔ Strip Weathers 'The King' (89, 91, 94, 98, 01, 02, 03) | Relâmpago McQueen (06, 07, 08, 09, 10, 12, 15)

🥈 3 ➔ Doc (51,52,53) | Bobby Carsac (63,70,71) | Don Chapcar (80,82,85) | Dale Earnhardt Sr (84, 86, 87) | Klint Shiftright (90, 93, 95) | Cruz Ramirez (17, 18, 20)

🥉 2 ➔ Ya Chun Fei (47,50) | Slide Powers (59, 68) | Morris Axler (60, 67) | Mario Andretti (62, 66) | Joe Allen Foyt (64, 69) | Thomas Tireson (72, 73) | Alloy Wilson (74,86) | Andrew Axler (75, 76) | Kraig Shiftright 'The Ninja' (77, 78) | Murray Clutchburn (88, 99) | Jackson Storm (16, 19)

🎖️ 1 ➔ Jay Roper (40) | Blue Byron (46) | Percy Barbel (48) | Jack Ford (49) | Leroy Raiming (54) | Rusty Dipstick (55) | River Scott (56) | Louise Nash (57) | Junior Moon (58) | Kurt Shiftright (61) | Ronald Oaks (65) | Bill Brady (79) | Darrell Cartrip (81) | Haul Inngas (92) | Eugene Carbureski (96) | James Cleanair (97) | Chuck Armstrong (00) | Dale Earnhardt Jr (04) | Chick Hicks (05) | Cal Weathers - Dinoco (11) | Bobby Swift (13) | Brick Yardley (14)
-----------------------------------------------------------------------

🗞️ Lista completa com todos os campeões em cada ano:

1940: Jay Roper
1941-1945 temporadas canceladas devido a 2° guerra mundial
🇺🇸 1946: Blue Byron - Speed Water
🇨🇳 1947: Ya Chun Fei - Ramen Ya
🇺🇸 1948: Percy Barbel
🇺🇸 1949: Jack Ford - RPM
🇨🇳 1950: Ya Chun Fei - Ramen Ya
🇺🇸 1951: Doc Hudson
🇺🇸 1952: Doc Hudson
🇺🇸 1953: Doc Hudson
🇺🇸 1954: Leroy Heming - Re-Volting
🇫🇮 1955: Rusty Dipstick - Bumper Save
🇺🇸 1956: River Scott
🇺🇸 1957: Louise Nash - Vitoline
🇺🇸 1958: Junior Moon
🇺🇸 1959: Slide Powers - Sidewall Shine
🇽🇪 1960: Morris Axler - Nitroade
🇺🇸 1961: Kurt Shiftright - Clutch Aid
🇺🇸 1962: Mario Andretti - Andretti Racing
🇺🇸 1963: Bobby Carsac - Corrison Seal
🇺🇸 1964: Joe Allen Foyt - Wood Brothers
🇺🇸 1965: Ronald Oaks - EQSY Idie
🇺🇸 1966: Mario Andretti - Andretti Racing
🇽🇪󠁧󠁢 1967: Morris Axler - Nitroade
🇺🇸 1968: Slide Powers - Sidewall Shine
🇺🇸 1969: Joe Allen Foyt - Wood Brothers
🇺🇸 1970: Bobby Carsac - Vitoline
🇺🇸 1971: Bobby Carsac - Vitoline
🇺🇸 1972: Thomas Tireson - Comcast
🇺🇸 1973: Thomas Tireson - Comcast
🇺🇸 1974: Alloy Wilson - Sony Vaio
🇽🇪 1975: Andrew Axler - Nitrodae
🇽🇪 1976: Andrew Axler - Nitrodae
🇺🇸 1977: Kraig Shiftright 'The Ninja' - Clutch Aid
🇺🇸 1978: Kraig Shiftright 'The Ninja' - Clutch Aid
🇺🇸 1979: Bill Brady - Mood Springs
🇺🇸 1980: Don Chapcar - RPM
🇺🇸 1981: Darrell Cartrip - Gator
🇺🇸 1982: Don Chapcar - RPM
🇺🇸 1983: Alloy Wilson - Sony Vaio
🇩🇪 1984: Dale Earnhardt Sr - Goodwrench
🇺🇸 1985: Don Chapcar - RPM
🇩🇪 1986: Dale Earnhardt Sr - Goodwrench
🇩🇪 1987: Dale Earnhardt Sr - Goodwrench
🇺🇸 1988: Murray Clutchburn - Sputter Stop
🇺🇸 1989: Strip Weathers 'The King' - Dinoco
🇺🇸 1990: Klint Shiftright - Clutch Aid
🇺🇸 1991: Strip Weathers 'The King' - Dinoco
🇭🇺 1992: Haul Inngas - Retread
🇺🇸 1993: Klint Shiftright - Clutch Aid
🇺🇸 1994: Strip Weathers 'The King' - Dinoco
🇺🇸 1995: Klint Shiftright - Clutch Aid
🇸🇰 1996: Eugene Carbureski - Tank Coat
🇺🇸 1997: James Cleanair - Vitoline
🇺🇸 1998: Strip Weathers 'The King' - Dinoco
🇺🇸 1999: Murray Clutchburn - Sputter Stop
🇺🇸 2000: Chuck Armstrong - Mood Springs
🇺🇸 2001: Strip Weathers 'The King' - Dinoco
🇺🇸 2002: Strip Weathers 'The King' - Dinoco
🇺🇸 2003: Strip Weathers 'The King' - Dinoco
🇩🇪 2004: Dale Earnhardt Jr - Goodwrench
🇺🇸 2005: Chick Hicks - HTB
🇺🇸 2006: Relâmpago McQueen - RusTeze
🇺🇸 2007: Relâmpago McQueen - RusTeze
🇺🇸 2008: Relâmpago McQueen - RusTeze
🇺🇸 2009: Relâmpago McQueen - RusTeze
🇺🇸 2010: Relâmpago McQueen - RusTeze
🇺🇸 2011: Cal Weathers - Dinoco
🇺🇸 2012: Relâmpago McQueen - RusTeze
🇺🇸 2013: Bobby Swift - Octane Gain
🇺🇸 2014: Brick Yardley - Vitoline
🇺🇸 2015: Relâmpago McQueen - RusTeze
🇺🇸 2016: Jackson Storm - IGNTR
🇺🇸 🇨🇴 2017: Cruz Ramirez - RusTeze
🇺🇸 🇨🇴 2018: Cruz Ramirez - Dinoco
🇺🇸 2019: Jackson Storm - IGNTR
🇺🇸 🇨🇴 2020: Cruz Ramirez - Dinoco
-----------------------------------------------------------------------

⭐ Recordes e curiosidades

➤  Doc Hudson só teve apenas 4 temporadas na Copa Pistão (50, 51, 52, 53) pois sofreu um gravíssimo acidente na primeira prova da temporada de 1954 fazendo com que ficasse sem andar por 4 anos. Quando melhorou, não estava mais no mesmo nível dos outros corredores, o que fez Doc entrar em depressão profunda e se mudar para uma pequena cidade do Oeste chamada 'Radiator Springs' e tentar recomeçar uma vida nova sem que fosse reconhecido. O que foi uma pena, considerando que pelos números, Doc poderia ser facilmente o maior de todo o esporte

➤  MAIOR PARTICIPANTE DA COPA PISTÃO

The King ➔ 18 temporadas (1987 a 2005)
Chick Hicks ➔ 18 temporadas (1985 a 1994 & 1997 a 2005)

➤ MAIOR VICE DA HISTÓRIA DA COPA PISTÃO
Chick Hicks (7 vezes) ➔ 86, 87, 92, 94, 01, 02, 03

➤ TOP 10 MAIS POLES NA COPA PISTÃO:
1° Relâmpago McQueen - 98
2° Strip Weathers 'The King' - 78
3° Doc Hudson - 76
4° Dale Earnhardt Sr - 70
5° Bobby Carsac - 68
6° Don Chapcar - 60
7° Kraig Shiftright 'The Ninja' - 53
8° Joe Allen Foyt - 48
9° Slide Powers - 35
10° Jackson Storm - 32

➤ Mais vitórias em uma única temporada regular
Doc Hudson (1952): 23 de 25 disputadas

➤ Mais vitórias em temporada regular no geral
Strip Weathers 'The King' - 83 de 483 disputadas

➤ Mais vitórias em mata-mata(oitavas,quartas, semi e final)
Relâmpago McQueen: 38 de 63 disputadas

➤ Mais vitórias em uma única temporada completa (Regular + Mata-Mata)
Doc Hudson (1952): 27 de 29 disputadas

➤ Média de vitórias dos '3 GOATS'
McQueen 22.49% (92 de 409 disputadas)
The King 20.52% (118 de 575 disputadas )
Doc Hudson 55.71% (78 de 140 disputadas)
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
