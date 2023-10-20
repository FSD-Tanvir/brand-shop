import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BrandsSection = ({ brands }) => {

  let navigate = useNavigate(); 
  const handleClick= (name) =>{ 
    let path = `/${name}`; 
    navigate(path);
    
  }


  return (
    <div className="py-5">
      <div >
        <h1 className="font-semibold text-2xl md:text-7xl p-3 sm:py-10">Our Featured Brands</h1>
      </div>
      <div className="grid sm:grid-cols-3 grid-rows-2 gap-5 px-2">
        {brands.map((brand) => {
          const {name , img} = brand
          return (
            <div onClick={()=>handleClick(name)} key={name} className="card image-full">
              <figure>
                <img src={img} alt="" />
              </figure>
              <div className="card-body flex-col-reverse">
                <h2 className="card-title">{name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

BrandsSection.propTypes = {
  brands: PropTypes.array,
};

export default BrandsSection;
