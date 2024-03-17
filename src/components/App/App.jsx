import "./App.css";
import Profile from "../Profile/Profile.jsx";
import { userData } from "../dataJson/userData.json";
import FriendList from "../Friends/FriendList.jsx";
import friends from "../dataJson/friendsData.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";
import transactions from "../dataJson/transactions.json"

const App = () => {

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
     <FriendList friends={friends} />
     <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
