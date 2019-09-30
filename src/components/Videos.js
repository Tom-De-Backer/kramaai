import React, { Component } from "react";

import "../styles/Videos.css";
import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";

import { Player } from "video-react";

import "../../node_modules/video-react/dist/video-react.css";

class Videos extends Component {
  render() {
    return (
      <div className="videosDiv">
        <SideSpace />
        <section className="videosDivDiv">
          <div className="videosTitle">
            Video's leidersvoorstelling 2019-2020
          </div>
          <div className="videosExplanation">
            De video's van leidersvoorstelling komen weldra online!
          </div>
          <br />
          {/* titleTable is zelfde css als bij LeidingTable.css */}
          <div className="titleTable">Kapoenen</div>
          <div>
            <br />
            <div className="videosLink">
              <Player>
                <source src="http://kramaai.be/images/videos/2019-2020/welpenLeiding2019-2020.mp4" />
              </Player>
            </div>
            <br />
          </div>
          <div className="titleTable">Welpen</div>
          <div>
            <br />
            <div className="videosLink">
              <Player>
                <source src="http://kramaai.be/images/videos/2019-2020/welpenLeiding2019-2020.mp4" />
              </Player>
            </div>
            <br />
          </div>
          <div className="titleTable">Bevers</div>
          <div>
            <br />
            <div className="videosLink">
              <Player>
                <source src="http://kramaai.be/images/videos/2019-2020/welpenLeiding2019-2020.mp4" />
              </Player>
            </div>
            <br />
          </div>
          <div className="titleTable">Jong-Givers</div>
          <div>
            <br />
            <div className="videosLink">
              <Player>
                <source src="http://kramaai.be/images/videos/2019-2020/welpenLeiding2019-2020.mp4" />
              </Player>
            </div>
            <br />
          </div>
          <div className="titleTable">Givers</div>
          <div>
            <br />
            <div className="videosLink">
              <Player>
                <source src="http://kramaai.be/images/videos/2019-2020/welpenLeiding2019-2020.mp4" />
              </Player>
            </div>
            <br />
          </div>
          <div className="titleTable">Jins</div>
          <div>
            <br />
            <div className="videosLink">
              <Player>
                <source src="http://kramaai.be/images/videos/2019-2020/welpenLeiding2019-2020.mp4" />
              </Player>
            </div>
            <br />
          </div>
          <div className="titleTable">Groepsleiding</div>
          <div>
            <br />
            <div className="videosLink">
              <Player>
                <source src="http://kramaai.be/images/videos/2019-2020/welpenLeiding2019-2020.mp4" />
              </Player>
            </div>
            <br />
          </div>
        </section>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default Videos;
