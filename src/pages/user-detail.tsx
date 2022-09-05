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

function UserDetail() {
  const { userId } = useParams<{ userId: string; }>();

  const [user, setUser] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    if (userId) {
      getUser(userId)
        .then(user => setUser(user))
        .catch(e => setIsError(true))
        .finally(() => setIsLoading(false));
    }
  }, [userId]);

  return (
    <Container>
      {isLoading ? <Spinner /> : !isError && user ? (

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
