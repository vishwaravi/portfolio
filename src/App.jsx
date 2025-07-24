import Projects from "./components/Projects"
import Intro from "./components/Intro"
import Skills from "./components/Skills"
import Education from "./components/Education"
const App = () => {
  return (
    <div className="App">

      <div role="tablist" className="tabs bg-black tabs-boxed justify-center sticky top-0 z-50 mb-7 p-3">
        <a role="tab" className="tab text-lg" href="#me">Me</a>
        <a role="tab" className="tab text-lg" href="#projects">Projects</a>
        <a role="tab" className="tab text-lg" href="#skills">Skills</a>
        <a role="tab" className="tab text-lg" href="#edu">Education</a>
      </div>

      <Intro />
      <div className="divider divider-primary mb-16">Projects</div>
      <Projects />
      <div className="divider divider-primary mb-16">Skills</div>
      <Skills />
      <div className="divider divider-primary mb-5">Education</div>
      <Education />
    </div>
  )
}

export default App