import Advertize from "../Components/Advertize";
import QZone from "../Components/QZone";
import SocialLinks from "../Components/SocialLinks";
import SocialLogins from "../Components/SocialLogins";

const RightSidebar = () => {
  return (
    <aside className="space-y-6">
      <SocialLogins />
      <SocialLinks />
      <QZone />
      <Advertize />
    </aside>
  );
};

export default RightSidebar;
