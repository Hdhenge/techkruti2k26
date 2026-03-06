import React from "react";
import { useParams } from "react-router-dom";

const events = [
{
id: 1,
title: "Krutiverse Hackathon",
subtitle: "A Great Fundraising Opportunity to Showcase Your Talent",
date: "24 March, 2025",

about: [
{
heading: "About the Event",
description: [
"🚀 What is Hackathon Krutiverse?",
"Hackathon Krutiverse is a 8-hour coding marathon where innovators, developers, designers, and problem-solvers collaborate to build impactful solutions.",
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
"8 hours non stop coding"
],

contacts: [
{ name: "Chhagan Rakhade", phone: "+919158396794" },
{ name: "Himanshu Dhenge", phone: "+919322913858" }
]
},

{
id: 2,
title: "Project Expo",
subtitle: "Showcase Your Innovative Projects",
date: "24 March, 2025",
registration:"https://forms.gle/x9t8waM5yNJdU6mC8",

about: [
{
heading: "About the Event",
description: [
"🎯 What is Project Expo?",
"Project Expo allows students to present innovative projects.",
"",
"🔍 Why Participate?",
"- Get evaluation from experts",
"- Gain mentorship",
"- Win prizes",
"- Network with professionals"
],
}
],

highlights: [
"Innovative Projects",
"Expert Evaluation",
"Networking",
"Exciting Prizes"
],

contacts: [
{ name: "Vishakha Ghatole", phone: "+918208212898"},
{ name: "Nidhi Sharnagat", phone: "+919021138083"}
]
},

{
id: 3,
title: "E-Sports Championship",
subtitle: "Battle in top-tier gaming tournaments featuring Valorant, BGMI, and Free Fire.",
date: "25 March, 2025",
registration:"https://forms.gle/FQ1y7L7nQoK75ZQY6",

about: [
{
heading: "About the Event",
description: [
"🎮 What is the E-Sports Championship?",
"The E-Sports Championship brings together gaming enthusiasts for the ultimate competitive showdown.",
"",
"🔥 Why Participate?",
"- Compete with skilled players",
"- Use your own mobile internet",
"- Play Valorant, BGMI, Free Fire",
"- Win prizes and trophies",
"- Meet pro gamers"
],
}
],

highlights: [
"Battle Royale & FPS Matches",
"Cash Prizes",
"Live Streaming",
"Squad & Solo Mode",
"Pro Gamer Showdowns"
],

contacts: [
{ name: "Priyanshu Patle", phone: "+917038836841" },
{ name: "Dishant Janbandhu", phone: "+917517938702" }
]
},

{
id: 4,
title: "Open Mic Talent Show",
subtitle: "Showcase your creativity through poetry, comedy, music or storytelling.",
date: "25 March, 2025",

about: [
{
heading: "About the Event",
description: [
"🎤 What is Open Mic?",
"Open Mic is a creative stage where participants express their talents.",
"",
"🌟 Why Participate?",
"- Perform poetry, stand-up comedy, singing or storytelling",
"- Express creativity in front of a live audience",
"- Gain confidence and stage experience",
"- Win exciting prizes"
],
}
],

highlights: [
"Live Stage Performance",
"Creative Expression",
"Audience Interaction",
"Exciting Prizes"
],

contacts: [
{ name: "Event Coordinator", phone: "+910000000000" }
]
},

{
id: 5,
title: "Reel & Short Film Presentation",
subtitle: "Show your storytelling skills through creative reels and short films.",
date: "25 March, 2025",

about: [
{
heading: "About the Event",
description: [
"🎬 What is Reel / Short Film Presentation?",
"Participants create short films or reels showcasing creativity and storytelling.",
"",
"🎥 Why Participate?",
"- Showcase video editing and storytelling skills",
"- Present creative digital content",
"- Gain recognition for filmmaking talent",
"- Win prizes"
],
}
],

highlights: [
"Creative Storytelling",
"Video Editing Skills",
"Short Film Showcase",
"Judging by Experts"
],

contacts: [
{ name: "Event Coordinator", phone: "+910000000000" }
]
},

{
id: 6,
title: "Ciphertext Treasure Hunt",
subtitle: "Solve encrypted clues and uncover the hidden treasure.",
date: "25 March, 2025",

about: [
{
heading: "About the Event",
description: [
"🔐 What is Ciphertext Treasure Hunt?",
"Participants solve encrypted clues and puzzles to find hidden treasures.",
"",
"🧠 Why Participate?",
"- Test logical thinking and problem solving",
"- Decode encrypted messages",
"- Work as a team",
"- Experience a fun adventure"
],
}
],

highlights: [
"Puzzle Solving",
"Cryptography Challenges",
"Team Adventure",
"Exciting Rewards"
],

contacts: [
{ name: "Event Coordinator", phone: "+910000000000" }
]
},

{
id: 7,
title: "Vibe Coding Challenge",
subtitle: "Solve coding problems quickly and compete with other programmers.",
date: "25 March, 2025",

about: [
{
heading: "About the Event",
description: [
"⚡ What is Vibe Coding?",
"Vibe Coding is a fast-paced programming challenge where participants solve algorithmic problems.",
"",
"💻 Why Participate?",
"- Test coding and logical thinking",
"- Solve real programming problems",
"- Compete with top coders",
"- Win prizes"
],
}
],

highlights: [
"Competitive Coding",
"Algorithm Challenges",
"Leaderboard Ranking",
"Exciting Prizes"
],

contacts: [
{ name: "Event Coordinator", phone: "+910000000000" }
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