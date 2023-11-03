import React from "react";
import "./casePage.css";
import userpfp from "../../img/userpfp.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const casePage = () => {
  



  return (
    <div className="casePage">
      <div className="nav-top">
        <div className="search">
          <input
            class="mainLoginInput"
            type="text"
            placeholder="Search a keyword here.."
          />
          {/* <span class="icon">🔍</span> */}
        </div>
        <div className="nav-top-links">
          <div>
            <img className="userpfp" src={userpfp} alt="" srcset="" />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6493 7.70219L17.6765 7.11427C17.9664 6.94816 18.1741 6.67946 18.2611 6.35733C18.3479 6.035 18.304 5.69908 18.1365 5.41192L17.1913 3.78884C17.024 3.50149 16.753 3.29535 16.4279 3.20909C16.1033 3.12302 15.7641 3.16654 15.4743 3.33265L14.4468 3.92057C14.3071 4.00081 14.0561 3.98119 13.9305 3.87996C13.9189 3.87064 13.6475 3.65303 13.2552 3.42844C12.8688 3.20661 12.5398 3.08082 12.5238 3.0747L12.5236 3.07464C12.3726 3.01713 12.2297 2.81138 12.2297 2.65051V1.47507C12.2295 0.787482 11.6655 0.228516 10.9724 0.228516H9.08212C8.38899 0.228516 7.825 0.787482 7.825 1.47487V2.6507C7.825 2.81099 7.68214 3.01713 7.53105 3.07464C7.51734 3.07988 7.18733 3.20617 6.79952 3.42844C6.4072 3.65303 6.13579 3.87064 6.12462 3.87977C5.9992 3.98099 5.74836 4.00081 5.60805 3.92057L4.58022 3.33226C4.29039 3.16634 3.95196 3.12282 3.62665 3.20889C3.30174 3.29516 3.03053 3.5013 2.86318 3.78845L1.91804 5.41153C1.75068 5.69889 1.70659 6.03481 1.7936 6.35674C1.88061 6.67926 2.08833 6.94796 2.37797 7.11388L3.40541 7.70199C3.54533 7.78204 3.6537 8.00741 3.62783 8.16557C3.62548 8.17955 3.57198 8.5147 3.57198 8.97147C3.57198 9.42824 3.62548 9.763 3.62783 9.77699C3.6535 9.93494 3.54513 10.1605 3.40541 10.2406L2.37797 10.8285C2.08813 10.9944 1.88061 11.2633 1.7936 11.5858C1.70659 11.9077 1.75068 12.2441 1.91804 12.5312L2.86318 14.1543C3.21003 14.7492 3.97998 14.9536 4.58061 14.6105L5.60786 14.0226C5.74778 13.9421 5.99881 13.9621 6.12403 14.0632C6.13559 14.0725 6.4072 14.2903 6.79952 14.5151C7.18753 14.7377 7.51753 14.8638 7.53125 14.8689C7.68234 14.9264 7.8252 15.1323 7.8252 15.2928V16.4679C7.8252 17.1549 8.38918 17.7142 9.08231 17.7142H10.9726C11.6657 17.7142 12.2297 17.1549 12.2297 16.4679V15.2928C12.2297 15.1325 12.3726 14.9264 12.5236 14.8689C12.5374 14.8638 12.8678 14.7375 13.2556 14.5151C13.6481 14.2903 13.9199 14.0725 13.9311 14.0632C14.0565 13.9621 14.3079 13.9425 14.4476 14.0226L15.4743 14.6101C15.7641 14.7762 16.1031 14.8199 16.4279 14.7339C16.753 14.6476 17.0242 14.4413 17.1913 14.1541L18.1365 12.531C18.3038 12.2437 18.3479 11.9079 18.2611 11.586C18.1741 11.2635 17.9662 10.9944 17.6763 10.8287L16.6495 10.2408C16.5096 10.1607 16.4012 9.93553 16.4269 9.77718C16.4294 9.76319 16.4827 9.42824 16.4827 8.97167C16.4827 8.51451 16.429 8.17975 16.4267 8.16576C16.401 8.00761 16.5094 7.78223 16.6493 7.70219ZM15.8112 8.26349L15.8117 8.26742C15.817 8.30413 15.8588 8.59215 15.8588 8.97167C15.8588 9.37382 15.8121 9.67305 15.8112 9.679L15.8112 9.67907C15.7449 10.0877 15.9764 10.5697 16.3377 10.7764L17.3648 11.3641C17.5104 11.4477 17.6146 11.5831 17.6587 11.7461C17.7028 11.9085 17.6805 12.0777 17.5966 12.2219L16.6514 13.845C16.5672 13.9895 16.4308 14.0927 16.2666 14.1366C16.1027 14.1803 15.9321 14.1582 15.7863 14.0748L14.7598 13.4875C14.3988 13.2804 13.8619 13.3227 13.5382 13.5833C13.5358 13.5856 13.2908 13.7813 12.944 13.9798C12.6007 14.1764 12.3032 14.2911 12.3004 14.2919C11.9113 14.4399 11.6061 14.8798 11.6061 15.293V16.4681C11.6061 16.8143 11.3222 17.0958 10.973 17.0958H9.0827C8.73349 17.0958 8.44954 16.8143 8.44954 16.4681V15.293C8.44954 14.8798 8.14462 14.4397 7.75524 14.2917C7.7521 14.2905 7.45796 14.1782 7.11189 13.9798C6.76503 13.7813 6.52007 13.5856 6.51792 13.5833C6.19399 13.3227 5.65685 13.2802 5.29647 13.4875L4.60275 13.8842C4.55524 13.9118 4.48518 13.9518 4.37632 14.014L4.26942 14.075C3.96646 14.2483 3.57864 14.145 3.40423 13.8456L2.4591 12.2225C2.37503 12.0779 2.35288 11.9087 2.39698 11.7463C2.44087 11.5833 2.54532 11.4479 2.69073 11.3643L2.7262 11.3441L2.72626 11.344C2.89489 11.2478 2.97852 11.2 3.02347 11.1728L3.71719 10.7764C4.07855 10.5697 4.30959 10.0875 4.24355 9.67946L4.24341 9.67854C4.24059 9.65989 4.19593 9.36483 4.19593 8.97167C4.19593 8.5693 4.24266 8.26958 4.24354 8.26394L4.24355 8.26388C4.30998 7.85529 4.07874 7.37326 3.71719 7.16654L3.02191 6.76844L2.68975 6.57843C2.54434 6.49527 2.43989 6.35966 2.396 6.19685C2.3519 6.03423 2.37424 5.8652 2.45812 5.72065L3.40325 4.09757C3.48732 3.9534 3.62371 3.84985 3.78813 3.80633C3.95196 3.76261 4.12264 3.78476 4.26805 3.86753L5.29588 4.45583C5.65744 4.66275 6.19379 4.62059 6.51733 4.35985C6.51988 4.35772 6.76444 4.16265 7.11149 3.9637C7.45443 3.76708 7.75171 3.65265 7.75426 3.65187C8.14344 3.50382 8.44856 3.06434 8.44856 2.6507V1.47487C8.44856 1.12865 8.73251 0.846934 9.08172 0.846934H10.972C11.3212 0.846934 11.6052 1.12865 11.6052 1.47487V2.65031C11.6052 3.06395 11.9103 3.50382 12.2993 3.65167C12.3024 3.65284 12.5995 3.76708 12.9426 3.96351C13.2895 4.16226 13.5342 4.35752 13.5366 4.35966C13.8599 4.62039 14.3973 4.66275 14.758 4.45583L15.7855 3.86811C15.9309 3.78457 16.101 3.76261 16.2658 3.80652C16.43 3.85004 16.5664 3.9534 16.6505 4.09757L17.5956 5.72065C17.6797 5.8652 17.7018 6.03442 17.6577 6.19685C17.6136 6.35966 17.5094 6.49527 17.3638 6.57843L16.3373 7.16654C15.976 7.37326 15.7447 7.85529 15.8112 8.26349ZM10.0273 5.57007C8.1358 5.57007 6.5965 7.0962 6.5965 8.97186C6.5965 10.8475 8.1358 12.3735 10.0273 12.3735C11.9187 12.3735 13.458 10.8475 13.458 8.97186C13.458 7.0962 11.9187 5.57007 10.0273 5.57007ZM10.0273 11.7548C8.47972 11.7548 7.22065 10.5062 7.22065 8.97186C7.22065 7.43737 8.47972 6.18888 10.0273 6.18888C11.5748 6.18888 12.8339 7.43737 12.8339 8.97186C12.8339 10.5062 11.5748 11.7548 10.0273 11.7548Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5566 0.228516C12.4986 0.228516 10.8397 1.60503 9.23531 2.93636C7.78314 4.14124 6.41152 5.27922 4.89119 5.27922H2.36946C1.27258 5.27922 0.380371 6.17265 0.380371 7.27146V8.95516C0.380371 10.0538 1.27258 10.9472 2.36946 10.9472H2.48137V14.8477C2.48137 15.9463 3.37378 16.8399 4.47065 16.8399H5.31116C6.40803 16.8399 7.30025 15.9463 7.30025 14.8477V11.8017C7.94249 12.2192 8.58048 12.7476 9.23473 13.2906C10.8393 14.6216 12.4982 15.9985 14.5562 15.9985C16.3788 15.9983 17.8064 12.5349 17.8064 8.1135C17.8064 3.6919 16.3788 0.228516 14.5566 0.228516ZM6.68414 14.8479C6.68414 15.606 6.06823 16.2227 5.31136 16.2227H4.47084C3.71378 16.2227 3.09786 15.606 3.09786 14.8479V10.9472H4.89119C5.50827 10.9472 6.10075 11.1371 6.68414 11.4402V14.8479ZM9.62836 12.8151C8.15606 11.5932 6.6336 10.3299 4.89119 10.3299H2.36946C1.61258 10.3299 0.996672 9.71323 0.996672 8.95515V7.27146C0.996672 6.51339 1.61258 5.8965 2.36946 5.8965H4.891C6.63341 5.8965 8.15567 4.63305 9.62817 3.41168C10.7043 2.51882 11.8066 1.60677 13.01 1.14871C11.9878 2.46278 11.3065 5.05911 11.3065 8.1135C11.3065 11.1673 11.9877 13.7638 13.0096 15.0775C11.8066 14.6198 10.7043 13.7078 9.62836 12.8151ZM14.5566 15.381C13.2847 15.381 11.923 12.4608 11.923 8.1135C11.923 3.76599 13.2845 0.8456 14.5566 0.8456C15.8283 0.8456 17.1901 3.76599 17.1901 8.1135C17.1899 12.4608 15.8283 15.381 14.5566 15.381Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="casepage-mainsection">
        <div className="case-top">
          <div className="case-top-left">
            <div className="case-head">
              Case ID: Case Name
            </div>
            <div className="case-tag">
              <div className="tag g">
              Highly Critical
              </div>
              <div className="tag r">
             Murder
              </div>
              <div className="tag">
              Forwarded  to Higher Officials 
              </div>
            </div>
          </div>
          


          <div className="popup-group">
            <Popup
              trigger={<button className="case-button"> View FIR</button>}
              modal
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header">FIR Image</div>
                  <div className="content">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
                    vel eveniet quibusdam voluptates delectus doloremque,
                    explicabo tempore dicta adipisci fugit amet dignissimos?
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur sit commodi beatae optio voluptatum sed eius
                    cumque, delectus saepe repudiandae explicabo nemo nam libero
                    ad, doloribus, voluptas rem alias. Vitae?
                  </div>
                  <div className="actions">
                    <button
                      className="case-button"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      close
                    </button>
                  </div>
                </div>
              )}
            </Popup>


            <Popup
              trigger={<button className="case-button">Case Summary</button>}
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header">Eye Witnesses</div>
                  <div className="content">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
                    vel eveniet quibusdam voluptates delectus doloremque,
                    explicabo tempore dicta adipisci fugit amet dignissimos?
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur sit commodi beatae optio voluptatum sed eius
                    cumque, delectus saepe repudiandae explicabo nemo nam libero
                    ad, doloribus, voluptas rem alias. Vitae?
                  </div>
                  <div className="actions">
                    <button
                      className="case-button"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      close
                    </button>
                  </div>
                </div>
              )}
            </Popup>




            <Popup
              trigger={<button className="case-button">Culprit Details</button>}
              modal
              
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> Culprit Details</div>
                  <div className="content">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
                    vel eveniet quibusdam voluptates delectus doloremque,
                    explicabo tempore dicta adipisci fugit amet dignissimos?
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur sit commodi beatae optio voluptatum sed eius
                    cumque, delectus saepe repudiandae explicabo nemo nam libero
                    ad, doloribus, voluptas rem alias. Vitae?
                  </div>
                  <div className="actions">
                    <button
                      className="case-button"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      close
                    </button>
                  </div>
                </div>
              )}
            </Popup>


            <Popup
              trigger={<button className="case-button">Victim Details</button>}
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header">Victim Details</div>
                  <div className="content">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
                    vel eveniet quibusdam voluptates delectus doloremque,
                    explicabo tempore dicta adipisci fugit amet dignissimos?
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur sit commodi beatae optio voluptatum sed eius
                    cumque, delectus saepe repudiandae explicabo nemo nam libero
                    ad, doloribus, voluptas rem alias. Vitae?
                  </div>
                  <div className="actions">
                    <button
                      className="case-button"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      close
                    </button>
                  </div>
                </div>
              )}
            </Popup>


            <Popup
              trigger={<button className="case-button">Eye Witnesses</button>}
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header">Eye Witness Details</div>
                  <div className="content">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
                    vel eveniet quibusdam voluptates delectus doloremque,
                    explicabo tempore dicta adipisci fugit amet dignissimos?
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur sit commodi beatae optio voluptatum sed eius
                    cumque, delectus saepe repudiandae explicabo nemo nam libero
                    ad, doloribus, voluptas rem alias. Vitae?
                  </div>
                  <div className="actions">
                    <button
                      className="case-button"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      close
                    </button>
                  </div>
                </div>
              )}
            </Popup>


            <Popup
              trigger={<button className="case-button">Proofs</button>}
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header">Eye Witnesses</div>
                  <div className="content">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
                    vel eveniet quibusdam voluptates delectus doloremque,
                    explicabo tempore dicta adipisci fugit amet dignissimos?
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur sit commodi beatae optio voluptatum sed eius
                    cumque, delectus saepe repudiandae explicabo nemo nam libero
                    ad, doloribus, voluptas rem alias. Vitae?
                  </div>
                  <div className="actions">
                    <button
                      className="case-button"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>


        </div>
        <div className="case-grid">
            <div className="case-grid-items"> c</div>
            <div className="case-grid-items"> c</div>
            <div className="case-grid-items"> c</div>
            <div className="case-grid-items"> c</div>
            
        </div>
      </div>
    </div>
  );
};

export default casePage;
