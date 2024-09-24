import Ad from "../Ad";
import BirthDays from "./BirthDays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = () => {
  return (
    <div className="flex flex-col gap-6">
      <UserInfoCard />

      <UserMediaCard />

      <FriendRequests />
      <BirthDays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
