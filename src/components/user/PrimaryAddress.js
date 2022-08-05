import { useSelector } from "react-redux";
import { selectCustomerInfo } from "../../features/auth/authUserSlice";

const PrimaryAddress = () => {
  const customerInfo = useSelector(selectCustomerInfo);

  return (
    <div>
      {customerInfo.address[0] ? (
        <table className="table text-center table-striped">
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <p className="fs-6 fw-bolder">Address</p>
              </td>
              <td>
                <div>
                  <p className="fs-6 fw-bolder">
                    House/Building number : {customerInfo.address[0].house_no} ,{" "}
                  </p>
                  <p className="fs-6 fw-bolder">
                    {customerInfo.address[0].land_mark} ,
                  </p>
                  <p className="fs-6 fw-bolder">
                    {customerInfo.address[0].street} ,{" "}
                    {customerInfo.address[0].city}
                  </p>
                  <p className="fs-6 fw-bolder">
                    Phone : {customerInfo.address[0].phone_no}
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="fs-6 fw-bolder text-danger">
          No address found, please add new address
        </p>
      )}
    </div>
  );
};
export default PrimaryAddress;
