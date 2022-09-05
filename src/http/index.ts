import axios from 'axios'
import { User, UserResponse  } from '../interfaces';

axios.defaults.baseURL = 'http://localhost:8000';

async function get<T>(endpoint: string) {
  try {

    const { data,  } = await axios.get<T>(
      endpoint,
    );

    return data;

   } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
    } else {
      console.log('unexpected error: ', error);
    }

    throw new Error('something went wrong')


  }
}

function getUserFromResponsePayload(user: UserResponse): User {

   const {first_name, last_name, avatar, ...rest} = user

   return {
      avatar,
      firstName: first_name,
      lastName: last_name,
      fullName: `${first_name} ${last_name}`,
      ...rest
   }
}

export async function getUsers(): Promise<Array<User>> {
   const userResponse = await get<Array<UserResponse>>('/users')
   return userResponse.map(getUserFromResponsePayload)
}

export async function getUser(userId: string): Promise<User> {


   const user = await get<UserResponse>(`/users/${userId}`)
   return getUserFromResponsePayload(user)
}
