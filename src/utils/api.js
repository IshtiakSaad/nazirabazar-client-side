const BASE_URL = "https://nazirabazar-server.vercel.app";

export const addUserToDatabase = async (user) => {
    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to add/update user.");
        }

        return await response.json(); 
    } catch (error) {
        console.error("Error adding/updating user:", error);
        throw error;
    }
};

// Add a food to favorites
export const addToFavorites = async (uid, foodId) => {
    console.log("Recieved:", foodId);
    const response = await fetch(`${BASE_URL}/users/${uid}/favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ foodId }),
    });

    if (!response.ok) {
        throw new Error("Failed to add food to favorites.");
    }

    return await response.json();
};

// Fetch a user's favorite foods
export const fetchFavorites = async (uid) => {
    const response = await fetch(`${BASE_URL}/users/${uid}/favorites`);

    if (!response.ok) {
        throw new Error("Failed to fetch favorite foods.");
    }

    return await response.json();
};
