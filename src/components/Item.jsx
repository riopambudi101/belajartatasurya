import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <Link to={`/detail/${data.nama}`} id="item-container" className="relative">
      <div className="bg-item-list absolute bottom-0 w-full -z-10"></div>
      <div className="w-full h-full flex justify-center items-end pb-9 px-5 relative">
        <div className="img-item-wrap flex justify-center absolute top-0 w-full">
          <img src={data.img} alt={data.nama} />
        </div>
        <div className="text-content">
          <h1 className="title-list-item text-4xl text-center">{data.nama}</h1>
          <p className="desc-list-item mt-5 text-xl text-center">{data.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
