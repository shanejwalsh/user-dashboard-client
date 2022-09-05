import React from 'react';
import dayjs from 'dayjs';

import { Card, VStack } from './presentation';


interface PersonalInfoProps {
  email: string,
  dob: string,
  isVerified: boolean;

}


const STATUS = {
  verified:
    'bg-green-300 text-green-800',
  unverified: 'bg-red-300 text-red-800'

} as const;


function StatusTag({ status }: { status: 'verified' | 'unverified'; }) {



  return <span className={`px-2 py-1 text rounded-full ${STATUS[status]}`}>{status}</span>;
}

function PersonalInfo({ email, dob, isVerified }: PersonalInfoProps) {
  return (

    <Card>
      <div className='flex-1'>
        <VStack>
          <h2 className='text-2xl'>Personal Information</h2>
          <dl>
            <VStack gap='gap-2'>
              <div>
                <dt className='text-gray-500 text-sm'>Date of birth</dt>
                <dd>{dayjs(dob).format('DD/MM/YYYY')}</dd>
              </div>
              <div>
                <dt className='text-gray-500 text-sm'>Email</dt>
                <dd>{email}</dd>
              </div>
              <div>

                <dt className='mb-1 text-gray-500 text-sm'>Email verification status</dt>
                <dd>
                  <StatusTag status={isVerified ? 'verified' : 'unverified'} />
                </dd>
              </div>
            </VStack>
          </dl>
        </VStack>
      </div>
    </Card >
  );
}

export default PersonalInfo;