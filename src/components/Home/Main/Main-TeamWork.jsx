import React from "react";

//custom style
import { ComponentTeamWork } from "./style/TeamWork";
import { TitleSection } from "../Global/TitleSection";

//data
import DataTeamWork from "./data/MainDataTeamWork";
import TeamWorkFigure from "./data/TeamWork";
import { MainLink } from "../Global/MainLink";

const TeamWork = (props) => {
  return (
    <ComponentTeamWork className="team-work">
      <div className="container team-work__container">
        {/* title */}
        <TitleSection className="team-work__title">
          <h2>Nice to Meet</h2>
          <h1>Our Team</h1>
        </TitleSection>

        {/* contents */}
        <div className="team-work__contents">
          {DataTeamWork.map((teamwork) => (
            <TeamWorkFigure
              key={teamwork.name}
              img={teamwork.img}
              alt={teamwork.alt}
              name={teamwork.name}
              office={teamwork.office}
              facebook={teamwork.networks.facebook}
              twitter={teamwork.networks.twitter}
              instagram={teamwork.networks.instagram}
              youtube={teamwork.networks.youtube}
            />
          ))}
        </div>

        {/* meet our teem */}
        <div className="team-work__link">
          <MainLink href=" #">MEET OUR TEAM</MainLink>
        </div>
      </div>
    </ComponentTeamWork>
  );
};

export default TeamWork;
