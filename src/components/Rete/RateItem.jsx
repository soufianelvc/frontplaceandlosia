import { useDispatch, useSelector } from 'react-redux';
import rate from '../../images/rate.png'
import { useEffect } from 'react';
import { getClientById } from '../../redux/reducers/ClientSlice';
const RateItem = ({cmmts}) => {

  const dispatch = useDispatch();
    console.log(cmmts)
    useEffect(() => {
      // console.log(cid);
      dispatch(getClientById(cmmts.user_id));
    }, [dispatch]);
    const userInfo = useSelector(state => state.infoClient.Client);
    // console.log(userInfo)
    return (
        <div>
            <div className="row mt-3">
                <div className="col d-felx me-5">
                <img alt="" height="50px" width="50px"  src={`http://localhost:8000/images/${userInfo.image}`} style={{borderRadius:"50px"}}/>
                    <div className="rate-name  d-inline ms-2"> {userInfo.name} {userInfo.name2} </div>
                    <div className="cat-rate  d-inline  p-1 pt-2">{cmmts.rating}</div>
                    <img className="" src={rate} alt="" height="16px" width="16px" />
                </div>
            </div>
            <div className="row border-bottom mx-2">
                <div className="col d-felx pb-2">
                    <div className="rate-description  d-inline ms-5 ">
                      {cmmts.cCmtt}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RateItem