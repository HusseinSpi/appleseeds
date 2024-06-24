import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export const userData = async (): Promise<User[] | null> => {
  const url = "https://6675c254a8d2b4d072f15d62.mockapi.io/users";

  try {
    const response = await axios.get(url);
    const data: User[] = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getUser = async (email: string): Promise<User | boolean> => {
  try {
    const users = await userData();
    if (users) {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email) {
          return user;
        }
      }
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export const AddUser = async (
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  password: string,
  money: number = 0,
  credit: number = 5000,
  isAdmin: boolean = false
): Promise<void> => {
  try {
    const usersResponse = await axios.get(
      "https://6675c254a8d2b4d072f15d62.mockapi.io/users"
    );
    const users: User[] = usersResponse.data;
    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      toast.error("Email already exists");
      return;
    }
    const response = await axios.post(
      "https://6675c254a8d2b4d072f15d62.mockapi.io/users",
      {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        money,
        credit,
        isAdmin,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201) {
      toast.success("User added successfully");
    } else {
      toast.error("Couldn't add user");
    }
  } catch (error) {
    toast.error("Couldn't add user");
  }
};

export const Login = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const users = await userData();
    if (users) {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email && user.password === password) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("email", email);
          toast.success("Logged in successfully");
          if (user.isAdmin) {
            localStorage.setItem("isAdmin", "true");
          }
          return true;
        }
      }
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export const DeleteUser = async (email: string): Promise<boolean> => {
  try {
    const users = await userData();
    if (users) {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email) {
          const response = await axios.delete(
            `https://6675c254a8d2b4d072f15d62.mockapi.io/users/${user.id}`,
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
  return false;
};
