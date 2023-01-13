import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { quizId, topicId, name, cardIds } = action.payload;
      state.quizzes[quizId] = {
        id: quizId,
        topicId: topicId,
        name: name,
        cardIds: cardIds
      };
    }
  }
});

export const addQuizForTopicId = (quiz) => {
  const { topicId, quizId } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizIdForTopic({ topicId: topicId, quizId: quizId }));
  };
};

export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
