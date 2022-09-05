import React, { useEffect, useMemo, useState } from 'react';
import { useMachine } from '@xstate/react';

import { loadingStatusMachine } from '../state-machines/loadingStatus';

import { getUsers } from '../http';

import UserListItem from '../components/user-list-item';
import { Container, Heading } from '../components/presentation';
import Spinner from '../components/spinner';

import { User } from '../interfaces';

function UserList() {
  const [loadingState, sendLoadingState] = useMachine(loadingStatusMachine);

  const [users, setUsers] = useState<User[]>();
  const [filter, setFilter] = useState('');
  useEffect(() => {

    if (loadingState.matches('success') || loadingState.matches('error')) {
      return;
    }

    sendLoadingState('TRIGGER');
    getUsers()
      .then(resp => {
        setUsers(resp);
        sendLoadingState('RESOLVE');
      }).catch(() =>
        sendLoadingState('REJECT'));
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
      {loadingState.matches('fetching') ? <Spinner></Spinner> :
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