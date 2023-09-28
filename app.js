const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an H1 Tab"),
    React.createElement("h2", {}, "I am an H2 Tab"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an H1 Tab"),
    React.createElement("h2", {}, "I am an H2 Tab"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React !"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // object

const heading1 = React.createElement("h1", {}, "Hello World from React !");
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent); // its converting object to h1 tag
