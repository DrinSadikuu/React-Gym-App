import React from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "Basic Plan",
    price: 20,
    description: "Get started with basic training.",
    features: [
      "Access to basic workouts",
      "Monthly progress reports",
      "Email support",
    ],
  },
  {
    title: "Standard Plan",
    price: 50,
    description: "For those who want more intensive training.",
    features: [
      "Access to all workouts",
      "Weekly progress reports",
      "Priority email support",
      "Personalized training plan",
    ],
  },
  {
    title: "Professional Plan",
    price: 70,
    description: "Our most comprehensive training plan.",
    features: [
      "Access to exclusive workouts",
      "Daily progress reports",
      "24/7 support",
      "One-on-one coaching",
      "Custom nutrition plan",
    ],
  },
];

const TrainWithUsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 text-center">Train With Us</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Choose the plan that best fits your goals and start your journey towards
        a healthier you. Each plan is designed to provide the best training
        experience tailored to your needs.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-xl mb-4">${plan.price}</p>
              <p className="text-sm text-gray-400">{plan.description}</p>
            </div>
            <ul className="list-disc list-inside mb-6 text-sm text-gray-300">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Link to={`/payment/${plan.title.toLowerCase().replace(" ", "-")}`}>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Choose Plan
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainWithUsPage;
