import { Link } from 'react-router-dom';

const Item = ({ data }) => {
  return (
    <Link to={`/detail/${data.nama}`} id="item-container" className="relative">
      <div className="bg-item-list absolute bottom-0 w-full"></div>
      <div className="absolute w-full h-full">
        <div className="img-item-wrap flex justify-center">
          <img src={data.img} alt={data.nama} />
        </div>
        <div className="text-content px-9">
          <h1 className="title-list-item mt-5 text-5xl text-center">
            {data.nama}
          </h1>
          <p className="desc-list-item mt-3 text-xl text-center">{data.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
