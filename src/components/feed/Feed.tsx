import Image from "next/image";
import Comments from "./Comments";

const Feed = () => {
  return (
    <div>
      <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          {/* USER */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={"/noAvatar.png"}
                width={40}
                height={40}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">username</span>
            </div>
          </div>
          {/* DESC */}
          <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
              <Image
                src={
                  "https://images.pexels.com/photos/28259501/pexels-photo-28259501/free-photo-of-a-woman-in-a-sequin-dress-sitting-on-a-bathtub.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                }
                fill
                className="object-cover rounded-md"
                alt=""
              />
            </div>

            <p>description</p>
          </div>
          {/* INTERACTION */}

          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Feed;
