
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
 *    give the event link hear( this link will activate when event live)
 * 4. registration_link
 *    give the event link hear(this link can be google from which you send before event)
 * 5. is_online
 *    make true if event is online our false for offline
 * 6. location
 *    give location is your event is offline
 * 7. by_who
 *    give the name of person our organization who's event
 * 8. duration
 *    give the duration of event in hours only, default is 2h
 * 
 * note:
 * you can add any event of your choice, the system will find which is past and which are   
 * upcoming events, you just need to add information in right way.
 *     
 */



const events = [

   
    {

        'title': 'Decoding the domain of CSE',
        'about':
            `Webinars on different domains of CSE  by different experts`
        ,
        'time': [2022, 0, 25, 23, 0],
        'join_link': '#',
        'is_online': true,
        'locatiion': '',
        'by_who': 'ACES',
        'duration': 2,
        'registration_link':'#'

    },
    {

        'title': 'SHORT TERM TRAINING PROGRAM on Research Methodology',
        'about':
            `The program was initiated with the aim of increasing student awareness about research. It covered basics about research, how to publish your research, how to get started, how to do literature survey, The sessions were conducted by Dr. Dhaval Pujara, HOD of Electronics and Communication Engineering, Nirma University.
            Research ethics and much more.`
        ,
        'time': [2021, 2, 6, 12, 0],
        'join_link': '#',
        'registration_link': '#',
        'is_online': true,
        'locatiion': '',
        'by_who': 'ACES',
        'duration': 40

    },

    {

        'title': 'Google Cloud Facilitator',
        'about':
            `Introductory session about what is google cloud facilitator program and how students can join them.`
        ,
        'time': [2021, 3, 9, 17, 0],
        'join_link': '#',
        'registration_link': '#',
        'is_online': true,
        'locatiion': '',
        'by_who': 'ACES',
        'duration': 1

    },
    {

        'title': 'Placement Matrix Session',
        'about':
            `Organized a session to educate the students about how to crack interviews for internships as well as for placement.`
        ,
        'time': [2021, 5, 5, 18, 0],
        'join_link': '#',
        'registration_link': '#',
        'is_online': true,
        'locatiion': '',
        'by_who': 'ACES',
        'duration': 2

    },
    {

        'title': 'Know your Gems',
        'about':
            `Organized a session to educate the students about how to crack interviews for internships as well as for placement.`
        ,
        'time': [2020, 10, 13, 18, 0],
        'join_link': '#',
        'registration_link': '#',
        'is_online': true,
        'locatiion': '',
        'by_who': 'ACES',
        'duration': 2
    },
    {

        'title': 'Happy Diwali',
        'about':
            `Organized a session to educate the students about how to crack interviews for internships as well as for placement.`
        ,
        'time': [2020, 10, 14, 18, 0],
        'join_link': '#',
        'registration_link': '#',
        'is_online': true,
        'locatiion': '',
        'by_who': 'ACES',
        'duration': 2

    },
    {

        'title': 'Happy Holi',
        'about':
            `Organized a session to educate the students about how to crack interviews for internships as well as for placement.`
        ,
        'time': [2022, 2, 18, 12, 0],
        'join_link': '#',
        'registration_link': '#',
        'is_online': true,
        'locatiion': '',
        'by_who': 'ACES',
        'duration': 2

    },
    {

        'title': 'Happy New Year',
        'about':
            `Organized a session to educate the students about how to crack interviews for internships as well as for placement.`
        ,
        'time': [2020, 0, 1, 18, 0],
        'join_link': '#',
        'registration_link': '#',
        'is_online': true,
        'locatiion': '',
        'by_who': 'ACES',
        'duration': 2

    },
    {
        'title': 'The Road Ahead',
        'about':
            `Organized a session to educate the students about how to crack interviews for internships as well as for placement.`
        ,
        'time': [2020, 2, 3, 18, 0],
        'join_link': '#',
        'registration_link': '#',
        'is_online': true,
        'locatiion': '',
        'by_who': 'ACES',
        'duration': 2

    },
]
export default events;