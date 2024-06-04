import React from "react";
const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img
          src='https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-coconut-and-other-tree-around-white-cloud-on-blue-sky_74190-13670.jpg?size=626&ext=jpg&ga=GA1.1.1120630260.1710274128&semt=ais_user'
          alt='beach on the ocean overlooking the tropical forest'
        />
      </div>
      <div>
        Avatar+description
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnixZ5tf8EcJ1alrDc67ATX7tyY87zrBsBw&s'
          alt='face of a red cat with glasses'
        />
      </div>
      <div>
        My posts
        <div>New posts</div>
        <div>
          <div>post_1</div>
          <div>post_2</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
