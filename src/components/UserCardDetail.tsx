import { BsMailbox2, BsFillPinMapFill } from "react-icons/bs";
import type { CardUserProps } from "../libs/CardUserType";

export const UserCardDetail = ({ email, address }: Pick<CardUserProps, "email" | "address">) => {
  return (
    <div className="text-center">
      <p>
        <BsMailbox2 /> {email}
      </p>
      <p>
        <BsFillPinMapFill /> {address}
      </p>
    </div>
  );
};
