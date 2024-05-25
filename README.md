# TaskManagerApp
Project 2: Task Manager </BR> 
## <br /> <ins> __User Stories__ </ins>
</br> Users could:
* Create an account to start using the app
* Log in to their existing account
* Access their home dashboard which will display their daily todos
* Access their todo list which can be edited (updated or deleted) and tasks can be marked/categorized as “in progress,” “done,” or “archived”
* Access the reading list or journal section of the app
* Allocate time to a task and use the timer app(embedded in the task manager app) to complete the task
* Track progress
## <br /> <ins> __Wireframe__ </ins>
<img width="728" alt="Screenshot 2024-05-25 at 12 12 24 PM" src="https://github.com/Miagotobene/TimerApp/assets/90000641/ec7765e3-3190-4990-a02a-debb9a22276e">

## <br /> <ins> __ERD__ </ins>
* User
</br> userid, username, email, password
* Todo liST
</br> userid, tasks, pending tasks, completed tasks, archived tasks
* Reading list
</br> userid, name, type (book, article ?), status (started, in progress, done?), score, author
* Timer app
</br> userid, tasks logged, focus hours, day streaks
