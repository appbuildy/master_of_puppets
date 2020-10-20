# README


## Authorization

```js
fetch('https://nocode.localhost/me', { headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjAwNTI2ODc4LCJleHAiOjE2MDA2MTMyNzgsImp0aSI6IjFlZTM0MWRiLTE3ZjgtNGE5Zi04NDMyLTBkNDEzYWEyYjY4NCJ9.WVRDThfxCJYToHHqO5-0a3nh5AdL-2Oq1rZNZHQouc0'
    }}).then(resp => resp.json()).then(r => console.log(r))
// logs
{id: 2, email: "inqify@gmail.com", created_at: "2020-09-19T14:39:19.120Z", updated_at: "2020-09-19T14:39:19.120Z", first_name: "Evgeny"}
```


## Setting up

Install all prerequisites:
- Ruby
- SQLite3
- Node.js
- Yarn
- Rails

Install all project dependencies:
```bash
bundle install
yarn install
```

Start database application:
```bash
brew services start postgresql
```

Create and setup database:
```bash
rake db:create
rails db:migrate RAILS_ENV=development
```

Start project in development mode:
```bash
rails s
```

## For frontend

**Static assets** are located in `/public`.

**Markup** is constructed from **layouts**, **templates** and **partials** located in `/app/views`.

**Styles** are located in `/app/assets/stylesheets`. Styles are built and linked through **asset pipeline**.

**Scripts** are located in `/app/javascript/packs`. Scripts are built and linked by **webpacker**. Small scripts are inlined.

To better understand the way Rails project is organised check out [Getting Started with Rails](https://guides.rubyonrails.org/getting_started.html)
