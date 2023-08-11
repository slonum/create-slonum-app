import { createSlice } from '@reduxjs/toolkit';

import * as I from './interfaces';
import * as A from './actions';

const initialState: I.ICompetitionState = {
  currentCompetition: {
    id: 1,
    isFinished: false,
    title: 'Конкурс',
    price: 149,
    priceWithRepost: 299,
    description: 'Конкурс для детей',
    currentTime: new Date().toDateString(),
    postLinks: {
      ok: '',
      vk: '',
    },
  },
};

export const competitionSlice = createSlice({
  name: 'competition',
  initialState,
  reducers: {
    setCompetition(state, action: I.ISetCompetitionAction) {
      state.currentCompetition = action.payload;
    },
    setParticipant(state, action: I.ISetParticipantAction) {
      state.participantInfo = action.payload;
    },
    clearParticipant(state) {
      delete state.participantInfo;
    },
    addParticipant(state, action: I.IAddParticipantAction) {
      const { id, data } = action.payload;
      state.participants[id] = data;
    },
    clearParticipants(state) {
      const part = localStorage.getItem('persist:competition');
      if (part) {
        const competition = JSON.parse(part);
        competition.participants = '{}';
        localStorage.setItem(
          'persist:competition',
          JSON.stringify(competition),
        );
      }
      state.participants = {};
    },
    clear: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(A.getCompetition.fulfilled, (state, action) => {
      state.currentCompetition = action.payload;
    });
    builder.addCase(A.getParticipantInfo.fulfilled, (state, action) => {
      state.participantInfo = action.payload as any;
    });
    builder.addCase(A.getParticipantInfoAll.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(A.addParticipant.fulfilled, (state, action) => {
      state.participantInfo = action.payload as any;
    });
    builder.addCase(A.getParticipantInfo.rejected, (state, action) => {
      state.participantInfo = undefined;
    });
  },
});
export const actions = { ...competitionSlice.actions, ...A };
export const competitionActions = actions;
