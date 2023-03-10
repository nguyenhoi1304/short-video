import Header from "./Header";
import Siderbar from "./Siderbar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Siderbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
