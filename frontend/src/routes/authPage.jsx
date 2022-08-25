import SignIn from '../components/sign-in';
import SignUp from '../components/sign-up';

import '../App.css';

const AuthPage = () => {
  return (
    <div className="authentication-container page">
      <p>this is the authentication container</p>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthPage;
