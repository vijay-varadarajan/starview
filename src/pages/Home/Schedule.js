import React from 'react'
import './Schedule.css'
import './Media.css'

const Schedule = () => {
  return (
    <section id="schedule">
        <div id="schedule-div">
            <h1>Recommended Learning Path</h1>
            <table id="schedule-table">
                <tbody>
                    <tr>
                        <th>Week</th>
                        <th>Topic</th>
                        <th>Learn</th>
                    </tr>
                    <tr>
                        <td>One</td>
                        <td>The Sun</td>
                        <td id="button-td"><a href="/course"><button>GO</button></a></td>
                    </tr>
                    <tr>
                        <td>Two</td>
                        <td>Inner Planets</td>
                        <td id="button-td"><a href="/course"><button>GO</button></a></td>
                    </tr>
                    <tr>
                        <td>Three</td>
                        <td>Outer Planets</td>
                        <td id="button-td"><a href="/course"><button>GO</button></a></td>
                    </tr>
                    <tr>
                        <td>Four</td>
                        <td>Moons</td>
                        <td id="button-td"><a href="/course"><button>GO</button></a></td>
                    </tr>
                    <tr>
                        <td>Five</td>
                        <td>Asteroids</td>
                        <td id="button-td"><a href="/course"><button>GO</button></a></td>
                    </tr>
                    <tr>
                        <td>Six</td>
                        <td>Eclipses</td>
                        <td id="button-td"><a href="/course"><button>GO</button></a></td>
                    </tr>
                    <tr>
                        <td>Seven</td>
                        <td>Pluto</td>
                        <td id="button-td"><a href="/course"><button>GO</button></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    
  )
}

export default Schedule