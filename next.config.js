/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_NAME: "LMS Class:Live",
    firebase_apiKey: "AIzaSyCYVWugfLeWWjzFcfbkLW60TYWGvNwpVcs",
    firebase_authDomain: "think-b.firebaseapp.com",
    firebase_projectId: "think-b",
    firebase_storageBucket: "think-b.appspot.com",
    firebase_messagingSenderId: "914594842517",
    firebase_appId: "1:914594842517:web:d05e65c1ee8f602c19989c",
    firebase_measurementId: "G-83R3YE21C8",
  },
};

module.exports = nextConfig;
