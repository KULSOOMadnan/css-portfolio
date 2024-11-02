import React from "react";

const PersonlInfo = [
    { id: 1, title: "First Name : ", description: "Kulsoom Adnan" },
    { id: 2, title: "Last Name : ", description: "Adnan" },
    { id: 3, title: "Age : ", description: "19 Years" },
    { id: 4, title: "Nationality : ", description: "Pakistani" },
    { id: 6, title: "City  : ", description: "Karachi" },
    { id: 5, title: "Address  : ", description: "-" },
    { id: 7, title: "Phone : ", description: "-" },
    { id: 8, title: "Email : ", description: "adnanirfan282@gamil.com" },
    { id: 9, title: "Langauges : ", description: "Urdu , English" },
    { id: 10, title: "Linkedin : ", description: "Kulsoom Adnan" },
];

function Info() {
  return(
    <>
        {PersonlInfo.map(({title, description} , index ) => {
            return(
                <li className="info__item" key={index}>
                    <span className="info__title">{title}</span>
                    <span className="info__description">{description}</span>
                </li>
            )
        })
        }
    </>
  )
}

export default Info;
