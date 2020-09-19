# README


## Authorization

```js
fetch('https://nocode.localhost/me', { headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjAwNTI2ODc4LCJleHAiOjE2MDA2MTMyNzgsImp0aSI6IjFlZTM0MWRiLTE3ZjgtNGE5Zi04NDMyLTBkNDEzYWEyYjY4NCJ9.WVRDThfxCJYToHHqO5-0a3nh5AdL-2Oq1rZNZHQouc0'
    }}).then(resp => resp.json()).then(r => console.log(r))
// logs
{id: 2, email: "inqify@gmail.com", created_at: "2020-09-19T14:39:19.120Z", updated_at: "2020-09-19T14:39:19.120Z", first_name: "Evgeny"}
```
