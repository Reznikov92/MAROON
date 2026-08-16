1.header
2. main info
3.section bestsellers
4.section promo
5.section personal-care
6.section philosophy
7.section our-story
8.contacts
9.foter

шрифт из ttf в woff2



Базовые команды (работа на компьютере)git status — показывает текущее состояние репозитория (измененные, удаленные или новые файлы).git init — создает новый пустой локальный Git-репозиторий в текущей папке.git add . — добавляет абсолютно все новые и измененные файлы текущей папки в индекс для подготовки к сохранению.git commit -m "..." — сохраняет все подготовленные файлы в историю (делает «слепок» кода) с вашим текстовым комментарием.Связь с GitHub (отправка в интернет)git remote add origin ... — привязывает ваш локальный репозиторий к удаленному репозиторию на GitHub.git branch -M main — принудительно переименовывает текущую главную ветку в имя main.git push -u origin main — отправляет ваш код на GitHub в ветку main и связывает ветки для будущих упрощенных отправк.Работа с веткамиgit checkout -b fiature/promo — создает новую ветку с именем fiature/promo и сразу переключается на нее (в названии допущена опечатка, обычно пишут feature/).

git status  
git init
git add .
git commit -m "добавил header,main,bestsellers"

скопировал 3 ссылки в гите
git remote add origin https://github.com/Reznikov92/MAROON.git
git branch -M main
git push -u origin main

git checkout -b fiature/promo 

