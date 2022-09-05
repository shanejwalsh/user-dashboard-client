import React, { useEffect, useMemo, useState } from 'react';
import { getUsers } from '../http';

import { User } from '../interfaces';
import UserListItem from '../components/user-list-item';
import { Container, Heading } from '../components/presentation';
import Spinner from '../components/spinner';


function UserList() {
  const [users, setUsers] = useState<User[]>();
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    getUsers()
      .then(resp => {
        setUsers(resp);
        setIsLoadingUsers(false);
      });
  }, []);


  const filteredUsers = useMemo(() =>
    !filter ? users : users?.filter(({ fullName, company }) =>
      fullName.includes(filter) || company.name.includes(filter)),
    [users, filter]);


  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value);
  }

  return (
    <Container>
      <></>
      {isLoadingUsers ? <Spinner></Spinner> :
        <>
          <div className='mb-4'>
            <Heading>User dashboard</Heading>
          </div>
          <div className='flex mb-4'>
            <div className='flex flex-col'>
              <label className='text-gray-500 mb-1'>Search users</label>
              <input onChange={handleChange} className='p-2' placeholder='eg John Smith...'></input>
            </div>

          </div>
          <section className='flex gap-4 flex-wrap '>
            {filteredUsers?.map(user => (
              <UserListItem key={user.id} user={user} />
            ))}
          </section>
        </>
      }
    </Container>

  );

}

export default UserList;;