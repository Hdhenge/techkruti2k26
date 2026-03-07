import React from "react";
import { useParams } from "react-router-dom";

const events = [
{
id: 1,
title: "Krutiverse Hackathon",
subtitle: "A Great Fundraising Opportunity to Showcase Your Talent",
date: "24 March, 2026",

about: [
{
heading: "About the Event",
description: [
"🚀 What is Hackathon Krutiverse?",
"Hackathon Krutiverse is an 8-hour coding marathon where innovators, developers, designers, and problem-solvers collaborate to build impactful solutions.",
"",
"💡 Why Participate?",
"- Solve real-world problems with cutting-edge technology",
"- Work in teams and showcase problem-solving skills",
"- Gain mentorship from industry experts",
"- Win exciting prizes and recognition",
"- Network with like-minded tech enthusiasts"
],
}
],

highlights: [
"Creativity & Functionality",
"Team Collaboration",
"Exciting Prizes & Recognition",
"Innovative Challenges",
"Networking Opportunities",
"8 Hours Non-Stop Coding"
],

contacts: [
{ name: "Chhagan Rakhade", phone: "+919158396794" },
{ name: "Himanshu Dhenge", phone: "+919322913858" },
{ name: "Aniket Kadu", phone: "+918767158314" },
{ name: "Aditya Korde", phone: "+918446950836" }
]

},

{
id: 2,
title: "Project Expo",
subtitle: "Showcase Your Innovative Technical Projects",
date: "24 March, 2026",

about: [
{
heading: "About the Event",
description: [
"🎯 What is Project Expo?",
"Project Expo provides a platform for students to present their innovative technical projects and working prototypes.",
"",
"💡 Why Participate?",
"- Get your project evaluated by experts",
"- Gain valuable feedback and mentorship",
"- Showcase your innovation",
"- Win exciting prizes"
],
}
],

highlights: [
"Innovative Projects",
"Expert Evaluation",
"Industry Interaction",
"Exciting Prizes"
],

contacts: [
{ name: "Tushar Gajekeshwar", phone: "+918805892426" },
{ name: "Prajwal Mesare", phone: "+917709764347" },
{ name: "Krushna Kayande", phone: "+918766007638" },
{ name: "Shreyash Gahane", phone: "+918605251707" }
]

},

{
id: 3,
title: "E-Sports Championship",
subtitle: "Battle in Top-Tier Gaming Tournaments",
date: "25 March, 2026",

about: [
{
heading: "About the Event",
description: [
"🎮 What is the E-Sports Championship?",
"This event brings together gaming enthusiasts to compete in exciting tournaments.",
"",
"🔥 Games Included",
"- BGMI",
"- Free Fire",
"- Valorant",
"",
"💡 Why Participate?",
"- Compete with skilled gamers",
"- Win prizes and trophies",
"- Experience competitive gaming"
],
}
],

highlights: [
"Battle Royale Matches",
"FPS Gaming Competition",
"Cash Prizes",
"Solo & Squad Mode",
"Pro Gamer Competition"
],

contacts: [
{ name: "Mahesh Ingle (BGMI)", phone: "+919623742970" },
{ name: "Harshal Mogre (Free Fire)", phone: "+919579508742" },
{ name: "Chetan Parse", phone: "" },
{ name: "Priyanshu Patle", phone: "+917038836841" }
]

},

{
id: 7,
title: "Vibe Coding Challenge",
subtitle: "Fast-paced Coding Competition",
date: "25 March, 2026",

about: [
{
heading: "About the Event",
description: [
"💻 What is Vibe Coding?",
"A competitive programming challenge where participants solve coding problems under time pressure.",
"",
"💡 Why Participate?",
"- Test your programming skills",
"- Compete with other coders",
"- Improve problem-solving ability"
],
}
],

highlights: [
"Competitive Programming",
"Algorithmic Challenges",
"Fast Problem Solving",
"Exciting Prizes"
],

contacts: [
{ name: "Anuj Moon", phone: "+919156675249" },
{ name: "Khushbu Khandait", phone: "+918080394319" },
{ name: "Sudhanshu Kumar", phone: "+919699921161" },
{ name: "Sachika Singh", phone: "+919594288342" }
]

},

{
id: 4,
title: "Open Mic Talent Show",
subtitle: "Showcase Your Talent Through Poetry, Music & Comedy",
date: "25 March, 2026",

about: [
{
heading: "About the Event",
description: [
"🎤 Open Mic provides a stage for students to showcase their talents.",
"",
"Participants can perform:",
"- Poetry",
"- Singing",
"- Stand-up comedy",
"- Storytelling"
],
}
],

highlights: [
"Poetry & Storytelling",
"Music Performances",
"Stand-Up Comedy",
"Creative Talent Showcase"
],

contacts: [
{ name: "Sarang Kachare", phone: "+919763191362" },
{ name: "Vedant Nanoti", phone: "+919960116568" },
{ name: "Ritesh Krnewar", phone: "+919673904779" },
{ name: "Mitali Kharabe", phone: "+918956903495" }
]

},

{
id: 5,
title: "Reel & Short Film Presentation",
subtitle: "Present Your Creative Video Stories",
date: "25 March, 2026",

about: [
{
heading: "About the Event",
description: [
"🎬 Participants present creative reels or short films.",
"",
"💡 Focus Areas:",
"- Storytelling",
"- Cinematography",
"- Editing",
"- Creativity"
],
}
],

highlights: [
"Creative Storytelling",
"Short Film Presentation",
"Video Editing Skills",
"Judges Evaluation"
],

contacts: [
{ name: "Ram Dhote", phone: "+918208268304" },
{ name: "Piyush Ambildhuke", phone: "+919923272412" },
{ name: "Sudhanshu Rambhad", phone: "+919322143157" },
{ name: "Yash Bhakre", phone: "" }
]

},

{
id: 6,
title: "Ciphertext Treasure Hunt",
subtitle: "Solve Encrypted Clues to Find the Treasure",
date: "25 March, 2026",

about: [
{
heading: "About the Event",
description: [
"🧩 Ciphertext Treasure Hunt is a puzzle-based event.",
"",
"Participants solve encrypted clues and riddles to reach the final treasure."
],
}
],

highlights: [
"Cryptography Challenges",
"Puzzle Solving",
"Team Adventure",
"Exciting Rewards"
],

contacts: [
{ name: "Anandi Sonune", phone: "+919588446815" },
{ name: "Anupam Sarkar", phone: "+917588933314" },
{ name: "Durvesh Buradkar", phone: "+919420476188" },
{ name: "Divya Atram", phone: "+918010883231" }
]

}

];

