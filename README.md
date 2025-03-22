![Karmosi Mesék](http://karmosimesek.hu/assets/karakterek/karmosi.png)

# Karmosi Mesék

Created By: Uhrin Andor
Graphics: Ritter Ottó

Hímer Attila: Karmosi Mesék című könyvének portfólió oldala

# Installation

```
> npm install
> npm start # development
> npm run build # production
> serve -s build
```

# Kontent szerkesztés

Lehetőséged van a különböző szekciók tartalmát, szövegét átírni, linkeket átírni, ehhez nyújt segítséget ez a dokumentáció.

## Lépések

1. Menj fel a cPanel oldalra, és keresd ki a Fájlkezelő gombot
2. Ezután menj a public_html könyvtárba, ahol meg fogod találni a `data.json` fájlt.
3. Töltsd le ezt a fájlt, az eredeti adatokat fogja tartalmazni.(Ne az eredeti felületen szerkeszd, nem tetszenek neki az ékezetes betűk.)
4. Nyisd meg a fájlt valamilyen szerkesztőben
5. Írd át amit szeretnél
6. Töltsd fel az új fájlt az előző helyére(mindenképpen ilyen néven és ugyanarra a helyre töltsd fel!)
7. **LEGFONTOSABB**: Ellenőrizd vissza, hogy helyes-e a json fájl, szintaktikai hiba esetén át fog irányítani egy hiba oldalra! Le fog futtatni egy ellenőrzőt is, hogy semmiképpen ne törölj ki kulcsokat, erre is hibát dob majd.

## JSON gyorstalpaló

A JSON formátum egy kulcs-érték típusú fájl, amire majd az oldal fog tudni hivatkozni.<br />

### FONTOS

```
A kulcsokat semmiképpen ne cseréld ki, csakis a hozzájuk tartalmazó értéket, mert ilyenkor hibát fog dobni az oldal, mert nem tud hivatkozni arra a kulcsra!
```

### Típusok

#### Kulcs érték

A címeknél és gomboknál nem kell aggódni azon, hogy kis- vagy nagybetűt használsz, mindent nagybetűssé fog tenni, egyedül a fekete blokk szövegeknél
Raktam a fájlba leírásokat is, hogy még könnyebben el tudj igazodni mit is szerkesztesz.

```json
{
    "szereplok": {
        "cim": "Szereplők",
        ...
    }
}
```

Ha cserélni szeretnéd a címet:

```json
{
    "szereplok": {
        "cim": "Karakterek",
        ...
    }
}
```

#### Lista

A blokkokat, amik a fekete szöveggel vannak, listába szerveztem, így bele tudsz szerkeszteni, valamint hozzá tudsz adni új blokkot.<br/>
**FONTOS**: viszonylag kötöttek az arányok a szekciókon, szóval mindig ellenőrizd vissza, hogy egyáltalán jól fog-e kinézni, nem csúszik-e le a szöveg.<br />
**NOTE**: a szereplőknél a listában szét van szedve, hogy hol találkozhatsz a karakterrel, ez azért van, hogy a kód tudja, mit kell majd kiemelnie más színnel.<br />
**NOTE**: ha egy blokkban többsoros a szöveg, a json fájlban semmiképpen se törteld be enterrel, inkább írd meg Wordben és utólag rakd őket egy sorba, szintaktikai hibát fog dobni!!
**NOTE**: a sorrendet ne változtasd meg sem a szereplőknél, sem pedig a daloknál, mert elcsúsznak a szövegek a daltól.
**NOTE**: a "Kaland" szekcióban lévő dalszövegeknél nem véletlenül van a listában két külön listába szedve a dalszöveg, design-beli megfontolásból kellett így készítenem, hogy a két oldal balanszban legyen.

```json
{
    "szereplok": {
        "lista": [
            {
                "nev": "Karmosi úr",
                ...
            }

        ]
        ...
    }
}
```

```json
{
    "konyv": {
        ...,
        "szovegek": [
            "Izgalmas, humoros és tanulságos történeteket, amelyek a kíváncsiságról, bátorságról és barátságról szólnak. A történetek főhőse egy kíváncsi kis macsek, aki ebbe a könyvbe kaparta be élettörténetét, valamint saját meséit.",
            "Lenyűgöző színes illusztrációkat, amelyek részletgazdagságukkal elvarázsolnak, és elrepítenek fantázia csodálatos világába.",
            "Megismerheted a KáoszKutyák zenekar megalakulásának igaz történetét, valamint meghallgathatod a Gőzölgő Velőscsont című album két dalát!"

            // Ez itt most pl: 3 bekezdés, figyeld meg, hány darab vessző van, ha új bekezdés raknál, akkor azt is válasszd el és nyiss egy új macskakörmöt!
        ]
        ...
    }
}
```

### Egyéb tanácsok és tudnivalók

Egyik blokk végén se szerepeljen vessző. Pl:

```json
{
    "konyv": {
        "szovegek": [
            ...
        ], // Ez a vessző ne szerepeljen, ha ez az utolsó kulcs a "konyv" blokkban.
    }
}
```

Minden kulcsot és értéket "" jelek között tárolj, ne legyenek fennmaradó macskakörmök, mert ez is szintaktikát fog dobni.
Az is fontos, hogy dupla macskakörmöt használj, a szimplát nem fogja felismerni.

```json
{
    "konyv": {
        " // Ezzel itt nem fog tudni mit kezdeni, meg fog hülyülni
        "szovegek": [
            ...
        ] // Ez a vessző ne szerepeljen, ha ez az utolsó kulcs a "konyv" blokkban.
    }
}
```

Ha szeretnél mindenképpen egy sortörést valahova, akkor ezt a '\n' karakterrel meg tudod tenni.

```json
{
  "konyv": {
    "szovegek": [
      "Én itt nekifogok valaminek de szeretnék új sort ezután,\n szóval odatettem egy ilyen karaktert, így az oldalon is biztosan új sorba fogja rakni innen a tartalmat."
    ]
  }
}
```

Ezen az oldalon tudod ellenőrizni, hogy ne legyen szintaktikai hiba, ide másoldd be, mielőtt feltöltenéd a fájlt(plusz le is fogja formázni olvashatóva): https://jsonlint.com/
