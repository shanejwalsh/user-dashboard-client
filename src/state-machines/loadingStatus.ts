import { createMachine } from 'xstate';


export const loadingStatusMachine = createMachine({
  id: 'loadingStatus',
  initial: 'idle',
  states: {
    idle: {
      on: {
        'TRIGGER': {
          target: 'fetching'
        }
      }
    },
    fetching: {
      on: {
        'RESOLVE': { target: 'success', actions: ['addDataToStore'] },
        'REJECT': { target: 'error' }
      }
    },


    success: {
      type: 'final'
    },
    error: {
      type: 'final'
    },
  },
});