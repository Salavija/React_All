// var Product = React.createClass({
// buy: function() {
//     alert("You bought something");
// },
//     render: function() {
//         return (
//             <div>
//             <h2>What's up?</h2>
//             <p>Android - 199$</p>
//             <button onClick={this.buy}>Buy</button>
//             </div>
//         );
//     }
// });

// React.render(<Product/>, document.getElementById("root"));

/** 
 * 
 * Naujas bandymas
 */
 function Person(props){
    return(
        <div className="person">
        <h1>{props.name}</h1>
        <p>Your age:{props.age}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name ="Aura" age="28"/>
        <Person name ="Vytas" age="26"/>
    </div>
);

ReactDOM.render(root,
    document.querySelector('#root'));