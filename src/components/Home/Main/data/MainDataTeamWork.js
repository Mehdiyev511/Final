//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

//images
import Team01 from "../img/team/team-1.jpg";
import Team02 from "../img/team/team-2.jpg";
import Team03 from "../img/team/team-3.jpg";
import Team04 from "../img/team/team-4.jpg";

const DataTeamWork = [
  {
    img: Team01,
    alt: "videograph-master-team-img-01",
    name: "Amanda Stone",
    office: "Videographer",
    networks: {
      facebook: <FontAwesomeIcon icon={faFacebook} />,
      twitter: <FontAwesomeIcon icon={faTwitter} />,
      instagram: <FontAwesomeIcon icon={faInstagram} />,
      youtube: <FontAwesomeIcon icon={faYoutube} />,
    },
  },
  {
    img: Team02,
    alt: "videograph-master-team-img-02",
    name: "Jacob Anthone",
    office: "Videographer",
    networks: {
      facebook: <FontAwesomeIcon icon={faFacebook} />,
      twitter: <FontAwesomeIcon icon={faTwitter} />,
      instagram: <FontAwesomeIcon icon={faInstagram} />,
      youtube: <FontAwesomeIcon icon={faYoutube} />,
    },
  },
  {
    img: Team03,
    alt: "videograph-master-team-img-03",
    name: "Erika Cleaton",
    office: "Videographer",
    networks: {
      facebook: <FontAwesomeIcon icon={faFacebook} />,
      twitter: <FontAwesomeIcon icon={faTwitter} />,
      instagram: <FontAwesomeIcon icon={faInstagram} />,
      youtube: <FontAwesomeIcon icon={faYoutube} />,
    },
  },
  {
    img: Team04,
    alt: "videograph-master-team-img-04",
    name: "Brian Anderson",
    office: "Videographer",
    networks: {
      facebook: <FontAwesomeIcon icon={faFacebook} />,
      twitter: <FontAwesomeIcon icon={faTwitter} />,
      instagram: <FontAwesomeIcon icon={faInstagram} />,
      youtube: <FontAwesomeIcon icon={faYoutube} />,
    },
  },
];

export default DataTeamWork;
