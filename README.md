# Задачи массивы и объекты

В папках находятся файлы index.html, которые нужно открыть в браузере. При этом запустятся тесты, которые проверят ваше решение в соотв-м файле task.js. По тому, что пишут тесты при запуске - выясните как должна работать каждая из функций в task.js и реализуйте ее.

## Как подтянуть новые задачи из репозитория в ваш форк

в корневой папке проекта:

```
git remote add upstream https://github.com/gerkirill/js4b-loops.git
git fetch upstream
git merge upstream/master -m "updates from upstream"
```
Это обновит вашу локальную копию. Следующий же `git push` обновит ваш форк на гитхабе. В дальнейшем команду `git remote add upstream ...` можно не выполнять (если выполнить - она вернет ошибку, но это не критично). Достаточно будет только fetch и merge, ну и commit / push по готовности.


## Для тех кто в теме
how to run browser-sync: `browser-sync start --config bs-config.js`
