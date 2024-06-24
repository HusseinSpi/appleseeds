import axios from "axios";
import { userData } from "../api/APIUsers";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  money: number;
  credit: number;
  isAdmin: boolean;
}

export const InCredit = async (email: string, credit: number) => {
  try {
    const users: User[] | null = await userData();
    if (users) {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email) {
          user.credit += credit * 1;
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
    }
  } catch (error) {
    return false;
  }
};

export const OutCredit = async (email: string, credit: number) => {
  try {
    const users: User[] | null = await userData();
    if (users) {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email) {
          user.credit -= credit;
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
    }
  } catch (error) {
    return false;
  }
};
