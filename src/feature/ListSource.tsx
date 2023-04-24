import React from "react";

interface ListSourceI {
  data: {
    id: number;
    username: string;
    email: string;
    website: string;
  }[];
}
const ListSource: React.FC<ListSourceI> = ({ data }) => {
  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <h1>
              {item.id}. {item.username}
            </h1>
            <h2>{item.email}</h2>
            <p>{item.website}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListSource
