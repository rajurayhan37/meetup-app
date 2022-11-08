import { React, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function MeetupForm(props) {
  const titleRef = useRef();
  const addressRef = useRef();
  const imageRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (e) => {
    const meetup = {
        title: titleRef.current.value,
        address: addressRef.current.value,
        image: imageRef.current.value,
        date: dateRef.current.value,
        description: descriptionRef.current.value
    };
    
    if(!meetup.title || !meetup.address || !meetup.image || !meetup.date || !meetup.description){
        toast.warn("Fillup the all information!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    }else{
      props.onAddMeetup(meetup);
    }
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className="px-4 py-3">
        <ToastContainer />
      <div className="py-3 grid grid-cols-1 lg:grid-cols-2 gap-2">
        <input
          className="w-full px-3 py-3 rounded-lg border-2 border-purple "
          type="text"
          name="title"
          ref={titleRef}
          placeholder="Meetup title"
        />
        <input
          className="w-full px-3 py-3 rounded-lg border-2 border-purple "
          type="date"
          name="date"
          ref={dateRef}
        />
        <input
          className="w-full px-3 py-3 rounded-lg border-2 border-purple "
          type="text"
          name="address"
          ref={addressRef}
          placeholder="Address"
        />
        <input
          className="w-full px-3 py-3 rounded-lg border-2 border-purple "
          type="text"
          name="image"
          ref={imageRef}
          placeholder="Image url"
        />
      </div>

      <textarea
        className="w-full px-3 py-3 rounded-lg border-2 border-purple"
        name="description"
        placeholder="Description"
        ref={descriptionRef}
      ></textarea>
      <button className=" px-5 py-2 text-lg text-light font-medium rounded-md bg-purple">
        Create
      </button>
    </form>
  );
}
export default MeetupForm;
