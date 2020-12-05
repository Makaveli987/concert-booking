import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBMedia, MDBIcon } from "mdbreact";
import { getQuestionsList } from "../../containers/App/selectors";
import { getQuestions } from "../../containers/App/reducer";

const QuestionsTab = () => {
  const dispatch = useDispatch();
  const Selector = {
    questions: useSelector(getQuestionsList),
  };

  const Action = {
    getQuestions: (payload) => dispatch(getQuestions(payload)),
  };

  const renderQuestions = () => {
    const questions = Selector.questions.map((question) => {
      return (
        <MDBMedia tag="li" style={{ margin: "20px 0" }}>
          <MDBIcon icon="user-alt" size="2x" style={{ margin: "0 20px" }} />
          <MDBMedia body>
            <MDBMedia heading>{question.name}</MDBMedia>
            <p>{question.question}</p>
          </MDBMedia>
        </MDBMedia>
      );
    });
    return questions;
  };

  useEffect(() => {
    Action.getQuestions();
  }, [Action]);

  return (
    <MDBMedia list className="mt-3">
      {renderQuestions()}
    </MDBMedia>
  );
};

export default QuestionsTab;
