// only render subtitle and p tag around the subtitle if subtitle exists
// create a new property options
// render new p tag , tex based off whether there are items in that array
// of options.length > 0 "Here are your optipns" "no options"

// JSX - JavaScript XML
const app = {
    title: 'Enertel AI Corporation',
    subtitle: 'Your life in a computer',
    options: ['One', 'Two'],
}

const templateOne = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p> 


        <ol>
            <li>Test 2</li>
            <li>Test 3</li>
        </ol>
    </div>
);

function getLocation(location) {
    if  (location){
        return <p>Location: {location}</p>;
    }
}

const user = {
    age: 30,
    location: 'Toronto',
    name: 'Chris'
}

let count = 0;
const addOne = () => {
    count++; 
    renderCounterApp();

};
const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};
const someId = 'myidhere'
const appRoot = document.getElementById("app");



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={minusOne} className="button">-1</button>
            <button onClick={reset} className="button">Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();