import React from 'react'
import ReactDOM from 'react-dom/client'
import Comp1 from './comp1.jsx'
import './index.css'
import Comp2 from './comp2.jsx'
import Comp3 from './comp3.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="header">
      <h1>Learn to Code</h1>
      <p>With the world's largest web developer site.</p>
      <input type="text" placeholder='Search Our tutorials, e.g. HTML'/>
      <div className="search"></div>
      <a href="">Not Sure Where To Begin?</a>
    </div>
    <div className='color1'><Comp1
    title="HTML"
    description="The language for building web pages"
    button1="Learn Html"
    button2="Video Tutorial"
    button3="Html Referece"
    button4="Get Certified"
    /></div>
    <div className='color2'><Comp1
    title="CSS"
    description="The language for styling web pages"
    button1="Learn Css"
    button2="Video Tutorial"
    button3="Css Referece"
    button4="Get Certified"
    />
    </div>
    <div className='color3'><Comp1
    title="JavaScript"
    description="The language for programming web pages"
    button1="Learn JavaScript"
    button2="Video Tutorial"
    button3="JavaScript Reference"
    button4="Get Certified"
    /></div>
    <div className="color4">
    <Comp1
    title="Python"
    description="A popular programming language"
    button1="Learn Python"
    button2="Video Tutorial"
    button3="Python Reference"
    button4="Get Certified"
    /></div>
    <div className="color5">
    <Comp1
    title="SQL"
    description="A language for accessing databases"
    button1="Learn SQL"
    button2="Video Tutorial"
    button3="SQL Reference"
    button4="Get Certified"
    /></div>
    <div className='display-flex'>
      <div className='color6'><Comp2
      title="PHP"
      description="A web Server Programming Language"
      button5="Learn PHP"
      /></div>
      <div className='color7'><Comp2
      title="jQuery"
      description="A JS library for developing web pages"
      button5="Learn jQuery"
      /></div>
      <div className='color8'><Comp2
      title="Java"
      description="A Programming Language"
      button5="Learn Java"
      /></div>
      <div className='color9'><Comp2
      title="C++"
      description="A Programming Language"
      button5="Learn C++"
      /></div>
      <div  className='color10'><Comp2
      title="W3.CSS"
      description="A CSS framework for faster and better responsive web pages"
      button5="Learn W3.CSS"
      /></div>
      <div className='color11'><Comp2
      title="Bootstrap"
      description="A CSS framework for designing better web pages"
      button5="Learn Bootstrap"
      /></div>
      <div className='color12'>
        <h2>C</h2>
        <Comp2/>
      </div>
      <div className='color13'>
        <h2>C#</h2>
        <Comp2/>
      </div>
      <div className='color14'>
        <Comp3
        name="R"
        />
      </div>
      <div className='color15'>
        <Comp3
        name="Kotlin"
        />
      </div>
      <div className='color16'>
      <Comp3
        name="Node.js"
        />
      </div>
      <div className='color17'>
      <Comp3
        name="React"
        />
      </div>
      <div className='color18'>
      <Comp3
        name="JSON"
        />
      </div>
      <div className='color19'>
      <Comp3
        name="Vue"
        />
      </div>
      <div className='color20'>
      <Comp3
        name="MySQL"
        />
      </div>
      <div className='color21'>
      <Comp3
        name="XML"
        />
      </div>
      <div className='color22'>
      <Comp3 name="Sass"/>
      </div>
      <div className='color23'>
      <Comp3 name="Icons"/>
      </div>
      <div className='color24'>
      <Comp3
        name="RWD"
        />
      </div>
      <div className='color25'>
      <Comp3
        name="Graphics"
        />
      </div>
      <div className='color26'>
      <Comp3
        name="SVG"
        />
      </div>
      <div className='color27'>
      <Comp3
        name="Canvas"
        />
      </div>
      <div className='color28'>
      <Comp3
        name="Raspberry Pi"
        />
      </div>
      <div className='color29'>
      <Comp3
        name="Cyber Security"
        />
      </div>
      <div className='color30'>
      <Comp3
        name="Colors"
        />
      </div>
      <div className='color31'>
      <Comp3
        name="Git"
        />
      </div>
      <div className='color32'>
      <Comp3
        name="Matplotlib"
        />
      </div>
      <div className='color33'>
      <Comp3
        name="NumPy"
        />
      </div>
      <div className='color34'>
      <Comp3
        name="Pandas"
        />
      </div>
      <div className='color35'>
      <Comp3
        name="SciPy"
        />
      </div>
      <div className='color36'>
      <Comp3
        name="ASP"
        />
      </div>
      <div className='color37'>
      <Comp3
        name="AngularJS"
        />
      </div>
      <div className='color38'>
      <Comp3
        name="AppML"
        />
      </div>
      <div className='color39'>
      <Comp3
        name="Go"
        />
      </div>
      <div className='color40'>
      <Comp3
        name="TypeScript"
        />
      </div>
      <div className='color41'>
      <Comp3
        name="Django"
        />
      </div>
      <div className='color42'>
      <Comp3
        name="MongoDB"
        />
      </div>
      <div className='color43'>
      <Comp3
        name="Statistics"
        />
      </div>
      <div className='color44'>
      <Comp3
        name="Data Science"
        />
      </div>
      <div className='color45'>
      <Comp3
        name="Typing Speed"
        />
      </div>
      <div className='color46'>
      <Comp3
        name="HowTo"
        />
      </div>
      <div className='color47'>
      <Comp3
        name="Code Game"
        />
      </div>
      <div className='color48'>
      <Comp3
        name="Spaces"
        />
      </div>
      <div className='color49'>
      <Comp3
        name="PostgreSQL"
        />
      </div>
      <div className='color50'>
        <h2>Excel</h2>
        <Comp2/>
      </div>
      <div className='color13'>
        <h2>DSA - Data Structures and Algorithms</h2>
        <Comp2/>
      </div>
      <div className='color12'>
        <h2>Machine Learning</h2>
        <Comp2/>
      </div>
      <div className='color51'>
        <h2>Articial Intelligence</h2>
        <Comp2/>
      </div>
    </div>
    
  </React.StrictMode>,
)
