---
id: userAPIOsuTracker
title: User API
sidebar_label: User API
---

Base User Endpoint: **osutracker.com/api/users/**

## User Details

Contains general details of users, one object per user.

Full Schema: 

| Data Key   | Data Type | Comment              |
| ---------- | --------- | -------------------- |
| name       | String    | Username             |
| id         | String    | User ID              |
| url        | String    | Profile Picture URL  |
| country    | String    | Country Abbreviation |
| pp         | String    | Performance points   |
| rank       | String    | Global Rank          |
| acc        | String    | Profile Accuracy     |
| plays      | String    | Play Count           |
| level      | Number    | User Level           |
| range      | String    | Performance range    |
| joined     | Number    | Join date in millis  |
| currentTop | Array     | Top 10 Plays         | 
| farm       | Number    | Farm index           |

### /all

Returns all user objects

Example call:

```javascript
axios.get('osutracker.com/api/users/all').then(res => console.log(res.data))
```

### /limitedAll

Returns all user objects, with limited data. 

User objects obtained through this endpoint will be of the form:

| Data Key   | Data Type | Comment              |
| ---------- | --------- | -------------------- |
| name       | String    | Username             |
| id         | String    | User ID              |
| url        | String    | Profile Picture URL  |
| pp         | String    | Performance points   |
| rank       | String    | Global Rank          |
| acc        | String    | Profile Accuracy     |

Example call:

```javascript
axios.get('osutracker.com/api/users/limitedAll').then(res => console.log(res.data))
```

### /:id

Returns the user object of a specific player ID in an array. 

If no user is found that matches the ID, the array will return empty.

Example call:

```javascript
axios.get('osutracker.com/api/users/9008211').then(res => console.log(res.data))
```

## User Plays

Each object stores the deltas of a users top 10 plays over time. Each user may have 0 or more user plays deltas.

Full Schema:

| Data Key   | Data Type | Comment                    |
| ---------- | --------- | -------------------------- |
| name       | String    | Username                   |
| id         | String    | User ID                    |
| date       | Number    | Date in millis             |
| added      | Array     | Plays added at this date   |
| removed    | Array     | Plays removed at this date |

[See here for Play schema](playScore)

### /:id/plays

Retrieve the deltas for a player ID. Returns as an array which could have any number of elements.

Example call:

```javascript
axios.get('osutracker.com/api/users/9008211/plays').then(res => console.log(res.data))
```

## User Stats

Data points collected each day, containing a players current performance, rank, accuracy and play count.

Full Schema:

| Data Key   | Data Type | Comment                    |
| ---------- | --------- | -------------------------- |
| player     | String    | Username                   |
| id         | String    | User ID                    |
| date       | Number    | Date in millis             |
| acc        | String    | Player accuracy            |
| plays      | String    | Player play count          |
| pp         | String    | Player performance         |
| rank       | String    | Player rank                |

### /:id/stats

Retrieve all data points for a user. Returns as an array which can have any number of elements. Usually it will contain a large amount.

Example call:

```javascript
axios.get('osutracker.com/api/users/9008211/stats').then(res => console.log(res.data))
```