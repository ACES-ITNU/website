# Change the event and team data from json file

in this docs you can find how you can edit the event and team member data from data json file.

## 1.Event Data

for change the event data you have to edit this file: event.js(/data/event.js)

### The Basic Data Formate

```md
/\*\*

- formate
-
- key-it use
- 1.  title
- Title of your event
- 2.  about
- Tell about your event
- make sure to put every paragraph in new item in about array
- like : about:[`zeel is best`, `i am best`]
- 3.  time
- Time of your event
- formate [year, month, day, hours, minutes]
- 4.  join_link
- give the event link hear( this link will activate when event live)
- 4.  registration_link
- give the event link hear(this link can be google from which you send before event)
- 5.  is_online
- make true if event is online our false for offline
- 6.  location
- give location is your event is offline
- 7.  by_who
- give the name of person our organization who's event
- 8.  duration
- give the duration of event in hours only, default is 2h
-
- note:
- you can add any event of your choice, the system will find which is past and which are
- upcoming events, you just need to add information in right way.
- \*/
```

### The Basic Object

```js
 {
        'title': 'The title',
        'about':'About Event',
        'time': [yyyy, m(0-11), day, h(0-23), m(0-60)],
        'join_link': 'when event is live this link will activate',
        'registration_link': 'Before event is live this link will activate',
        'is_online': false,
        'locatiion': 'xyc',
        'by_who': 'ACES',
        'duration': h(0-infinity)
 }
```


### Event Type:

You d'not need to think about this part this is just for information. you just need to add right time and date in time(key) and code will done rest for you.

1. live:
    This type of filed includes the events which are live right know. from stating of event till the duration of event event is in live part.
2. up comming
3. past




## 2. Team Data

for change the Team data you have to edit this file: team.js(/data/team.js)

This file data change is simple just see the json object and image folder. upload the new image change that image path in the top of file and than edit the data of member in json file.