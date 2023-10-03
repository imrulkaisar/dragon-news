import Heading2 from "./Heading2";
import fbIcon from "../assets/Facebook.svg";
import twitterIcon from "../assets/Twitter.svg";
import instaIcon from "../assets/Instagram.svg";

const SocialLinks = () => {
  return (
    <div>
      <Heading2>Follow us on</Heading2>
      <ul className="border border-b-o rounded-lg overflow-hidden mt-4 text-text">
        <li>
          <a
            className="flex gap-2 justify-start items-center p-3 border-b hover:bg-grayBg"
            href="#"
            target="_blank"
            title="facebook"
          >
            <img src={fbIcon} alt="facebook" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a
            className="flex gap-2 justify-start items-center p-3 border-b hover:bg-grayBg"
            href="#"
            target="_blank"
            title="Twitter"
          >
            <img src={twitterIcon} alt="Twitter" />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a
            className="flex gap-2 justify-start items-center p-3 border-b hover:bg-grayBg"
            href="#"
            target="_blank"
            title="Instagram"
          >
            <img src={instaIcon} alt="Instagram" />
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
