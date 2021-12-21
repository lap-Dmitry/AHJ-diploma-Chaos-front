# **AHJ-Diploma: Chaos Organizer**
[![Build status](https://ci.appveyor.com/api/projects/status/pljl0u293mvx5rq1?svg=true)](https://ci.appveyor.com/project/lap-Dmitry/ahj-diploma-chaos-front) </br>
[Frontend](https://lap-dmitry.github.io/AHJ-diploma-Chaos-front/) </br>
[Backend](https://lap-heroku-chaos.herokuapp.com/) </br>

## **Обязательные для реализации функции**
* Сохранение в истории ссылок и текстовых сообщений
 -  Для сохранения сообщений, нужно его вписать в поле ввода и нажать кнопку "Enter" или иконку для отправки сообщения
![Images](./public/sendAndSavesMessages.png)
* Ссылки (то, что начинается с http:// или https://) должны быть кликабельны и отображаться как ссылки </br>
![Images](./public/clickUrl.png)
* Сохранение в истории изображений, видео и аудио (как файлов) 
 -  через Drag & Drop </br>
 ![Images](./public/DragAndDrops.png)
 -  через иконку загрузки (скрепка в большинстве мессенджеров)
 ![Images](./public/addFiles.png)
* Скачивание файлов (на компьютер пользователя)
![Images](./public/loadFiles.png)
* Ленивая подгрузка: сначала подгружаются последние 10 сообщений, при прокрутке вверх подгружаются следующие 10 и т.д.
 -  При 10 сообщений и боллее, нужно листнуть вверх для подгрузки остальных сообщений 

## **Дополнительные для реализации функции**