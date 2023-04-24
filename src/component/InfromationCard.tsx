import { Information, InformationRecord } from "@/utils/model";
import Link from "next/link";
import React from "react";

const InfromationCard = ({
  id,
  firstName,
  lastName,
  email,
}: InformationRecord) => {
  return (
    <Link href={`/detail/${id}`} data-testid="card-test">
      <div
        style={{
          padding: ".5em 1em",
          borderBottom: "1px solid gray",
        }}
      >
        <h2>
          {id}. {firstName} {lastName}
        </h2>
        <p>{email}</p>
      </div>
    </Link>
  );
};

export default InfromationCard;
