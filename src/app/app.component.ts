import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slides = [
  {
    title: "1. PREPWORK",
    date: "~40h",
    text: `Le Wagon’s coding bootcamp is very intense and covers a wide range of coding topics. This can be intimidating if you're
    a newbie coder, but remember: our full-stack bootcamp is also made for absolute beginners. To ensure everyone starts on
    a similar level, our students must complete all Prepwork before the first day of the course. The Prepwork takes between
    30 and 40 hours and gives students a basic knowledge of:`,
    list: ["Web 101 - how the web works", "Terminal - basic commands", "Git - basic commands", "HTML / CSS - foundations", "JavaScript - foundations", "Startup mindset - tech workflow"]
  },
  {
    title: "2. IDEATION",
    date: "2 weeks",
    text: `Learn how Israel became an international powerhouse in technology and entrepreneurship via its Israel’s history,
    geopolitical forces, culture, venture capital and tech landscape in detail.`,
    list: ["Form teams of 3 to 4 with like-minded entrepreneurs","Glean from the experience of successful Israeli startups", "Lean Startup methodology", "Visit Israel’s unicorn startups", "Come up with MVP ideas and validate them"]
  },
  {
    title: "3. PROGRAMMING BASICS",
    date: "3.5 weeks",
    text: `Learn the core concepts of programming, structure your code with different classes following Object-Oriented principles,
    and learn to design a relational database and build structured queries to your database using SQL.`,
    list: ["Ruby","Software architecture", "In-depth understanding of MVC", "Simulate databases"]
  },
  {
    title: "4. WEB DEVELOPMENT",
    date: "3.5 weeks",
    text: `Build web interfaces, learn Javascript to animate your pages, code and deploy your first Rails app.`,
    list: ["Product design, UX/ UI","HTML & CSS", "Javascript fundamentals", "Build APIs in Rails","Deploy a marketplace web app (Airbnb clone)"]
  },
  {
    title: "5. BUILD AN MVP",
    date: "2 weeks",
    text: `The final projects are the culmination of bootcamp phase. Students work together to put everything they have learnt (and 
      more!) into practice: inventing, pitching, designing, coding and deploying an original project over a two week period.`,
    list: ["User need, user goal and unique value proposition","Prototyping on Figma to test UX", "Splitting tasks into user stories", "Coding an original web app from scratch","Build it all! from back-end to user interface", "Deploy on a production environment"]
  },
  {
    title: "6. LAUNCHING A STARTUP",
    date: "2 weeks",
    text: `Develop a market ready startup launch and pitch to investors.`,
    list: ["Business model","Legal basics", "Raising capital","How to pitch and tell your story", "Marketing", "Management and hiring", "Launch your MVP at Demo Day"]
  }]
}
