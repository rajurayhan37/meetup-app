import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import MeetupForm from "../components/MeetupForm";

function NewMeetupPage() {

  const navigate = useNavigate();

  const addMeetup = async (meetup) => {

      const promise = fetch("https://meetup-app-28ecd-default-rtdb.firebaseio.com/meetups.json", {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      await toast.promise(promise, {
        pending:"Creating your meetup",
        success:"Successfully created your meetup.",
        error:"Failed to create your meetup!",
      },{
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
      });

      setTimeout(() => {
        navigate("/", { replace: true });
      },1000);
  };

  return (
    <Layout>
      <div className="px-2">
        <div className="py-5">Home {">"} New Meetup</div>
        <div className="flex justify-center ">
          <div className="w-full md:w-4/5 lg:w-3/6 shadow-lg rounded-lg">
            <h2 className="p-5 bg-purple rounded-t-lg text-xl font-semibold text-light">
              Create a new Meetup
            </h2>
            <MeetupForm onAddMeetup={addMeetup} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default NewMeetupPage;
