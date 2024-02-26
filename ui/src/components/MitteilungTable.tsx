import logo from '../assets/images/KTB_Logo_rigth.png';

import { data } from '../mock/data';
import { Link } from 'react-router-dom';

const MitteilungTable = () => {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center mt-4'>
        <h3 className='text-primary'>KTBU Link HUB</h3>
        <img width={130} src={logo} alt='' />
      </div>
      <div className='border border-primary p-2 mt-2'>
        {data?.map((item, index) => (
          <Link style={{ textDecoration: 'none' }} to={item.link}>
            <div
              key={index}
              className='py-5 border border-2 border-primary text-center w-25 mt-2'
            >
              <img width={75} src={item?.logo} alt={item.logo} />
              <h3 className='text-primary mt-4'>{item.text}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MitteilungTable;
