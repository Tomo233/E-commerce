import { Rating as ReactRating } from "primereact/rating";

export default function Rating({ value }) {
  return (
    <div className="card flex justify-content-center mt-3">
      <ReactRating value={value} readOnly cancel={false} />
    </div>
  );
}
