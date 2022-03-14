# Template til skoleprosjekter

## Sett opp prosjektet lokalt

npm install (husk å endre navn på pakken)  

## Sette opp git og publiser til GitHub

git remote rm origin (for å fjerne template-repoen som origin)  
lag initial commit  
git remote add origin https://brukernavn@github.com/brukernavn/reponavn.git   
(lag ny repo først direkte på github)  

## Publiser til Netlify

npm run build  
npm run preview  
(genererer dist-mappe)  

Velg deploy fra GitHub på Netlify  

kjør npm run build hver gang en endring er committed for å oppdatere nettsiden.  
