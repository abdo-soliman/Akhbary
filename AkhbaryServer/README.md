# Akhbary API Server
This is the backend api server of akhbary. It's built using Laravel.

## Prerequisites
1. [Composer](https://getcomposer.org/download/)
2. [Laravel](https://laravel.com/docs/8.x#installation)

## Build

To build this project you will need to follow the following steps:
1. Install Dependancies
2. Configure Environment
3. Run The App

### `Install Dependancies`

To build this project we first start by installing its dependancies. To install dependancies you simple use the folllowing command.
```bash
composer install
```

### `Configure Environment`

After Installing dependancies, it's time to configure our environment. First rename .env.example to .env. To setup database configration you will need to change the following values:
```
DB_CONNECTION=mysql #database type change if not mysql
DB_HOST=127.0.0.1 #database host server 127.0.0.1 for localhost
DB_PORT=3306 #database port
DB_DATABASE=akhbary #databse name
DB_USERNAME=root #databse user
DB_PASSWORD=123456 #database password
```

For sending emails you need to configure the following in .env:
```
MAIL_MAILER=smtp #mail driver change if not stmp driver
MAIL_HOST=smtp.googlemail.com #change in case of using other stemp drivers
MAIL_PORT=465 #mail server port default 465
MAIL_USERNAME=you_gmail_account@gmail.com #mail username
MAIL_PASSWORD=some_password #mail_password
```

After this we need to generate a key for JWT by running the fllowing commands:
```bash
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
php artisan jwt:secret
```

Now the configuration is compelete we need to migrate the database using the following command:
```bash
php artisan migrate
```

### `Run The App`

Now you can run the app using `php artisan serve`. Which will start the a server running on localhost port 8000 and provide and API endpoint at localhost:8000/api.

## API documentation

The following table contains avaliable API methods and their details:

| route | Type | Description | params | data |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| /login | post | an api call to log user in and get JWT Token | none | email, password |
| /register | post | an api call that takes user data and create a new user account | none | name, email, date_of_birth, gender |
| /user | get | an api call that takes JWT Token as authoritarian header and returns user data | JWT authoritarian header | none
| /favourites | get | an api call that takes JWT Token as authoritarian header and returns all user favourite articles | JWT authoritarian header | none |
| /favourite | post | an api call that takes JWT Token as authoritarian header and article data to save as user favourite article | JWT authoritarian header | article data = [title, author, source, img_url, publicationDate, ...] |
| /favourite | delete | an api call that takes JWT Token as authoritarian header and article Id if the article is a user favourite it will be removed from his favourites | JWT authoritarian header, article_id | none |
