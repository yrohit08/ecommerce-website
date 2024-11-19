import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";

const Profile = () => {
    const { user, login, isLoggedIn } = useContext(AuthContext); // Use the AuthContext
    const [profile, setProfile] = useState({
        ...user,
        address: user?.address || "",
        phone: user?.phone || "",
    }); // Initialize profile with user data and additional fields
    const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
    const navigate = useNavigate();


    useEffect(() => {
        // Check if the user is already logged in
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (profile) {
            // Update user details in localStorage
            const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
            const updatedUsers = registeredUsers.map((user) =>
                user.email === profile.email ? profile : user
            );
            localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

            // Update the context user and sessionStorage
            login(profile);

            // Exit edit mode
            setIsEditing(false);
            alert("Profile updated successfully!");
        }
    };

    if (!profile) {
        return <div>Loading profile...</div>;
    }

    return (
        <>
            <Header />
            <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
                <h3>My Profile</h3>
                <form onSubmit={handleSave}>
                    {/* Username Field */}
                    <div style={{ marginBottom: "10px" }}>
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={profile.username}
                            disabled // Username is read-only
                            style={{ width: "100%", padding: "8px", marginTop: "5px", backgroundColor: "#f5f5f5" }}
                        />
                    </div>

                    {/* Email Field */}
                    <div style={{ marginBottom: "10px" }}>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            disabled // Email is read-only
                            style={{ width: "100%", padding: "8px", marginTop: "5px", backgroundColor: "#f5f5f5" }}
                        />
                    </div>

                    {/* Address Field */}
                    <div style={{ marginBottom: "10px" }}>
                        <label>Address:</label>
                        <textarea
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            disabled={!isEditing}
                            rows="3"
                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                        />
                    </div>

                    {/* Phone Number Field */}
                    <div style={{ marginBottom: "10px" }}>
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            disabled={!isEditing}
                            pattern="^\+?[1-9]\d{1,14}$"
                            title="Please enter a valid international phone number, with or without a country code."
                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                        />
                    </div>

                    {/* Buttons */}
                    <div>
                        {isEditing ? (
                            <button
                                type="submit" // Save button triggers form submit
                                style={{
                                    padding: "10px 20px",
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                type="button" // Edit button does not trigger form submit
                                onClick={() => setIsEditing(true)}
                                key="buttonEdit"
                                style={{
                                    padding: "10px 20px",
                                    backgroundColor: "#6c757d",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
