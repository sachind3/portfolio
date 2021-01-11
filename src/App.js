import React from 'react'
import { data } from './data'
import UserInfo from './components/UserInfo'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Blog from './components/Blog'
import Experiences from './components/Experiences'
function App() {
  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <UserInfo userInfo={data} />
          <div className="card-grid">
            <div>
              <Skills skills={data} />
              <Hobbies hobbies={data} />
            </div>
            <div>
              <Blog blog={data} />
              <Experiences experiences={data} />
            </div>
          </div>
          <div className="card">
            sadsad
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
