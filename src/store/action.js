export const ActionType = {
  TOGGLE_FORM: `TOGGLE_FORM`,
};

export const toggleForm = (updatingIssue) => ({
  type: ActionType.TOGGLE_FORM,
  payload: updatingIssue,
});
