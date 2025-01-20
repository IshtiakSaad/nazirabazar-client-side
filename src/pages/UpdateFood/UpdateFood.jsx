import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

// Function to update food in the database
const updateFood = async (foodId, updatedFood) => {
  const response = await fetch(`https://nazirabazar-server.vercel.app/foods/${foodId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFood),
  });

  if (!response.ok) {
    throw new Error("Failed to update food.");
  }
  return response.json();
};

const UpdateFood = () => {
  const { id: foodId } = useParams();
  const navigate = useNavigate();
  const [foodDetails, setFoodDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch food details on initial load
  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const response = await fetch(`https://nazirabazar-server.vercel.app/foods/${foodId}`);
        if (!response.ok) throw new Error("Failed to fetch food details.");
        const data = await response.json();
        setFoodDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching food details:", error);
        toast.error("Unable to fetch food details.");
        navigate("/manage-foods");
      }
    };

    fetchFoodDetails();
  }, [foodId, navigate]);

  // Set up the mutation for updating food
  const mutation = useMutation({
    mutationFn: (updatedFood) => updateFood(foodId, updatedFood),
    onSuccess: () => {
      toast.success("Food updated successfully!");
      navigate("/manage-foods");
    },
    onError: (error) => {
      console.error("Error updating food:", error);
      toast.error("Unable to update food.");
    },
  });

  // Handle form submission to update food
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedFood = {
      foodName: e.target.foodName.value || foodDetails.foodName,
      foodImage: e.target.foodImage.value || foodDetails.foodImage,
      foodQuantity: e.target.foodQuantity.value || foodDetails.foodQuantity,
      foodStatus: e.target.foodStatus.value || foodDetails.foodStatus,

      pickupLocation:
        e.target.pickupLocation.value || foodDetails.pickupLocation,
      expiredDateTime:
        e.target.expiredDateTime.value || foodDetails.expiredDateTime,
      additionalNotes:
        e.target.additionalNotes.value || foodDetails.additionalNotes,
    };

    mutation.mutate(updatedFood);
  };

  // Show loading state until food details are fetched
  if (loading) {
    return <p className="text-center text-gray-500">Loading food details...</p>;
  }

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Update Food Details
        </h1>
        <form onSubmit={handleUpdate}>
          {/* Name */}
          <label className="block mb-4">
            <span className="text-sm font-semibold text-gray-700">Name</span>
            <input
              name="foodName"
              placeholder={foodDetails.foodName}
              className="w-full mt-1 px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>
          {/* Image */}
          <label className="block mb-4">
            <span className="text-sm font-semibold text-gray-700">
              Food Image (URL)
            </span>
            <input
              name="foodImage"
              placeholder={foodDetails.foodImage}
              className="w-full mt-1 px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>
          {/* Quantity */}
          <label className="block mb-4">
            <span className="text-sm font-semibold text-gray-700">
              Quantity
            </span>
            <input
              name="foodQuantity"
              type="number"
              placeholder={foodDetails.foodQuantity}
              className="w-full mt-1 px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>
          {/* Pickup Location */}
          <label className="block mb-4">
            <span className="text-sm font-semibold text-gray-700">
              Pickup Location
            </span>
            <input
              name="pickupLocation"
              placeholder={foodDetails.pickupLocation}
              className="w-full mt-1 px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>
          {/* Expiry Date */}
          <label className="block mb-4">
            <span className="text-sm font-semibold text-gray-700">
              Expired Date/Time
            </span>
            <input
              type="datetime-local"
              name="expiredDateTime"
              placeholder={foodDetails.expiredDateTime}
              className="w-full mt-1 px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>
          {/* Food Status */}
          <label className="block mb-4">
            <span className="text-sm font-semibold text-gray-700">
              Food Status
            </span>
            <select
              className="w-full mt-1 px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              id="foodStatus"
              name="foodStatus"
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </label>
          {/* Additional Notes */}
          <label className="block mb-4">
            <span className="text-sm font-semibold text-gray-700">
              Additional Notes
            </span>
            <input
              name="additionalNotes"
              placeholder={foodDetails.additionalNotes}
              className="w-full mt-1 px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>
          {/* Submit */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              disabled={mutation.isLoading}
              className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              {mutation.isLoading ? "Updating..." : "Update"}
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => navigate("/manage-foods")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
