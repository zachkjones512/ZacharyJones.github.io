import Card from './components/card.tsx'

let body = {paycom: "At Paycom, I developed and maintained high-traffic SaaS applications using React on the front end and C# and PHP for backend services and API development. I work closely with UX designers and product managers to translate business requirements into intuitive, responsive, and accessible user interfaces that improve client satisfaction. I actively participate in Agile development cycles through code reviews, unit and integration testing, and CI/CD improvements, while also diagnosing performance issues, applying security best practices, and documenting architectural decisions to ensure long-term scalability and maintainability.",
            unt: "I led the development of the North Texas Debate Team’s online presence, using Figma and Javascript to design and implement an accessible, user-friendly front end. In parallel, I developed and executed digital media strategies to promote events for the Communications Department and UNT Debate, increasing community engagement, fundraising success, and public event attendance.",
            debate: "While completing my degree, I gained invaluable leadership, communication, and research skills working with high schools across the nation as a competitive debate consultant, working with nationally-ranked public school debate teams in argument generation, directed research, and public speaking skills.",
            edu: "I earned a Bachelor of Arts in Information Technology in May 2025, graduating with a 3.8 GPA and receiving President’s List and Dean’s List honors in in all 8 of 8 semesters. My academic experience included rigorous coursework in software engineering, data structures and algorithms, systems design, databases, networking, and cybersecurity. In 2024 I represented the university as a national runner-up in intercollegiate debate, which strengthened my communication and analytical skills. Go Mean Green!",
            ctf: "I designed and built a web application that generates interactive cybersecurity teaching resources using a Flask backend and a React-based front end, following Agile development practices throughout the project lifecycle. The application was deployed using AWS for hosting and authentication and containerized with Docker, and I worked closely with stakeholders to gather requirements, incorporate feedback, and ensure the final solution aligned with instructional needs.",
            shell: "I collaboratively designed and developed a Unix-style shell interpreter in C, demonstrating proficiency in low-level systems programming, direct system call interaction, and backend testing. The project included implementing core shell functionality such as command parsing, thread-safe process execution, pipelining, and I/O redirection, deepening my understanding of the Unix environment and software development in resource-constrained systems.",
            JWKS: "I implemented a lightweight authentication server that issues and validates signed JSON Web Tokens (JWTs) using a publicly exposed JSON Web Key Set (JWKS). The server handled key generation, rotation, and token signing, providing endpoints for token issuance and key discovery in line with industry authentication standards. Through this project, I gained hands-on experience building secure backend services, implementing stateless authentication, and learned key fundamentals surrounding trust, key management, and access control in distributed systems.",
          }


function App() {


  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center w-full animate-slideIn text-center px-6'>
        <div className='header-container'></div>
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-4xl">Hello, my name is {" "} 
          <span className='bg-linear-to-b from-purple-600 to-green-400 bg-clip-text text-transparent' id='name'>Zachary Jones</span> 
          {" "}Let’s build impactful software together</h1>
        <p className=' mt-20 text-[1em] font-light animate-pulseY' id='downArrow'>⌄</p>
        <div className='header-container'></div>
      </div>
      <div className='flex flex-col items-start w-full min-h-screen py-16 gap-4'>
        <div className='w-full flex items-center py-2'>
          <h2 className='text-[1.5em]'>Professional Experience</h2> 
          <a href='/Resume.pdf'>
            <img src='/file.svg' className=' ml-6 w-6 h-6 object-contain'  alt='Resume File Icon'/>
          </a>
        </div>
        <Card Name={'Paycom'} Title={'Full-Stack Developer'} Body={body.paycom} imageUrl={"/paycomLogo.svg"}/>
        <Card Name={'University of North Texas'} Title={'Student Web Assistant'} Body={body.unt}/>
        <Card Name={'Freelance'} Title={'Competitive Speech and Debate Consultant'} Body={body.debate}/>
        <Card Name={'Education'} Title={`University of North Texas · Bachelor's in Information Technology · 3.8 GPA`} Body={body.edu}/>
      </div>
      <div className='flex flex-col items-start w-full min-h-screen py-16 gap-4'>
        <div className='w-full flex items-center py-2'>
          <h2 className='text-[1.5em]'>Personal Projects</h2> 
          <a className='w-1/2' href='https://www.github.com/zachkjones512' target="_blank" rel="noopener noreferrer">
            <img src='/github.svg' className='ml-6 w-6 h-6 object-contain' alt='Github Link'/>
          </a>
        </div>
        <Card Name={'Cybersecurity CTF Generator'} Title={'Typescript · React · Flask · AWS Amplify '} Body={body.ctf}/>
        <Card Name={'Shell Interpreter'} Title={'C'} Body={body.shell}/>
        <Card Name={'JWKS Authentication Server'} Title={'.NET/C#'} Body={body.JWKS}/>
      </div>
      <div className='flex flex-col items-start w-full min-h-screen py-16 gap-4'>
        <div className='w-full flex items-center justify-between py-2'>
          <h2 className='text-[1.5em]'>Skills</h2> 
        </div>
        <Card Name={'Languages'} Title={'React · TypeScript · C#/.NET · C++ · Node · PHP'} Body={""}/>
        <Card Name={'Technologies'} Title={'Git · SQL · UNIX/Bash · Jira · AWS Lambda · Visual Studio'} Body={""}/>
        <Card Name={'Certifications'} Title={'Adobe Certified Professional: Premiere Pro/Photoshop · Microsoft Office Specialist: Access/Excel'} Body={""}/>
      </div>
      <p>Interested in learning more? Find me on <a className='font-medium text-indigo-500 hover:text-indigo-400 transition-colors' href='https://www.linkedin.com/in/zachary-k-jones/'>LinkedIn</a></p>
    </>
  )
}

export default App
