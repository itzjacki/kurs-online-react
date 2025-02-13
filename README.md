# Prosjekt til Reactkurs

For å sette opp prosjektet:

1. Pass på at du har node installert på datamaskinen din (kjør kommandoen `node -v` for å sjekke). Last ned fra https://nodejs.org/ om ikke.
2. I terminalen, manøvrer til mappa prosjektet ligger i. (Dette kan være standalone-terminalappen eller terminalen i IDEen din.)
3. Kjør `npm install` for å installere avhengighetene
4. Kjør `npm run dev` for å spinne opp prosjektet lokalt

## Oppgave 1 - Tilbake til steinalderen

1. Lag en ny fil, `LogoHeader.ts`, ved siden av `LogoHeader.tsx`
2. Skriv kode i .ts-fila så den gjør akkurat det samme som `LogoHeader.tsx`
3. I `App.tsx`, bytt fra å importere .tsx-fila til å importere .ts-fila. Endrer noe seg?
4. Gjør det samme med `UsefulLinks.tsx`

## Oppgave 2 - Statefulness

1. Skriv om `FeedbackForm.tsx` så input-feltene er _controlled_, altså at verdien deres styres av en state.
2. Skriv om handleSubmit-funksjonen så den ikke baserer seg på et submitta form lengre, men heller bruker state-verdiene assosiert input-feltene.
   a. Tips! Endre knappen fra `type="submit"` til `type="button"` for å hindre at det automatisk lages en submit-event man må håndtere.
3. Bruk det faktum at feedback-feltet er controlled til å lage en character counter som kommuniserer til brukeren hvor mange characters de har igjen.

## Oppgave 3 - Unødvendige renders

1. Eksperimenter litt med applikasjonen, når re-rendres de forskjellige komponentene? Det er flere måter å gjøre dette på, jeg anbefaler å prøve begge:
   a. Installer [React Dev Tools](https://react.dev/learn/react-developer-tools), skru på Inspect element -> Profiler -> Options -> Highlight updates when components render, og gjør noe som oppdaterer state
   b. Legger man en `console.log` i komponenten (inne i funksjonen, men før `return`-statementet) vil denne printe til konsollen hver gang komponenten rendres.
2. Bruk teknikkene vi så på til å optimalisere applikasjonen så den ikke rendrer flere komponenter enn nødvendig.
   a. Flytting av state nedover
   b. [Memoization](https://react.dev/reference/react/memo)

## Oppgave 4 - The Circle of life

1. Eksperimenter med useEffects i CounterButton, sjekk at du klarer å logge både når komponenten mounter, unmounter og re-rendrer. CounterButton er praktisk, siden den kan mountes og unmountes med en checkbox som allerede finnes, samt re-rendres ved å trykke på counteren.
2. Til slutt skal vi eksperimentere med en relativt vanlig bug!
   a. Definer en funksjon i CounterButton-komponenten som gjør et eller annet
   b. La oss si at vi vil bruke denne i en UseEffect, da bør vi også inkludere funksjonen i deps array
   c. Hva om vi også vil oppdatere state fra samme deps array? Prøv!
   d. Hva er grunnen til at vi får uendelige re-renders?
