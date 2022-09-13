import "./List.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbr from "../../components/Navbar/Navbr";
import Datatable from "../../components/datatable/Datatable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbr />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
