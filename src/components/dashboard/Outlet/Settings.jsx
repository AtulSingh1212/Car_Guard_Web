import React, { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Profile saved:", profile);

    // Later you can send this data to your API
    alert("Settings saved successfully!");
  };

  return (
    <div className="text-white w-full flex flex-col items-center justify-centerp-2">
      <div className="w-full max-w-5xl">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">
          Settings
        </h1>

        <p className="text-sm text-gray-400 mt-2">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Profile Settings */}
      <section className="bg-[#151620] border border-[#292b38] rounded-xl p-6 mb-6">

        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            Profile Information
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Update your personal information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* First Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              className="
                w-full
                bg-[#0d0e17]
                border border-[#303240]
                rounded-lg
                px-4 py-3
                text-white
                outline-none
                focus:border-purple-500
              "
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              className="
                w-full
                bg-[#0d0e17]
                border border-[#303240]
                rounded-lg
                px-4 py-3
                text-white
                outline-none
                focus:border-purple-500
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="
                w-full
                bg-[#0d0e17]
                border border-[#303240]
                rounded-lg
                px-4 py-3
                text-white
                outline-none
                focus:border-purple-500
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="
                w-full
                bg-[#0d0e17]
                border border-[#303240]
                rounded-lg
                px-4 py-3
                text-white
                outline-none
                focus:border-purple-500
              "
            />
          </div>

        </div>

        {/* Save button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className="
              bg-purple-600
              hover:bg-purple-700
              text-white
              px-5 py-2.5
              rounded-lg
              text-sm
              font-medium
              transition
            "
          >
            Save Changes
          </button>
        </div>

      </section>

      {/* Notification Settings */}
      <section className="bg-[#151620] border border-[#292b38] rounded-xl p-6 mb-6">

        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            Notifications
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Choose how you want to receive notifications.
          </p>
        </div>

        <div className="space-y-5">

          {/* Push Notifications */}
          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-sm font-medium">
                Push Notifications
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Receive notifications about your account.
              </p>
            </div>

            <button
              onClick={() => setNotifications(!notifications)}
              className={`
                relative
                w-11 h-6
                rounded-full
                transition
                ${notifications ? "bg-purple-600" : "bg-gray-600"}
              `}
            >
              <span
                className={`
                  absolute
                  top-1
                  w-4 h-4
                  bg-white
                  rounded-full
                  transition
                  ${notifications ? "left-6" : "left-1"}
                `}
              />
            </button>

          </div>

          {/* Email Updates */}
          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-sm font-medium">
                Email Updates
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Receive important updates by email.
              </p>
            </div>

            <button
              onClick={() => setEmailUpdates(!emailUpdates)}
              className={`
                relative
                w-11 h-6
                rounded-full
                transition
                ${emailUpdates ? "bg-purple-600" : "bg-gray-600"}
              `}
            >
              <span
                className={`
                  absolute
                  top-1
                  w-4 h-4
                  bg-white
                  rounded-full
                  transition
                  ${emailUpdates ? "left-6" : "left-1"}
                `}
              />
            </button>

          </div>

        </div>

      </section>

      {/* Security Settings */}
      <section className="bg-[#151620] border border-[#292b38] rounded-xl p-6 mb-6">

        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            Security
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Manage your account security.
          </p>
        </div>

        <div className="space-y-5">

          {/* Password */}
          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-sm font-medium">
                Password
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Last changed recently.
              </p>
            </div>

            <button
              className="
                border border-[#3a3c4a]
                hover:bg-[#20212d]
                px-4 py-2
                rounded-lg
                text-sm
                transition
              "
            >
              Change Password
            </button>

          </div>

          {/* Two Factor */}
          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-sm font-medium">
                Two-Factor Authentication
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Add an extra layer of security to your account.
              </p>
            </div>

            <button
              onClick={() => setTwoFactor(!twoFactor)}
              className={`
                relative
                w-11 h-6
                rounded-full
                transition
                ${twoFactor ? "bg-purple-600" : "bg-gray-600"}
              `}
            >
              <span
                className={`
                  absolute
                  top-1
                  w-4 h-4
                  bg-white
                  rounded-full
                  transition
                  ${twoFactor ? "left-6" : "left-1"}
                `}
              />
            </button>

          </div>

        </div>

      </section>

      {/* Danger Zone */}
      <section className="bg-[#151620] border border-red-900/40 rounded-xl p-6">

        <div>
          <h2 className="text-lg font-semibold text-red-400">
            Danger Zone
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            These actions can permanently affect your account.
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">

          <div>
            <h3 className="text-sm font-medium">
              Delete Account
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Permanently delete your account and all associated data.
            </p>
          </div>

          <button
            className="
              border border-red-600
              text-red-400
              hover:bg-red-600
              hover:text-white
              px-4 py-2
              rounded-lg
              text-sm
              transition
            "
          >
            Delete Account
          </button>

        </div>

      </section>
      </div>

    </div>
  );
};

export default Settings;