import React, { useState } from "react";

const ProblemStatements = ({ problems = [] }) => {
  const [featureOpen, setFeatureOpen] = useState(null);
 
  const dataToShow = [ {
    title: "Empowering Women's Safety with Smart Solutions",
    code: "TGPDS1",
    description:
      "A smart security solution that provides real-time tracking, instant SOS alerts, and AI-based threat detection to enhance women's safety in public and private spaces.",
    features: [
      "Instant SOS alerts with real-time location tracking",
      "AI-based threat detection for quick response",
      "Community-driven safety insights",
    ],
  },
  {
    title: "Student Tracking Progress System",
    code: "TGPDS2",
    description:
      "A system to help students, teachers, and parents monitor academic progress, attendance, and performance insights effectively.",
    features: [
      "Real-time student performance tracking",
      "Automated attendance monitoring",
      "Personalized learning recommendations",
    ],
  },
  {
    title: "Library Book Finder Using Crowdsourced Map",
    code: "TGPDS3",
    description:
      "An app that helps users locate books in nearby libraries using real-time crowdsourced data.",
    features: [
      "Live book availability tracking",
      "Map-based library locator",
  
    ],
  },
  {
    title: "Doctor Appointment System",
    code: "TGPDS4",
    description:
      "An online appointment booking system that helps patients schedule consultations and manage their medical history.",
    features: [
      "Online appointment scheduling",
      "Automated reminders and notifications",
      "Video consultation support",
    ],
  },
  {
    title: "Smart Blood Donation System",
    code: "TGPDS5",
    description:
      "A platform that connects blood donors with recipients and helps blood banks manage inventory efficiently.",
    features: [
      "Real-time donor-recipient matching",
      "Emergency blood request alerts",
    ],
  },
  {
    title: "Cybercrime Awareness and Reporting App",
    code: "TGPDS6",
    description:
      "An app that educates users about cyber threats and provides a secure way to report cybercrimes.",
    features: [
      "Educational resources on cyber safety",
      "Secure cybercrime reporting portal",
      "Anonymous reporting option",
    ],
  },
  {
    title: "Smart Mess Subscription & Cancellation System",
    code: "TGPDS7",
    description:
      "A system that allows students and employees to manage their mess subscriptions and reduce food waste.",
    features: [
      "Flexible meal subscription and cancellation",
      "Real-time meal availability updates",
    ],
  },
  {
    title: "Waste Food Management System",
    code: "TGPDS8",
    description:
      "A system that redistributes surplus food from restaurants and households to those in need.",
    features: [
      "Real-time tracking of surplus food",
      "AI-based food quality assessment",
      "Integration with food banks and NGOs",
    ],
  },
  {
    title: "Smart Diet & Nutrition Planner",
    code: "TGPDS9",
    description:
      "An AI-powered app that suggests personalized diet plans based on health conditions, fitness goals, and dietary preferences. It helps users track calories, plan meals, and integrate with fitness apps for a healthier lifestyle.",
    features: [
      "AI-powered personalized diet recommendations",
      "Calorie and nutrient tracking",
      "Grocery shopping list based on diet plan",
    ],
  },
  {
    title: "AI-Based Chatbot for Customer Support",
    code: "TGPDS10",
    description:
      "A chatbot that helps businesses answer customer questions quickly and automatically.",
    features: [
      "Available 24/7 to assist customers",
      "Understands customer emotions for better replies",
      "Connects with customer support systems",
    ],
  },
  {
    title: "Real-Time Sign Language to Speech Converter",
    code: "TGPDS11",
    description:
      "A tool that turns sign language into spoken words, helping people with hearing impairments communicate easily.",
    features: [
      "Understands hand movements using AI",
      "Instantly converts signs into speech",
    ],
  },
  {
    title: "Lost & Found Web Portal",
    code: "TGPDS12",
    description:
      "Losing valuable items is frustrating, and finding them can be difficult. This web app allows users to report lost and found items, making it easier to reconnect owners with their belongings.",
    features: [
      "Report lost or found items with details",
      "Search and filter based on location",
      "Contact feature for item recovery",
    ],
  },
  {
    title: "Online Event Registration portal",
    code: "TGPDS13",
    description:
      "Many events face issues with manual registrations, leading to errors and delays. This web app simplifies the process by allowing users to register online, receive instant confirmation, and access event details effortlessly.",
    features: [
      "Online event registration with instant confirmation",
      "Ticket generation and QR code scanning",
      "Event schedule and reminders",
    ],
  },
  {
    title: "Water Usage Optimization System",
    code: "TGPDS14",
    description:
      "A web-based tool that helps farmers use water efficiently by calculating the right amount needed for crops. It considers factors like soil type, weather, and crop requirements to prevent water wastage and improve productivity.",
    features: [
      "Calculates optimal water usage for crops",
      "Uses weather and soil data for better accuracy",
      "Reduces water wastage and improves efficiency",
      "Easy-to-use interface for farmers",
    ],
  },
  {
    title: "Human Emotion Detection from Images",
    code: "TGPDS15",
    description:
      "A system that detects emotions like happiness or sadness from a person's face in photos.",
    features: [
      "Uses AI to recognize emotions",
      "Works in real-time",
      "Can be used in security and customer feedback",
    ],
  },
  {
    title: "House Price Prediction",
    code: "TGPDS16",
    description:
      "A tool that predicts house prices based on location, size, and market trends.",
    features: [
      "Uses past data to estimate prices",
      "Updates prices based on market changes",
      "Easy-to-use interface for home buyers",
    ],
  },
  {
    title: "Real-Time Doubt Solving Using AI Chatbots for Students",
    code: "TGPDS17",
    description:
      "A chatbot that quickly answers students' academic questions with detailed explanations.",
    features: [
      "Understands different subjects",
      "Provides step-by-step solutions",
      "Works with text input",
    ],
  },
  {
    title: "Autonomous AI Traffic Management",
    code: "TGPDS18",
    description:
      "An AI system that controls traffic signals to reduce congestion and improve road safety.",
    features: [
      "Adjusts traffic lights based on real-time traffic",
      "Monitors traffic live",
      "Gives priority to emergency vehicles",
    ],
  },
  {
    title: "AI-Based Fake News Detector",
    code: "TGPDS19",
    description:
      "A tool that checks if news articles are fake or misleading.",
    features: [
      "Uses AI to verify facts",
      "Scores news for credibility",
      "Detects biased or misleading content",
    ],
  },
  {
    title: "AI-Based Crop Recommendation System",
    code: "TGPDS20",
    description:
      "A software application that suggests the best crops based on soil type, climate, and weather conditions, helping farmers maximize yield and efficiency.",
    features: [
      "AI-driven crop recommendations",
      "Considers soil type, climate, and weather conditions",
      "Enhances agricultural productivity and sustainability",
    ],
  },
  {
    title: "Blockchain-Powered Secure Land Registry",
    code: "TGPDS21",
    description:
      "A decentralized system that securely records and verifies land ownership using blockchain technology to prevent property fraud.",
    features: [
      "Tamper-proof digital land records",
      "Transparent and secure property transactions",
      "Automated ownership verification using smart contracts",
    ],
  },
  {
    title: "Secure Digital Voting System",
    code: "TGPDS22",
    description:
      "A blockchain-based voting system that ensures secure, transparent, and tamper-proof elections, reducing fraud and increasing voter trust.",
    features: [
      "Immutable and transparent vote recording",
      "Secure voter authentication using blockchain",
      "Real-time vote counting and result verification",
    ],
  },
  {
    title: "Blockchain-Based Medical Record System",
    code: "TGPDS23",
    description:
      "A blockchain-powered system that securely stores and manages patient medical records, ensuring privacy, data integrity, and seamless access across hospitals.",
    features: [
      "Secure and immutable medical history",
      "Patient-controlled data access",
      "Easy interoperability between hospitals",
    ],
  },
  {
    title: "Blockchain-Based Gift Cards",
    code: "TGPDS24",
    description:
      "A secure system for creating, storing, and redeeming crypto-based gift cards, ensuring transparency and fraud prevention.",
    features: [
      "Secure and tamper-proof gift card creation",
      "Easy redemption using blockchain verification",
      "Supports multiple cryptocurrencies for transactions",
    ],
  },  ]
  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          🚀 Problem Statements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataToShow.map((event, index) => (
            <div
              key={index}
              className="group p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-100"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-xs text-blue-600 font-medium mb-2">
                    {event.code}
                  </p>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="border-t pt-3 mt-auto">
                  <button
                    className="w-full flex items-center justify-between text-sm font-medium text-blue-600 hover:text-blue-800"
                    onClick={() => setFeatureOpen(prev => (prev === index ? null : index))}
                  >
                    <span>
                      {featureOpen === index ? "Hide Features" : "View Key Features"}
                    </span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        featureOpen === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {featureOpen === index && (
                    <ul className="mt-3 space-y-2 pl-3 animate-fade-in">
                      {event.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-700 text-sm"
                        >
                          <svg
                            className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;