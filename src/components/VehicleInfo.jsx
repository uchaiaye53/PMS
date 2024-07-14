

const VehicleInfo = ({ idx, vehicleInfo, handleEdit }) => {

    return (
      <div>
        <div className="bg-purple-300 m-14 rounded-lg">
          <div>
            <h1 className="text-2xl text-center py-8">
              Total Vehicles number: {idx + 1}
            </h1>
            <div className="overflow-x-auto m-3">
              <table className="min-w-full bg-white border-collapse shadow-md rounded-lg overflow-hidden mb-5">
                <thead className="bg-purple-700 text-white">
                  <tr>
                    <th className="py-2 px-4 text-left">Owner Name</th>
                    <th className="py-2 px-4 text-left">Vehicle Type</th>
                    <th className="py-2 px-4 text-left">License No</th>
                    <th className="py-2 px-4 text-left">Entry Time</th>
                    <th className="py-2 px-4 text-left">Exit Time</th>
                    <th className="py-2 px-4 text-left">Status</th>
                    <th className="py-2 px-4 text-left">Edit form</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-100">
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4">{vehicleInfo.ownerName}</td>
                    <td className="py-2 px-4">{vehicleInfo.vehicleType}</td>
                    <td className="py-2 px-4">{vehicleInfo.licenseNumber}</td>
                    <td className="py-2 px-4">{vehicleInfo.entryTime}</td>
                    <td className="py-2 px-4">{vehicleInfo.exitTime}</td>
                    <td className="py-2 px-4">{vehicleInfo.status}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleEdit(idx)}
                        className="bg-purple-500 w-32 rounded-md p-2"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default VehicleInfo;
  