import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email;
    const phone = form.phone.value;
    const message = form.message.value;

    console.log(name, email, phone, message);
    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Your order placed successfully");
        form.reset();
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
      <h1 className="text-3xl">{title}</h1>
      <h2>Price: {price}</h2>
      <form onSubmit={handleOrder}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="text"
            name="email"
            placeholder="Type here"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered input-secondary w-full"
          />
        </div>
        <textarea
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your message"
          name="message"
        ></textarea>
        <input className="btn btn-primary" type="submit" value="Please Order" />
      </form>
    </div>
  );
};

export default CheckOut;
