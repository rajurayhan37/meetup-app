function MeetupItem(props) {
  return (
    <div className="shadow-lg rounded-md">
      <h2 className="px-2 py-3 text-light rounded-t-md bg-purple">
        {props.title}
      </h2>
      <img className="w-full mb-3" alt={props.title} src={props.imageUrl} />
      <div className="px-2">
        <div className="flex justify-between">
          <p className="px-2 py-1 font-semibold text-purple rounded-2xl border-[1px] border-purple">
            {props.date}
          </p>
          <p className="px-3 py-1 font-semibold rounded-2xl text-pink border-[1px] border-pink">
            {props.address.substring(0, 20)}..
          </p>
        </div>
        <p className="mt-3">{props.description}...</p>
      </div>
      <div className="mx-4 py-3 flex justify-between">
        <button className="px-2 py-2 text-light rounded-md bg-pink">
          Add Favorite
        </button>
        <button className="px-2 py-2 text-light rounded-md bg-purple">
          Read More
        </button>
      </div>
    </div>
  );
}
export default MeetupItem;
