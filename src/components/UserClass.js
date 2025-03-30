import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/Mendpara-Vaibhav");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  componentDidUpdate() {
    console.log("Componenet Did Update");
  }

  componentWillUnmount() {
    console.log("Componenet Will Unmount");
  }

  render() {
    // const { name, location } = this.props;
    const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            // Never update state variables directly
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>

        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: rohit@yahoo.com</h4>
      </div>
    );
  }
}

export default UserClass;
