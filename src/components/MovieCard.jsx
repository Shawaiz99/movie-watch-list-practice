import { FaTrashCan } from "react-icons/fa6";

function MovieCard() {
  return (
    <div className="col-6 m-5">
      <div className="card bg-bone-white text-dark">
        <span className="position-absolute top-0 start-0 translate-middle badge bg-success custom-badge-position">
          8.7
        </span>
        <div className="card-body d-flex justify-content-between">
          <h3 className="card-title m-0">Inception</h3>
          <div className="text-danger">
            <FaTrashCan />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
