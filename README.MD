Homework SF4.6 

Задание: 

Создать Fullstack-приложение с рецептами блюд

Для запуска проекта потребуется 2 терминала

Для начала клонируем репозиторий командой git clone https://github.com/JaiMie1303/Dish_projectF4.6.git

Затем в первом терминале запускаем сервер:

1. Переходим в папку командой cd Dish_projectF4.6
2. Далее переходим в папку backend командой cd backend
3. Создаем виртуальное окружение python -m venv venv
4. Активируем его командой venv\Scripts\activate (для Windows), source venv/bin/activate (для Mac)
5. Устанавлиеваем зависимости pip install -r requirements.txt
6. Переходим в папку cd dish_project
7. Запускаем сервер командой python manage.py runserver на http://127.0.0.1:8000/

Параллельно во втором терминале:

1. Переходим в папку командой cd Dish_projectF4.6
2. Переходим в папку cd frontend
3. Устанавливаем зависимости командой npm install
4. Запускаем проект командой npm start

API проекта по следующим адресам:
http://127.0.0.1:8000/api/v1/swagger/ - swagger 
http://127.0.0.1:8000//api/v1/redoc/ - redoc 
http://127.0.0.1:8000/api/v1/categories/ - список категорий блюд
http://127.0.0.1:8000/api/v1/categories/id/ - категория по ID
http://127.0.0.1:8000/api/v1/recipes/ - список всех рецептов
http://127.0.0.1:8000/api/v1/recipes/id - Рецепт блюда по ID
http://127.0.0.1:8000/api/v1/categories/id/recipes/ - блюда из выбранной категории ID
