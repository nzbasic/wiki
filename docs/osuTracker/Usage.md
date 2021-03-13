---
id: usageOsuTracker
title: Usage
sidebar_label: Usage
---

The osuTracker API is public and free for use. If you are using it, consider starring my [repo](https://www.github.com/nzbasic/osutracker).

Base Api Link: **osutracker.com/api/**

Example usage in JS via axios:
```javascript
axios.get('osutracker.com/api/users/all').then(res => {
    console.log(res.data)
})
```