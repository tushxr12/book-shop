import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex-h-screen items-center justify-center mt-20 mb-20 max-w-lg mx-auto p-8 shadow-md rounded-lg">
        <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div>
            <span>Message</span>
            <textarea
              id="message"
              name="message"
              placeholder="Type Your Message"
              rows="6"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("message", { required: true })}
            />
            <br />
            {errors.message && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-400 text-black px-4 py-2 rounded-md shadow-sm hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
