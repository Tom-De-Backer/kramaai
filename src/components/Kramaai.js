import React, { Component } from "react";

import "../styles/Kramaai.css";
import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";

class Kramaai extends Component {
  render() {
    return (
      <div className="kramaaiDiv">
        <SideSpace />
        <section>
          <div className="kramaaiTitle">Kramaai</div>
          <div className="kramaaiExplanation">
            De kramaai is ons driemaandelijks ledentijdschrift waarin je alle
            komende activiteiten kan vinden per tak. Hieronder vind je enkele
            kramaai’s van vroeger en nu.
          </div>
          <br />
            <div>
              <div className="titleTable">2022 - 2023</div>
              <div>
                <div className="kramaaiLink">
                  <a
                    className="kramaaiA"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.kramaai.be/kramaai/2022-2023/kramaai-sep-okt-nov.pdf">
                    september-oktober-november
                  </a>
				</div>
                <div className="kramaaiLink">
                  <a
                    className="kramaaiA"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://kramaaiblog.files.wordpress.com/2022/12/kramaai-2223-dec-jan-feb.pdf">
					december-januari-februari
                  </a>
                </div>
				<div className="kramaaiLink">
                  <a
                    className="kramaaiA"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://kramaaiblog.files.wordpress.com/2023/03/kramaai-2223-maart-april-mei.pdf">
					maart-april-mei
                  </a>
                </div>
              </div>
            </div>
          {/* <h3>Nog even geduld voor de nieuwste Kramaai</h3>) */}
          {/* titleTable is zelfde css als bij LeidingTable.css */}
          {/* <div className="titleTable">2021 - 2022</div>
          <br />
          <div>
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2022/03/kramaai-final-maart-april-mei.pdf"
              >
                maart-april-mei
              </a>
            </div>
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2021/12/kramaai-december-februari-20212022-2.pdf"
              >
                december-januari-februari
              </a>
            </div>
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2021/09/kramaai-sept-okt-nov-2021-definitive.pdf"
              >
                september-oktober-november
              </a>
            </div>
            <br />
          </div>
          <br /> */}
          {/* <div>
            <br />
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2020/09/kramaaisepoktnov2020.pdf"
              >
                September-Oktober-November
              </a>
            </div>
            <br />
          </div>
          // titleTable is zelfde css als bij LeidingTable.css 
          <div className="titleTable">2019 - 2020</div>
          <div>
            <br />
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2020/02/kramaai-maa-apr-mei-2019-2020-2.pdf"
              >
                Maart-April-Mei
              </a>
            </div>
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2019/11/kramaai-dec-jan-feb-2019-2020.pdf"
              >
                December-Januari-Februari
              </a>
            </div>
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2019/09/kramaai-sep-okt-nov-2019-2020-1.pdf"
              >
                September-Oktober-November
              </a>
            </div>
            <br />
          </div>
          <div className="titleTable">2018 - 2019</div>
          <div>
            <br />
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2019/03/maart-april-mei.pdf"
              >
                Maart-April-Mei
              </a>
            </div>

            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2018/11/december-januari-februari.pdf"
              >
                December-Januari-Februari
              </a>
            </div>

            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2018/10/september-oktober-november.pdf"
              >
                September-Oktober-November
              </a>
            </div>
            <br />
          </div>
          <div className="titleTable">2017 - 2018</div>
          <div>
            <br />
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2018/02/maandschors-ma-apr-mei.pdf"
              >
                Maart-April-Mei
              </a>
            </div>

            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2017/11/kramaai-dec-jan-feb2.pdf"
              >
                December-Januari-Februari
              </a>
            </div>

            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2016/09/maandschors-sept-okt-nov.pdf"
              >
                September-Oktober-November
              </a>
            </div>
            <br />
          </div>
          <div className="titleTable">2016 - 2017</div>
          <div>
            <br />
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2016/09/kramaai-2016-2017-3-maa-apr-mei.pdf"
              >
                Maart-April-Mei
              </a>
            </div>

            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2016/09/kramaai-december-januari-februari1.pdf"
              >
                December-Januari-Februari
              </a>
            </div>

            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2016/09/kramaai-sep-okt-nov-16-171.pdf"
              >
                September-Oktober-November
              </a>
            </div>
            <br />
          </div>
          <div className="titleTable">2015 - 2016</div>
          <div>
            <br />
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2016/09/kramaai-2015-2016-3-maa-apr-mei.pdf"
              >
                Maart-April-Mei
              </a>
            </div>

            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2016/09/kramaai-2015-2016-2-dec-jan-feb.pdf"
              >
                December-Januari-Februari
              </a>
            </div>

            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2016/09/kramaai-2015-2016-1-sep-okt-nov.pdf"
              >
                September-Oktober-November
              </a>
            </div>
            <br />
          </div>
          <div className="titleTable">2014 - 2015</div>
          <div>
            <br />
            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2016/09/kramaai-2014-2015-3-maart-april-mei.pdf"
              >
                Maart-April-Mei
              </a>
            </div>

            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2016/09/kramaai-2014-2015-2-december-januari-februari.pdf"
              >
                December-Januari-Februari
              </a>
            </div>

            <div className="kramaaiLink">
              <a
                className="kramaaiA"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kramaaiblog.files.wordpress.com/2016/09/kramaai-2014-2015-1-september-oktober-november.pdf"
              >
                September-Oktober-November
              </a>
            </div>
            <br />
          </div> */}
        </section>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default Kramaai;
