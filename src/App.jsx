import "bulma/css/bulma.css";

import "./App.css";
import Course from "./Course";
import Angular from "./img/angular.jpg";
import Bootstrap from "./img/bootstrap5.png";
import Csharp from "./img/ccsharp.png";
import KompleWeb from "./img/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsam
      asperiores deleniti aut dolores, voluptates expedita possimus quod modi
      illo ullam dolore ad ipsum cum assumenda molestiae neque distinctio.
      Cumque."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsam
      asperiores deleniti aut dolores, voluptates expedita possimus quod modi
      illo ullam dolore ad ipsum cum assumenda molestiae neque distinctio.
      Cumque."
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="Komple Web"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsam
      asperiores deleniti aut dolores, voluptates expedita possimus quod modi
      illo ullam dolore ad ipsum cum assumenda molestiae neque distinctio.
      Cumque."
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Frontend"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsam
      asperiores deleniti aut dolores, voluptates expedita possimus quod modi
      illo ullam dolore ad ipsum cum assumenda molestiae neque distinctio.
      Cumque."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
