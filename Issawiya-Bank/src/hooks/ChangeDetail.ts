import axios from "axios";
import { userData } from "../api/APIUsers";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  money: number;
  credit: number;
  isAdmin: boolean;
}

export const ChangeDetail = async (
  email: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  newEmail: string,
  password: string,
  money: number,
  credit: number,
  isAdmin: boolean
): Promise<boolean> => {
  try {
    const users: User[] = await userData();
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.email === email) {
        user.firstName = firstName;
        user.lastName = lastName;
        user.phoneNumber = phoneNumber;
        user.email = newEmail;
        user.password = password;
        user.money = money;
        user.credit = credit;
        user.isAdmin = isAdmin;
        const response = await axios.put(
          `https://6675c254a8d2b4d072f15d62.mockapi.io/users/${user.id}`,
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  } catch (error) {
    console.error("Error updating user details:", error);
    return false;
  }
};
