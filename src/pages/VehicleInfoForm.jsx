import { useState } from "react";
import VehicleInfo from "../components/VehicleInfo";

const VehicleInfoForm = () => {
  const [vehicleInfos, setVehicleInfos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const demo = {
    licenseNumber: "",
    vehicleType: "",
    ownerName: "",
    phoneNumber: "",
    status: "",
    address: "",
    entryDate: "",
    entryTime: "",
    exitDate: "",
    exitTime: "",
    charge: "",
  };

  const [vehicleInfo, setVehicleInfo] = useState(demo);

  const handleChange = (e) => {
    setVehicleInfo({ ...vehicleInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editMode) {
      const updatedInfos = vehicleInfos.map((info, index) =>
        index === editIndex ? vehicleInfo : info
      );
      setVehicleInfos(updatedInfos);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setVehicleInfos([...vehicleInfos, vehicleInfo]);
    }
    setVehicleInfo(demo);
  };

  const handleEdit = (index) => {
    setVehicleInfo(vehicleInfos[index]);
    setEditMode(true);
    setEditIndex(index);
  };

  return (
    <div>
      <div className="bg-purple-300 max-w-4xl mx-auto rounded-lg">
        <h1 className="text-3xl text-center pt-8">
          Form for Parking Information
        </h1>
        <div className="max-w-3xl mx-auto p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="license-number"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                License number:
              </label>
              <input
                type="text"
                id="license-number"
                name="licenseNumber"
                value={vehicleInfo.licenseNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label
                htmlFor="dropdown"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Choose the vehicle type:
              </label>
              <select
                id="dropdown"
                name="vehicleType"
                value={vehicleInfo.vehicleType}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="">Choose vehicle</option>
                <option value="Microbus">Microbus</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="owner-name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Owner name:
              </label>
              <input
                type="text"
                id="owner-name"
                name="ownerName"
                value={vehicleInfo.ownerName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label
                htmlFor="phone-number"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number:
              </label>
              <input
                type="text"
                id="phone-number"
                name="phoneNumber"
                value={vehicleInfo.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Status:
              </label>
              <select
                id="status"
                name="status"
                value={vehicleInfo.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="">Status</option>
                <option value="in">In</option>
                <option value="out">Out</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Owner Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={vehicleInfo.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label
                htmlFor="entry-date-time"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Entry Date:
              </label>
              <input
                type="date"
                id="entry-date"
                name="entryDate"
                value={vehicleInfo.entryDate}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label
                htmlFor="entry-date-time"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Entry Time:
              </label>
              <input
                type="time"
                id="entry-time"
                name="entryTime"
                value={vehicleInfo.entryTime}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label
                htmlFor="entry-date-time"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Exit Date:
              </label>
              <input
                type="date"
                id="exit-date"
                name="exitDate"
                value={vehicleInfo.exitDate}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label
                htmlFor="entry-date-time"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Exit Time:
              </label>
              <input
                type="time"
                id="exit-time"
                name="exitTime"
                value={vehicleInfo.exitTime}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>


            <div>
              <label
                htmlFor="parking-charge"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Parking Charge:
              </label>
              <select
                id="parking-charge"
                name="charge"
                value={vehicleInfo.charge}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="">Charge</option>
                <option value="300">M-300</option>
                <option value="200">C-200</option>
                <option value="250">T-250</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              {editMode ? "Save Edit" : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <div className="property">
        {vehicleInfos.map((info, idx) => (
          <VehicleInfo
            key={idx}
            idx={idx}
            vehicleInfo={info}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleInfoForm;
