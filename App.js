// const heading = React.createElement("h1", {id:"heading"}, "hello world from react !!");

// nesting of tags
const heading = React.createElement("div", { id: "parent" },[
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am H1 tag !"),
        React.createElement("h2", {}, "I am H2 tag !")
    ]),
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am H1 tag !"),
        React.createElement("h2", {}, "I am H2 tag !")
    ])
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);