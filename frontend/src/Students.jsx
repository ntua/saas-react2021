import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentApi from "./StudentApi";

const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentApi.get("");
        setStudents(response.data.data.students);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <Link to={"/addStudent"} className="btn btn-success mb-3">
        Add Student
      </Link>
      <table className="table table-hover table-dark mb-6">
        <thead>
          <tr>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student) => {
              return (
                <tr key={student.student_id}>
                  <td>{student.firstname}</td>
                  <td>{student.lastname}</td>
                  <td>{student.username}</td>
                  <td>{student.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
