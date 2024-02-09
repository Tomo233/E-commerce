/* eslint-disable react/prop-types */
import { MegaMenu } from "primereact/megamenu";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import VerticalLine from "../../components/VerticalLine";

function ProductNavigation({ items }) {
  return (
    <div className="relative w-64 flex">
      <MegaMenu
        model={items}
        orientation="verticaly"
        breakpoint="960px"
        className="w-96 mt-5  bg-white cursor-pointer"
      />
      <VerticalLine />
    </div>
  );
}

export default ProductNavigation;
