# dau-london
  
сборка  
  
rm -rf docs  
yarn build  
  
в  
./docs/cinema, ./docs/pages  
заменить:  
1.  
`pages\/[main|institute|participants]+\/`  
нa пустоту  
2.  
`cinema\/`  
на пустоту  
3.  
`pages\/[agreement]+\/`  
на  
`../agreement`  
  
в  
./docs/pages  
4.  
`(Druk-Bold-Cy-Web.[a-z0-9])`  
на  
`../../$1`  
и  
`(decimamonox-webfont.[a-z0-9])`  
на то же самое  
  
в  
./docs/cinema  
5.  
`(Druk-Bold-Cy-Web.[a-z0-9])`  
на  
`../$1`  
и  
`(decimamonox-webfont.[a-z0-9])`  
на то же самое  
  
7.  
в  
./docs/cinema  
заменить  
`"/"`  
на  
`"../"`  
  
6.  
скопировать оба horScroll… файла из docs в pages/institute и pages/participants  
