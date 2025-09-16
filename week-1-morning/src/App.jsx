import "./App.css";
import { MainUserInfo } from "./components/main.user.info";

/**
 * Components
 * 1. Main User Information
 * 2. Personal Information
 * 3. Education Information
 * 4. Account Information
 */

function App() {
  const userInfo = {
    name: "Hang Minh Nguyen",
    position: "UI - UX Designer",
    department: "Product",
    phoneNumber: "5555555",
    email: "something@gmail.com",
    staffId: "SJ48579",
  };

  const userInfo2 = {
    name: "Martin Michael Jordan",
    position: "UI - UX Designer",
    department: "Product",
    phoneNumber: "5555555",
    email: "something@gmail.com",
    staffId: "SJ48579",
  };

  return (
    <>
      <MainUserInfo userInfo={userInfo} />
      <MainUserInfo userInfo={userInfo2} />
    </>
  );
}

export default App;
