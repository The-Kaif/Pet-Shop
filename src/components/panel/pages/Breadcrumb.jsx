import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function Breadcrumb() {
  const location = useLocation();
  const [path, setPath] = useState("");

  // Update the 'path' state whenever the location pathname changes
  useEffect(() => {
    setPath(location.pathname.toUpperCase());
  }, [location.pathname]);

  return (
    <div className="fw-bold ms-5" style={{ color: "#087EA4" }}>
      {/* Display the translated breadcrumb page label */}
      {path.split("/")[2]}{" "}

      {/* Display a chevron icon for separation */}
      <FontAwesomeIcon color="#087EA4" icon={faChevronRight} />
    </div>
  );
}

export default Breadcrumb;