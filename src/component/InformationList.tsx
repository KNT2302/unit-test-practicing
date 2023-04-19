import { Information, InformationRecord } from "@/utils/model";
import React from "react";
import InfromationCard from "./InfromationCard";

interface InformationListP {
  informations: InformationRecord[];
}
const InformationList = ({ informations }: InformationListP) => {
  return (
    <div>
      {!informations.length && <div>Empty list</div>}
      {informations.map((information) => {
        const { id, firstName, lastName, email } = information;
        return (
          <InfromationCard
            key={id}
            id={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
        );
      })}
    </div>
  );
};

export default InformationList;
