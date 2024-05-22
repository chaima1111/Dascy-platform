import React, { useState } from "react";
import "./datalink.css";
const DataLinkLay = () => {
  const [showAnotherBox, setShowAnotherBox] = useState(false);

  const handleClick = () => {
    setShowAnotherBox(true);
  };

  return (
    <div className="dascy__dataLink">
      <div className="dascy__datalink-container">
        <div className="dascy__datalink-container-header">
          <h1>Data Link Layer</h1>
        </div>
        <div className="dascy__datalink-container-illust">
          <div className="dascy__datalink-container-illustout  dascy__datalink-container-illust1">
            {" "}
            <h4>Data Link Layer</h4>
          </div>
          <div className="dascy__datalink-container-illustout dascy__datalink-container-illust2">
            <h4>LLC Sublayer </h4>
          </div>
          <div className="dascy__datalink-container-illustout dascy__datalink-container-illust22">
            <h4>MAC Sublayer </h4>
          </div>
          <div className="dascy__datalink-container-illustout dascy__datalink-container-illust3">
            <h4></h4>Physical Layer
          </div>
          <div className="dascy__datalink-container-illustout dascy__datalink-container-illust4">
            <h4></h4>Physical Layer
          </div>

          <div
            className="dascy__datalink-container-illustout  dascy__datalink-container-illust5"
            onClick={handleClick}
          >
            {" "}
            <h4>Etherent 802.3</h4>
          </div>

          <div className="dascy__datalink-container-illustout  dascy__datalink-container-illust11">
            <h4>IEEE 802.2</h4>
          </div>
          <div className="dascy__datalink-container-illustout dascy__datalink-container-illust6">
            <h4>IEEE 802.3u</h4>
          </div>
          <div className="dascy__datalink-container-illustout dascy__datalink-container-illust7">
            <h4>IEEE 802.3u</h4>
          </div>
          <div className="dascy__datalink-container-illustout dascy__datalink-container-illust8">
            <h4>IEEE 802.3z</h4>
          </div>
          <div className="dascy__datalink-container-illustout dascy__datalink-container-illust9">
            <h4>IEEE 802.3ab</h4>
          </div>
          <div className="dascy__datalink-container-illustout dascy__datalink-container-illust10">
            <h4>Token RIng</h4>
          </div>
        </div >
        <div className="dascy__ethernet-trame-container">
          {showAnotherBox && (
            <div className="another-box">
              <div className="dascy__ethernet-trame">
                <div className="dascy__ethernet-trame1">
                  <h4>Preamble</h4>
                </div>
                <div className="dascy__ethernet-trame2">
                  <h4>Destination address</h4>
                </div>
                <div className="dascy__ethernet-trame2">
                  <h4>Source address</h4>
                </div>
                <div className="dascy__ethernet-trame3">
                  <h4>Type</h4>
                </div>
                <div className="dascy__ethernet-trame4">
                  <h4>Data</h4>
                </div>
                <div className="dascy__ethernet-trame5">
                  <h4>CRC</h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataLinkLay;
