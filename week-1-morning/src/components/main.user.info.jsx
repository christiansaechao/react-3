/**
 * component: {
 *  props: {
 *  userInfo: {
 *      name:
 * }
 *  }
 * }
 *
 */

export const MainUserInfo = ({
  userInfo: { name, position, department, phoneNumber, email, staffId },
}) => {
  return (
    <section
      id="profile-card"
      className="flex flex-row justify-center items-center"
    >
      {/* Left Side */}
      <div
        id="left-side"
        className="flex flex-row gap-4 justify-center items-center"
      >
        <div className="h-15 w-15 bg-white rounded-full"></div>
        <div>
          <h3 className="text-2xl">{name}</h3>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="border-r-1 border-gray-500 p-2">
              <h4>{position}</h4>
            </div>
            <h4>Product Department</h4>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div
        id="right-side"
        className="flex flex-row justify-center items-center"
      >
        <div>
          <div className="flex flex-row justify-center items-center">
            <h3 className="text-gray-400">Staff Id</h3>
            <h3 className="text-black">SJFJ5664</h3>
          </div>
          <div className="flex flex-row justify-center items-center">
            <h3 className="text-gray-400">Staff Account:</h3>
            <h3 className="text-black">janitor3454</h3>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center">
            <h3 className="text-gray-400">Phone number:</h3>
            <h3 className="text-black">123 456 7890</h3>
          </div>
          <div className="flex flex-row justify-center items-center">
            <h3 className="text-gray-400">Email: </h3>
            <h3 className="text-black">random@random.com</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
