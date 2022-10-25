import { Link } from "react-router-dom";

function P403() {
  return (
    <div>
      <h2>403 page -- khong du quyen truy cap</h2>
      <h3>
        <Link to={"/"}>trang chu</Link>
      </h3>
    </div>
  );
}

export default P403;
