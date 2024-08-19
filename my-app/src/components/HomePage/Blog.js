import React from "react";
import img1 from "../../Assets/Images/homePageCardImg/blogImg/HpBlog2.jpg";
import img2 from "../../Assets/Images/homePageCardImg/blogImg/HpBlog4.jpg";
import img3 from "../../Assets/Images/homePageCardImg/blogImg/HpBlog3.jpg";
import img4 from "../../Assets/Images/homePageCardImg/blogImg/HpBlog1.jpg";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <div className="w-full h-[340vh] bg-black">
      <h1 className="text-white text-6xl ml-[150px] mb-[50px]">About-Us</h1>
      <div className="w-[90%] h-[320vh] ml-[70px] bg-zinc-700 flex flex-col justify-around">
        <BlogCard
          image={img1}
          title="Our team will provide tailored workout routines designed to help you reach your fitness goals efficiently."
          items={[
            "Personalized guidance: Our experienced trainers offer tailored advice based on your individual needs and goals.",
            "Motivational support: We're here to inspire and encourage you throughout your fitness journey, helping you stay focused and driven.",
            "Expert knowledge: Our trainers are well-versed in fitness techniques and can provide valuable insights to optimize your workouts.",
            "Goal setting: We work with you to establish clear, achievable goals and develop a plan to reach them.",
          ]}
        />
        <BlogCard
          image={img2}
          title="Access to experienced trainers who will guide and motivate you every step of the way.."
          items={[
            "Personalized workout plans: Our team crafts custom routines tailored to your specific fitness goals and needs.",
            "Efficiency-focused routines: We design workouts aimed at maximizing your results in the shortest amount of time.",
            "Goal-oriented approach: Each routine is geared towards helping you achieve your desired fitness outcomes.",
            "Regular updates and adjustments: We continuously monitor your progress and adjust your workout plan accordingly for optimal results.",
          ]}
        />
        <BlogCard
          image={img3}
          title="We offer personalized nutrition plans to support your health and fitness journey"
          items={[
            "Tailored dietary recommendations: Our nutritionists analyze your specific needs and goals to create a customized plan that suits your lifestyle and preferences",
            "Comprehensive assessment: We take into account factors such as dietary restrictions, allergies, medical conditions, and fitness objectives to develop a plan that optimizes your health and performance.",
            "Nutrient optimization: Our plans focus on maximizing the nutritional value of your meals, ensuring you get the right balance of vitamins, minerals, protein, carbohydrates, and fats.",
          ]}
        />
        <BlogCard
          image={img4}
          title="Virtual Fitness! Achieve Your Goals Anywhere with Online Training"
          items={[
            "Accessible workouts: Join sessions from anywhere with an internet connection, whether at home, traveling, or on the go.",
            "Personalized training Receive customized workout plans tailored to your goals, fitness level, and preferences.",
            "Expert guidance: Benefit from professional trainers who provide instruction, feedback, and support virtually.",
            "Accountability and motivation: Stay on track with regular check-ins, progress tracking, and encouragement from your online trainer.",
          ]}
        />
      </div>
    </div>
  );
}

export default Blog;

