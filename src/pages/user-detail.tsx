import { useMachine } from '@xstate/react';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import PersonalInfo from '../components/personal-info';
import { Container, ResponsiveStack, VStack } from '../components/presentation';
import SadView from '../components/sad-view';

import Spinner from '../components/spinner';
import UserDetailHeading from '../components/user-header-card';
import UserSkills from '../components/user-skills';
import { getUser } from '../http';
import { User } from '../interfaces';


import { loadingStatusMachine } from '../state-machines/loadingStatus';

function UserDetail() {
  const [loadingState, sendLoadingAction] = useMachine(loadingStatusMachine);

  const { userId } = useParams<{ userId: string; }>();

  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    if (userId) {

      sendLoadingAction('TRIGGER');
      getUser(userId)
        .then(user => {
          setUser(user);
          sendLoadingAction('RESOLVE');
        })
        .catch(e => {
          sendLoadingAction('REJECT');
        });

    }
  }, [userId]);

  return (
    <Container>
      {loadingState.matches('fetching') ? <Spinner /> : loadingState.matches('success') && user ? (

        <VStack>
          <UserDetailHeading user={user}></UserDetailHeading>
          <ResponsiveStack>
            <PersonalInfo email={user.email} dob={user.dob} isVerified={user.emailVerified} />
            <UserSkills skills={user.skills}></UserSkills>
          </ResponsiveStack>
        </VStack>
      ) :
        (<SadView />)}
    </Container >
  );
}






export default UserDetail;
