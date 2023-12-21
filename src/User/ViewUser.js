import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

export default function ViewUser() {
  const [user, setUser] = setUser({
    firstname: "",
    lastname: "",
    email: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9191/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-2 mt-2 shadow">
          <h2 className="text-center m-1"> User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id:
              <ul className="list-list-group-flush">
                <li className="list-group-item">
                  <b>FirstName:</b>
                  {user.firstname}
                </li>
                <li className="list-group-item">
                  <b>Lastname:</b>
                  {user.lastname}
                </li>
                <li className="btn bt">
                  <b>Email:</b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </link>
        </div>
      </div>
    </div>
  );
}
