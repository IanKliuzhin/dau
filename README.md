# dau-london
  
сборка  
  
rm -rf dist  
yarn build  
  
в  
./dist/pages  
заменить:  
1.  
`pages\/[main|institute|participants]+\/`  
нa пустоту  
2.  
`pages\/[agreement]+\/`  
на  
`../agreement/`  
3.  
`(Druk-Bold-Cy-Web.[a-z0-9])`  
на  
`../../$1`  
и  
`(decimamonox-webfont.[a-z0-9])`  
на то же самое  
4.  
скопировать оба horScroll… файла из dist в pages/institute и pages/participants  
