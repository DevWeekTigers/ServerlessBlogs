import SignIn from '../components/sign-in';
import SignUp from '../components/sign-up';

import '../App.css';

const AuthPage = () => {
  return (
    <div className="authentication-page page">
      
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
};

export default AuthPage;
