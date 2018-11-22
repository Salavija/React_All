var HelloComponent = React.createClass({
    render: function() {
    return <div>Hello {this.props.name}</div>;
    }
    });

    ReactDOM.render(React.createElement(
    HelloComponent,
    { name: "Jane" }),
    document.getElementById('root')
    );


// class HelloComponent extends React.Component {
//     render() {
//     return <div>Hello {this.props.name}</div>;
//     }
//     }
//     ReactDOM.render(
//     <HelloComponent name="Jane"/>,
//     document.getElementById('root')
//     );


//     class AvatarComponent extends React.Component {
//         render() {
//         return (
//         <img className="Avatar"
//         src={this.props.user.avatarUrl}
//         alt={this.props.user.name}
//         />
//         );
//         }
//         }



//         class CommentComponent extends React.Component {
//     render() {
//     return (
//     <div className="Comment">
//     <div className="UserInfo">
//     <AvatarComponent user={this.props.author} />
//     <div className="UserInfo-name">
//     {this.props.author.name}
//     </div>
//     </div>
//     </div>
//     );
//     }
//     }


//     class HelloComponent extends React.Component {
//         render() {
//         return (<div>Hello {this.props.name}</div>);
//         }
//         }
//         HelloComponent.propTypes = {
//         name: PropTypes.string.isRequired
//         }
//         ReactDOM.render(
//         (<HelloComponent name="Jane"/>),
//         document.getElementById('root')
//         );


//         var styles = {
//             container: { background: 'red' },
//             greetingText: { color: 'green' }
//             };
//             class Component extends React.Component {
//             render() {
//             return (
//             <div style=o{styles.container}>
//             <p style={styles.greetingText}>Tekstas yra toks</p>
//             </div>
//             );
//             }
//             }

// class Component extends React.Component {
//     render() {
//     return (
//     <div>
//     <!-- Component view -->
//     </div>
//     );
//     }
//     };
//     Component.propTypes = {
//     // Properties JSON
//     };