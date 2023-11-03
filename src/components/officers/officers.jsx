import React, { useState } from "react";
import userpfp from "../../img/userpfp.png";
import policepfp from "../../img/policepfp.jpg"
import "./officers.css";
import { ranks, officers } from "./MockData"; 
import Navtop from "../Navbar/Navtop";

const Officers = () => {
  const [selectedRank, setSelectedRank] = useState(null);

  const handleRankClick = (rank) => {
    setSelectedRank(rank);
  };

  const filteredOfficers = selectedRank
    ? officers.filter((officer) => officer.rank === selectedRank)
    : officers;

  return (
    <div className="officers-page">
      <Navtop />
      <div className="police-list">
        <div className="ranks">
          <h2 className="ranks-head">Officers</h2>
          <ul>
            {ranks.map((rank, index) => (
              <li
                key={index}
                onClick={() => handleRankClick(rank)}
                className={rank === selectedRank ? "selected" : ""}
              >
                {rank}
              </li>
            ))}
          </ul>
        </div>
        <div className="officers">
          <div className="Cases officers-list">
            <input
              className="mainLoginInput CaseSearch"
              type="text"
              placeholder="Search..."
            />
            <div class="data-container officer-data-container">
              {/* <div class="data-row header">
                <div class="data-cell">Officer ID</div>
                <div class="data-cell">Officer Name</div>
                <div class="data-cell">Rank</div>
                <div class="data-cell">Station</div>
              </div> */}
              {filteredOfficers.map((officer) => (
                // <div class="data-row" key={officer.id}>
                //   <div class="data-cell">{officer.id}</div>
                //   <div class="data-cell">{officer.name}</div>
                //   <div class="data-cell">{officer.rank}</div>
                //   <div class="data-cell">{officer.station}</div>
                // </div>

              <div className="officer-list">
                <div className="officer-list-top">
                  <div>
                    <img src={policepfp} alt="" className="policepfp"/>
                  </div>
                  <div>
                    <div className="officer-list-name">Name</div>
                    <div className="officer-list-rank">Rank</div>
                  </div>
                </div>
                <div className="officer-list-bottom">
                  <div className="contact-details">
                    <div> 9990000343    </div>
                    <div>sukhuna lake, chandigarh</div>
                     </div>
                     <div>
                      <div className="officer-list-about">About :</div>
                      <div className="officer-list-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum ab odio maxime aut laborum, officiis nobis laboriosam fugit distinctio sed asperiores doloremque! Debitis veritatis facere consequuntur totam quia pariatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis corrupti quae voluptas in animi vero quam voluptatibus facilis, autem at laborum quasi, aspernatur similique sed. Accusantium ullam saepe fuga dolorum?
                      </div>
                     </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Officers;
