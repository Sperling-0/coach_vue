import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Coach A',
          lastName: 'B',
          areas: ['frontend'],
          description:
            "frontend",
          hourlyRate: 30
        },
        {
          id: 'c1',
          firstName: 'Coach C',
          lastName: 'D',
          areas: ['backend'],
          description:
              "backend",
          hourlyRate: 25
        },
        {
          id: 'c1',
          firstName: 'Coach E',
          lastName: 'F',
          areas: ['career'],
          description:
              "career",
          hourlyRate: 20
        },
        {
          id: 'c1',
          firstName: 'Coach G',
          lastName: 'H',
          areas: ['frontend', 'backend'],
          description:
              "frontend and backend",
          hourlyRate: 30
        },
        {
          id: 'c1',
          firstName: 'Coach I',
          lastName: 'J',
          areas: ['frontend', 'backend', 'career'],
          description:
              "frontend, backend, career",
          hourlyRate: 30
        },
      ]
    };
  },
  mutations,
  actions,
  getters
};
