import { NextFunction, Request, Response } from "express";

export type Controller = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => Promise<any>;

const responseMap = {
  greeting: ["Hello!", "Hi there! How can I assist you today?", "Greetings!"],
  farewell: ["Goodbye!", "See you later!", "Take care!"],
  techInterest: (topic: string) =>
    `I see you're interested in ${topic}. Is it for work or a hobby?`,
  careerAdvice: [
    "If you're interested in software development, you might want to explore either frontend or backend development. Would you like to know more about each?",
    "There are various paths in tech like full-stack, data science, and mobile development. Any specific area you're curious about?",
  ],
  frontendAdvice: [
    "Frontend development focuses on the user interface. If you enjoy design and creating user-friendly websites, this might be a good fit!",
    "To get started in frontend, consider learning HTML, CSS, and JavaScript. You can later explore libraries like React, Vue, or Angular.",
  ],
  backendAdvice: [
    "Backend development is about the server side and data handling. If you like working with databases, APIs, and server logic, it could be a great path!",
    "Starting with backend development often involves learning a language like Node.js, Python, or Java, along with databases like MongoDB or PostgreSQL.",
  ],
  languageChoice: (languages: string[]) =>
    `Languages like ${languages.join(
      ", "
    )} are popular in the tech industry. Each has its own strengths, depending on what you want to build.`,
  moneyMaking: [
    "Yes, many developers make a good income by building websites, mobile apps, or even by freelancing and working remotely.",
    "Learning popular languages like JavaScript, Python, or Java can open up job opportunities in various industries.",
  ],
  generalQuestion: "I'm here to help! What would you like to know?",
};

export const getResponse = (message: string, context: any): string => {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
    return responseMap.greeting[Math.floor(Math.random() * responseMap.greeting.length)];
  } else if (lowerCaseMessage.includes("bye")) {
    return responseMap.farewell[Math.floor(Math.random() * responseMap.farewell.length)];
  } else if (lowerCaseMessage.includes("python") || lowerCaseMessage.includes("javascript")) {
    const tech = lowerCaseMessage.includes("python") ? "Python" : "JavaScript";
    // context.interest = tech; // Update context based on user interest
    return responseMap.techInterest(tech);
  } else if (lowerCaseMessage.includes("frontend") || lowerCaseMessage.includes("backend")) {
    const path = lowerCaseMessage.includes("frontend") ? "frontend" : "backend";
    // context.careerPath = path; // Update career path in context
    return path === "frontend"
      ? responseMap.frontendAdvice[
          Math.floor(Math.random() * responseMap.frontendAdvice.length)
        ]
      : responseMap.backendAdvice[Math.floor(Math.random() * responseMap.backendAdvice.length)];
  } else if (lowerCaseMessage.includes("best language")) {
    const popularLanguages = ["JavaScript", "Python", "Golang"];
    // context.languagesExplored = popularLanguages; // Track explored languages
    return responseMap.languageChoice(popularLanguages);
  } else if (lowerCaseMessage.includes("make money") || lowerCaseMessage.includes("income")) {
    // context.interestInMakingMoney = true; // Track interest in income-related questions
    return responseMap.moneyMaking[Math.floor(Math.random() * responseMap.moneyMaking.length)];
  } else if (lowerCaseMessage.includes("career") || lowerCaseMessage.includes("path")) {
    return responseMap.careerAdvice[
      Math.floor(Math.random() * responseMap.careerAdvice.length)
    ];
  }

  return responseMap.generalQuestion;
};
