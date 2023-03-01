const title = React.createElement(
    'h1',  // Type of element
    { id: 'main-title', title: 'this is a title' }, // HTML elements attributes
    'My first react element!' // Children
);
// title is a react object that represents a DOM node (is NOT a DOM node)
// <h1 id="main-title" title="this is a title">My first react element!</h1>

const desc = React.createElement(
    'p',
    null,
    'I just learn how to create a rect node and render it to the DOM',
);

const header = React.createElement(
    'header',
    null,
    title, desc, // children
);

ReactDOM.render(
    header,
    document.getElementById('root'),
);