const EventInfo = () => {

const { id } = useParams();
const event = events.find((event) => event.id === parseInt(id));

if (!event) {
return <h2 className="text-center text-white">Event not found</h2>;
}

return (

<div className="text-white mt-20 min-h-screen px-6 py-8 flex flex-col items-center bg-black">

<div className="w-full max-w-5xl flex flex-col items-center space-y-12">

{/* Header */}
<div className="text-center space-y-4">

<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
{event.title}
</h1>

<p className="text-lg text-gray-300">{event.subtitle}</p>

<p className="text-blue-400 text-lg font-semibold">
🗓️ {event.date}
</p>

</div>

{/* Register Button */}
{event.registration && (

<a
href={event.registration}
target="_blank"
rel="noopener noreferrer"
className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 
hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,0.9)] 
transition-all duration-300 font-semibold"
>

🚀 Register Now

</a>

)}

{/* Event Details */}
<div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">

<h2 className="text-3xl font-bold text-center text-green-400 mb-6">
Event Details
</h2>

{event.about.map((section, index) => (

<div key={index}>

{section.description.map((line, i) => (

<p key={i} className="text-gray-300 text-lg mb-2">
{line}
</p>

))}

</div>

))}

</div>

{/* Highlights */}
<div className="w-full max-w-4xl">

<h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
🌟 Key Highlights
</h2>

<div className="grid md:grid-cols-2 gap-6">

{event.highlights.map((highlight, index) => (

<div
key={index}
className="p-6 bg-white/5 border border-gray-700 rounded-xl
hover:scale-105 hover:border-cyan-400
hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
transition-all duration-300"
>

{highlight}

</div>

))}

</div>

</div>

{/* Contacts */}
<div className="w-full max-w-2xl text-center bg-white/5 border border-gray-700 rounded-2xl p-8">

<h2 className="text-3xl font-bold text-pink-400 mb-6">
📱 Contact Coordinators
</h2>

<div className="grid md:grid-cols-2 gap-4">

{event.contacts.map((contact, index) => (

<div
key={index}
className="p-4 bg-black border border-gray-700 rounded-lg
hover:border-pink-500 hover:scale-105
hover:shadow-[0_0_20px_rgba(236,72,153,0.7)]
transition-all duration-300"
>

<p className="text-blue-400 font-semibold">
{contact.name}
</p>

<a
href={`tel:${contact.phone}`}
className="text-gray-300 hover:text-cyan-400 transition"
>

{contact.phone}

</a>

</div>

))}

</div>

</div>

</div>

</div>

);

};

export default EventInfo;