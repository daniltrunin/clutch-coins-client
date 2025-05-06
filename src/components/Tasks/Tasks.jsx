import Task from "../Task/Task";

const Tasks = () => {
  return (
    <>
      <h1 className="font-semibold text-sm text-left mt-4 mb-1 text-white/60 pl-2">
        TASKS
      </h1>
      <div className="flex flex-col gap-2">
        <Task
          taskName={"Join our community"}
          coinsForCompletion={"+100"}
          buttonText={"Join"}
        />
        <Task
          taskName={"Comment on last post"}
          coinsForCompletion={"+25"}
          buttonText={"Comment"}
        />
      </div>
    </>
  );
};

export default Tasks;
