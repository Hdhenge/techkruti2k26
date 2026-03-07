import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
{
  id: 1,
  title: "KrutiVerse Hackathon 2K25",
  description: "Compete in an intense 8-hour coding marathon to solve real-world challenges.",
  img: "/event/hackathon.png",
  fee: "₹90 per Head",
  teamSize: "2-4 members",
  venue: "TGPCET campus",
  date: "24th March",
  time: "9:00 AM - 5:00 PM",
  registration:""
},
{
  id: 2,
  title: "Project Expo",
  description: "Showcase your innovative tech projects to industry leaders and investors.",
  img: "/event/project-expo.png",
  fee: "₹200 per Team",
  teamSize: "2-4 members",
  venue: "Data Science Department",
  date: "24th March",
  time: "10:00 AM - 3:00 PM",
  registration:""
},
{
  id: 3,
  title: "E-Sports LAN Event",
  description: "Battle in top-tier gaming tournaments featuring BGMI and Free Fire.",
  img: "/event/esport.png",
  fee: "₹200 per squad",
  teamSize: "4 members",
  venue: "TGPCET Campus",
  date: "25th March",
  time: "9:00 AM - 4:00 PM",
  registration:""
},
{
  id: 4,
  title: "Open Mic",
  description: "Showcase your talent and express your creativity on stage in this exciting Open Mic event.",
  img: "/event/open mic.png",
  fee: "₹50 per participant",
  venue: "TGPCET campus",
  teamSize: "Solo",
  date: "25th March",
  time: "11:00 AM - 3:00 PM",
  registration:""
},
{
  id: 5,
  title: "Real Making / Short Film Presentation",
  description: "Turn your ideas into a creative reel or short film.",
  img: "MemeBattle.jpg",
  fee: "₹50 per participant",
  teamSize: "Solo / Team",
  venue: "TGPCET campus",
  date: "25th March",
  time: "10:00 AM - 5:00 PM",
  registration:""
},
{
  id: 6,
  title: "Ciphertext Treasure Hunt",
  description: "Decode encrypted clues and solve puzzles to find the hidden treasure.",
  img: "/event/treasure.png",
  fee: "₹80 entry",
  teamSize: "4 members",
  venue: "Mystery Room",
  date: "25 March",
  time: "10:00 AM - 2:00 PM",
  registration:""
},
{
  id: 7,
  title: "Vibe - Coding",
  description: "Decode encrypted clues and solve puzzles to find the hidden treasure.",
  img: "cipher.jpg",
  fee: "₹200",
  teamSize: "2-4 members",
  venue: "TGPCET campus",
  date: "25 March",
  time: "10:00 AM - 4:00 PM",
  registration:""
}
];

const Upcoming = () => {

const navigate = useNavigate();

return (

<div className="w-full min-h-screen bg-black text-white py-16 px-6">

<div className="text-center mb-14">

<h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
Upcoming Events
</h1>

<p className="text-gray-400 mt-4">
Explore exciting competitions at TechKruti
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

{events.map((event) => (

<div
key={event.id}
className="group flex flex-col rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-cyan-400/20 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]"
>

<div className="relative h-60 overflow-hidden">

<img
src={event.img}
alt={event.title}
className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

<h3 className="absolute bottom-4 left-4 text-lg font-bold">
{event.title}
</h3>

</div>

<div className="p-6 flex flex-col flex-1 space-y-4">

<p className="text-gray-300 text-sm">
{event.description}
</p>

{event.title === "Vibe - Coding" && (
<p className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-2 rounded-md border border-yellow-400/20">
⚠ Note: This event is only for TGPCET students.
</p>
)}

<div className="flex flex-wrap gap-2">

<span className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-xs">
💰 {event.fee}
</span>

<span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-xs">
👥 {event.teamSize}
</span>

<span className="bg-pink-500/10 text-pink-300 px-3 py-1 rounded-full text-xs">
📍 {event.venue}
</span>

</div>

<div className="text-sm text-gray-400 flex justify-between">
<span>📅 {event.date}</span>
<span>⏰ {event.time}</span>
</div>

<div className="flex gap-3 mt-auto">

<button
onClick={() => navigate(`/event/${event.id}`)}
className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 py-2 rounded-lg font-semibold hover:scale-105 transition"
>
Details
</button>

<button
// onClick={() => window.open(event.registration, "_blank")}
className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 py-2 rounded-lg font-semibold hover:scale-105 transition"
>
Register
</button>

</div>

</div>

</div>

))}

</div>

<style jsx global>{`
@keyframes gradient {
0% {background-position:0% 50%}
50% {background-position:100% 50%}
100% {background-position:0% 50%}
}

.animate-gradient{
background-size:200% auto;
animation:gradient 6s ease infinite;
}
`}</style>

</div>

);
};

export default Upcoming;