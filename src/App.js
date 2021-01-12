import React, { useState } from 'react'
import { userInfo, skills, hobbies, blog, experiences, projects } from './data'
import UserInfo from './components/UserInfo'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Blog from './components/Blog'
import Experiences from './components/Experiences'
import ProjectCategory from './components/ProjectCategory'
import Projects from './components/Projects'

const allCategories = ['all', ...new Set(projects.map((project) => project.category))]

function App() {
  const [projectList, setProjectList] = useState(projects)
  const [categories, setCategories] = useState(allCategories)

  const filterProjects = (category) => {
    if (category == 'all') {
      setProjectList(projects);
      return
    }
    const newProjects = projects.filter((project) => project.category === category);
    setProjectList(newProjects)
  }
  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <UserInfo userInfo={userInfo} />
          <div className="card-grid">
            <div>
              <Skills skills={skills} />
              <Hobbies hobbies={hobbies} />
            </div>
            <div>
              <Blog blog={blog} />
              <Experiences experiences={experiences} />
            </div>
          </div>
          <ProjectCategory categories={categories} filterProjects={filterProjects} />
          <Projects projects={projectList} />
        </div>
      </main>
    </div>
  );
}

export default App;
