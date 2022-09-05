import React from 'react';

import { User } from '../interfaces';
import Avatar from './avatar';
import { Card, Heading, VStack } from './presentation';



function UserPersonalInfo({ user }: { user: User; }) {

  return (
    <Card>
      <Avatar src={user.avatar} name={user.fullName} size='md' />
      <VStack gap='gap-0'>
        <Heading>{user.fullName}</Heading>
        <p className='text-gray-500'>{user.company.name} - {user.company.department}</p>
      </VStack>
    </Card >

  );
}

export default UserPersonalInfo;