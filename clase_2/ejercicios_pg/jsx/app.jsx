const create=React.createElement;

const div = (
    <div>
    <h2>Listado</h2>
    <ul>
        <li key={1}>soy</li>
        <li key={2}>una</li>
        <li key={3}>lista</li>
    </ul>
    </div>
);

ReactDOM.render(div,document.querySelector("body"))