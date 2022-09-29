import "./App.css";
import data from "./data";
import Exercise from "./Exercise";

function App() {
  return (
    <div className="flex m-10 gap-5">
      <div className="w-9/12 grid grid-cols-3 border">
        {data.map((data) => {
          return <Exercise data={data} key={data.id} />;
        })}
      </div>
      <div className="w-3/12 grid-cols-1 border">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam
        odio voluptatibus beatae debitis aut libero, minus alias fugit
        reiciendis soluta vero molestiae delectus iste labore quos optio cum
        quis.
      </div>
    </div>
  );
}

export default App;
