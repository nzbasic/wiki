---
id: countryAPIOsuTracker
title: Country API
sidebar_label: Country API
---

Base Country Endpoint: **osutracker.com/api/countries/**

Many stats in a country are estimated from the top 50 players in that country.

## Global

A "global" country exists, it can be queried by either:
* abbreviation = ""
* name = "Global"

## Country Details

Contains general details of countries, one object per country.

Full Schema: 

| Data Key      | Data Type | Comment                          |
| ------------- | --------- | -------------------------------- |
| name          | String    | Country                          |
| abbreviation  | String    | Country Abbreviation             |
| contributors  | Array     | Player performance contributions |
| acc           | Number    | Estimated profile accuracy       |
| pp            | String    | Estimated performance            |
| farm          | Number    | Farm index                       |
| scoresCurrent | Array     | Top 100 plays                    |
| range         | String    | Performance range                |


### /all

Returns all country objects

Example call:

```javascript
axios.get('osutracker.com/api/countries/all').then(res => console.log(res.data))
```

### /limitedAll

Returns all country objects, with limited data. 

User objects obtained through this endpoint will be of the form:

| Data Key      | Data Type | Comment                          |
| ------------- | --------- | -------------------------------- |
| name          | String    | Country                          |
| abbreviation  | String    | Country Abbreviation             |
| acc           | Number    | Estimated profile accuracy       |
| pp            | String    | Estimated performance            |

Example call:

```javascript
axios.get('osutracker.com/api/countries/limitedAll').then(res => console.log(res.data))
```

### /:name/details

Returns the country object of a specific country in an array. 

If no country is found that matches the name, the array will return empty.

Example call:

```javascript
axios.get('osutracker.com/api/countries/New Zealand/details').then(res => console.log(res.data))
```

## Country Plays

Each object stores the deltas of a countries top 100 plays over time. Each country may have 0 or more country plays deltas.

Full Schema:

| Data Key   | Data Type | Comment                    |
| ---------- | --------- | -------------------------- |
| name       | String    | Country                    |
| date       | Number    | Date in millis             |
| added      | Array     | Plays added at this date   |
| removed    | Array     | Plays removed at this date |

[See here for Play schema](playScore)

### /:name/plays

Retrieve the deltas for a country. Returns as an array which could have any number of elements.

Example call:

```javascript
axios.get('osutracker.com/api/countries/New Zealand/plays').then(res => console.log(res.data))
```

## Country Stats

Data points collected each day, containing a players current performance, rank, accuracy and play count.

Full Schema:

| Data Key   | Data Type | Comment                    |
| ---------- | --------- | -------------------------- |
| name       | String    | Country                    |
| date       | Number    | Date in millis             |
| acc        | Number    | Estimated accuracy         |
| pp         | String    | Estimated performance      |

### /:name/stats

Retrieve all data points for a country. Returns as an array which can have any number of elements. Usually it will contain a large amount.

Example call:

```javascript
axios.get('osutracker.com/api/countries/New Zealand/stats').then(res => console.log(res.data))
```

## Country Players

Data points for the top 10 players in a country, collected each day.

Full Schema:

| Data Key    | Data Type | Comment                    |
| ----------- | --------- | -------------------------- |
| name        | String    | Country                    |
| date        | Number    | Date in millis             |
| listPlayers | Array     | Top 10 players             |

Each player in the listPlayers array will be listed as follows: 
```javascript
[
    {
        name: "YEP"
        pp: "7373"
    },
    ...
]
```

### /:name/players

Retrieve all data points for the top 10 players in country. Returns as an array which can have any number of elements. Usually it will contain a large amount.

Example call:

```javascript
axios.get('osutracker.com/api/countries/New Zealand/players').then(res => console.log(res.data))
```