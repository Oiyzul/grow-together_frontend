import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white  shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src={"/noAvatar.png"}
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      <div className="flex-1">
        <form action="" className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          />
          <div>
            <Image
              src={"/emoji.png"}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
          </div>
        </form>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div>
            <Image
              src={"/addImage.png"}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Photo
          </div>
          <div>
            <Image
              src={"/addVideo.png"}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Video
          </div>
          <div>
            <Image
              src={"/poll.png"}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Poll
          </div>
          <div>
            <Image
              src={"/addEvent.png"}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
