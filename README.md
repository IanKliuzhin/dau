# dau-london
  
сборка  
  
rm -rf dist  
yarn build  
  
в  
./dist/cinema, ./dist/pages  
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
./dist/pages  
4.  
`(Druk-Bold-Cy-Web.[a-z0-9])`  
на  
`../../$1`  
и  
`(decimamonox-webfont.[a-z0-9])`  
на то же самое  
  
в  
./dist/cinema  
5.  
`(Druk-Bold-Cy-Web.[a-z0-9])`  
на  
`../$1`  
и  
`(decimamonox-webfont.[a-z0-9])`  
на то же самое  
  
7.  
в  
./dist/cinema  
заменить  
`"/"`  
на  
`"../"`  
  
6.  
скопировать оба horScroll… файла из dist в pages/institute и pages/participants  
