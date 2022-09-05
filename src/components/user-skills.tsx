import React from 'react';
import { Card, VStack } from './presentation';

function UserSkills({ skills }: { skills: Array<string>; }) {
  return (
    <Card>
      <VStack>
        <h2 className='text-2xl'>Key skills</h2>
        <ul className='list-disc pl-4' >
          {skills.map(skill => <li key={skill} >{skill}</li>)}
        </ul>
      </VStack>
    </Card>
  );
}

export default UserSkills;