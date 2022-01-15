import React from "react";
import { RTKType, TodoTypes } from "../constants/types";

export const Header = ({
  type,
  setType,
  rtkType,
  setRtkType,
}: {
  type: TodoTypes;
  rtkType: RTKType;
  setType: (newType: TodoTypes) => void;
  setRtkType: (newType: RTKType) => void;
}): React.ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <h1>Todo List</h1>
        <label>
          <input
            type="radio"
            checked={type === TodoTypes.DONE}
            onChange={() => {
              setType(TodoTypes.DONE);
            }}
          />
          Finished
        </label>
        <label>
          <input
            type="radio"
            checked={type === TodoTypes.PENDING}
            onChange={() => {
              setType(TodoTypes.PENDING);
            }}
          />
          Pending
        </label>
        <label>
          <input
            type="radio"
            checked={type === TodoTypes.ALL}
            onChange={() => {
              setType(TodoTypes.ALL);
            }}
          />
          All
        </label>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <label>
          <input
            type="radio"
            checked={rtkType === RTKType.REDUX}
            onChange={() => {
              setRtkType(RTKType.REDUX);
            }}
          />
          REDUX
        </label>
        <label>
          <input
            type="radio"
            checked={rtkType === RTKType.QUERY}
            onChange={() => {
              setRtkType(RTKType.QUERY);
            }}
          />
          QUERY
        </label>
      </div>
    </div>
  );
};
