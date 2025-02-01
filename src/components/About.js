import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is About page</h2>
      <User name={"Rohit (function)"} />

      <UserClass name={"Rohit (Class)"} location={"Delhi Class"} />
    </div>
  );
};

export default About;
