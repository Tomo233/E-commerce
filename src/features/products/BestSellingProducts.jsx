import RedBorder from "../../components/RedBorder";
import Button from "../../components/Button";
import Carousel from "./Carousel";
function BestSellingProducts() {
  return (
    <section className="mb-20">
      <RedBorder>This Month</RedBorder>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
        <Button type="primary" to="/products">
          View All
        </Button>
      </div>
      <Carousel />
    </section>
  );
}

export default BestSellingProducts;
