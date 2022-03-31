const create = React.createElement;
const span = create(
    "span",
    {key:2},
    "mundo"
)
const p = create(
    "p",
    {key:1},
    ["hola ",span]
)
ReactDOM.render(p,document.getElementById("root"))