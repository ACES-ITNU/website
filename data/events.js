
/**
 * formate
 * 
 * key-it use
 * 1. title
 *    Title of your event
 * 2. about
 *    Tell about your event
 *    make sure to put every paragraph in new item in about array
 *    like : about:[`zeel is best`, `i am best`]
 * 3. time
 *    Time of your event
 *    formate [year, month, day, hours, minutes]
 * 4. join_link
 *    give the event link hear
 * 5. is_online
 *    make true if event is online our false for offline
 * 6. location
 *    give location is your event is offline
 * 7. by_who
 *    give the name of person our organization who's event
 *     
 */


const events = [

    {

        'title': 'Among Us',
        'about': [
            `Hello there, everyone!! Prepare for the action-packed Among Us competition! Surely you've all had some excellent brainstorming and ideation sessions.`
            , `“You’ve got to stay focused without being boring - because all work and no play makes Jack a dull boy ” It's now time to have some fun and play some games. If you haven't participated in website making competition still you can participate in this. In the Discord Among Us channel, we will share the Joining Code there.`
        ],
        'time':[2021,2,12,4,30],
        'join_link':'#',
        'is_online':true,
        'by_who':'ACES'

    }


]

export default events;