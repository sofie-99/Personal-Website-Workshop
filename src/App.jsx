import ProjectCard from './components/ProjectCard.jsx'

const projects = [
  { title: 'Project One', description: 'This is a resume grader that uses the Gemini API to grade your resume.', tags: ['Python', 'AI'], link: 'https://github.com/sofie-99/Resume-Grader' },
  { title: 'Project Two', description: 'Use this card to share a class project, organization, internship, or personal interest.', tags: ['JavaScript', 'Design'], link: '#contact' },
  { title: 'Project Three', description: 'Your website does not need to be finished to show what you are learning and creating.', tags: ['Learning', 'Growth'], link: '#contact' },
]

function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <a className="logo" href="#home">Sofie Saini<span>.</span></a>
      <div className="nav-links">
        <a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero" id="home">
          <p className="eyebrow">Hello, I’m</p>
          <h1>Sofie.</h1>
          <h2>I build, learn, and create.</h2>
          <p className="hero-copy">I’m a student and aspiring <strong>your career goal</strong> who enjoys using technology to solve meaningful problems.</p>
          <a className="button" href="#projects">See my work <span aria-hidden="true">↓</span></a>
        </section>

        <section className="section about" id="about">
          <div><p className="eyebrow">A little about me</p><h2>More than a résumé.</h2></div>
          <div className="about-copy">
            <p>I'm a freshman Computer Science major at Cal Poly. I know Python and C#. I'm currently learning JavaScript, TypeScript, and React.</p>
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">Things I’ve worked on</p><h2>Featured projects</h2>
          <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} {...project} />)}</div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Let’s connect</p><h2>Have an idea or opportunity?</h2>
          <p>I’d love to hear from you.</p>
          <a className="button light" href="mailto:your.ssaini@calpoly.edu">Say hello</a>
          <div className="social-links">
            <a href="https://github.com/sofie-99" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sofie-saini-99a949420" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
      <footer>Built with React + Vite · Sofie Saini</footer>
    </>
  )
}
