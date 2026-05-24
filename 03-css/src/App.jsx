
import './App.css'
import Card from './components/Card/Card'

function App() {
 
 const users = [
  {
    id: 1,
    name: "Saad",
    status: "Available",
    pay: "$55/hr",
    role: "UX/UI Designer",
    work: "Epic Coder",
    skills: ["UI", "UX", "PHP"],
    more: "+2",
    bio: "Saad is a 32-year-old UX/UI designer who loves creating clean and user-friendly interfaces.",
    image: "https://images.unsplash.com/photo-1773332598501-f8612761781a?w=500"
  },
  {
    id: 2,
    name: "Ali",
    status: "",
    pay: "$40/hr",
    role: "Frontend Developer",
    work: "React Expert",
    skills: ["HTML", "CSS", "JS"],
    more: "+1",
    bio: "Ali is a passionate frontend developer with strong skills in React.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Ahmed",
    status: "Available",
    pay: "$60/hr",
    role: "Backend Developer",
    work: "Node Specialist",
    skills: ["Node", "MongoDB", "API"],
    more: "+3",
    bio: "Ahmed is a backend developer who specializes in Node.js and database design.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 4,
    name: "Usman",
    status: "Available",
    pay: "$50/hr",
    role: "Full Stack Dev",
    work: "MERN Stack",
    skills: ["React", "Node", "Mongo"],
    more: "+2",
    bio: "Usman is a full stack developer experienced in MERN stack. .",
    image: "https://randomuser.me/api/portraits/men/50.jpg"
  },
  {
    id: 5,
    name: "Hassan",
    status: "Busy",
    pay: "$35/hr",
    role: "Graphic Designer",
    work: "Creative Mind",
    skills: ["Photoshop", "Illustrator", "Figma"],
    more: "+1",
    bio: "Hassan is a creative graphic designer who enjoys designing  with modern aesthetics.",
    image: "https://randomuser.me/api/portraits/men/60.jpg"
  },
  {
    id: 6,
    name: "Zain",
    status: "Available",
    pay: "$45/hr",
    role: "Web Developer",
    work: "Clean Code",
    skills: ["HTML", "CSS", "JS"],
    more: "+2",
    bio: "Zain is a web developer who focuses on writing maintainable code..",
    image: "https://randomuser.me/api/portraits/men/70.jpg"
  },
  {
    id: 7,
    name: "Bilal",
    status: "",
    pay: "$70/hr",
    role: "DevOps Engineer",
    work: "Cloud Expert",
    skills: ["AWS", "Docker", "CI/CD"],
    more: "+3",
    bio: "Bilal is a DevOps engineer with expertise in cloud infrastructure and automation.",
    image: "https://randomuser.me/api/portraits/men/80.jpg"
  },
  {
    id: 8,
    name: "Hamza",
    status: "Busy",
    pay: "$30/hr",
    role: "Junior Developer",
    work: "Learning React",
    skills: ["JS", "React", "CSS"],
    more: "+1",
    bio: "Hamza is a junior developer who is continuously learning React and improving .",
    image: "https://randomuser.me/api/portraits/men/20.jpg"
  },
  {
    id: 9,
    name: "Talha",
    status: "",
    pay: "$65/hr",
    role: "Mobile App Dev",
    work: "Flutter Expert",
    skills: ["Flutter", "Dart", "Firebase"],
    more: "+2",
    bio: "Talha is a mobile app developer specializing in Flutter.",
    image: "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    id: 10,
    name: "Fahad",
    status: "Available",
    pay: "$55/hr",
    role: "UI Designer",
    work: "Figma Pro",
    skills: ["Figma", "UI", "UX"],
    more: "+2",
    bio: "Fahad is a UI designer who creates modern and visually appealing interfaces using Figma.",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  }
];

  return (
    <>
     <div className='parent'>
         {users.map( (ele)=>{
          return <Card key={ele.id} bio={ele.bio} image={ele.image} name={ele.name} role={ele.role} pay={ele.pay} work={ele.work} skill={ele.skills} status={ele.status} more={ele.more}/>
         })}
       
      </div> 
     

    
    </>
  )
}

export default App
