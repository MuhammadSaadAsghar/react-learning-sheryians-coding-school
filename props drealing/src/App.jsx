
import './App.css'
import Card from './components/Card'
import meta from  "./assets/meta.png"
import Shopify from  "./assets/shopify.png"
import amazon from  "./assets/amazon.png"
import tesla from  "./assets/tesla.png"

function App() {
 
const jobs = [
  {
    id:1,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$25/hr",
    location: "Lahore, Pakistan"
  },
  {
    id:2,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$40/hr",
    location: "Remote"
  },
  {
    id:3,
    brandlogo: amazon,
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$35/hr",
    location: "Karachi, Pakistan"
  },
  {
    id:4,
    brandlogo: meta,
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$45/hr",
    location: "Remote"
  },
  {
    id:5,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Remote"
  },
  {
    id:6,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "USA (Remote)"
  },
  {
    id:7,
    brandlogo: Shopify,
    companyName: "Shopify",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$30/hr",
    location: "Remote"
  },
  {
    id:8,
    brandlogo: tesla,
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Software Developer",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$20/hr",
    location: "Islamabad, Pakistan"
  },
  {
    id:9,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    companyName: "Oracle",
    datePosted: "3 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$38/hr",
    location: "Remote"
  },
  {
    id:10,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "1 month ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$28/hr",
    location: "Lahore, Pakistan"
  }
];
  

  return (
    <>
     <div className='parent'>
      {jobs.map(function(element) {
        return <div key={element.id}>
          <Card  company={element.companyName} location={element.location} pay={element.pay} tag1={element.tag1} tag2={element.tag2} brandlogo={element.brandlogo} post={element.post} postdate={element.datePosted}/>
        </div>
      })}
     </div>
    </>
  )
}

export default App
