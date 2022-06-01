import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Courses = () => {
  const { db } = useAuth();
  return (
    <section className="h-screen  flex items-center justify-center">
      <main className="flex-wrap flex-1 gap-6 flex bg-[#16003B] h-[60vh] w-[75vw] rounded-lg text-white justify-center p-3">
        {db.map((course) => (
          <Link
            to={`/dashboard/courses/${course.id}`}
            className=" bg-[#3d2861] w-full md:w-1/4 rounded-md shadow-md"
          >
            <div className="text-base flex justify-center items-center h-full font-mono md:text-2xl font-semibold flex-wrap">
              {" "}
              {course.name}
            </div>
          </Link>
        ))}
      </main>
    </section>
  );
};

export default Courses;
