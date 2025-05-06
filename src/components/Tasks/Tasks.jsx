import Task from "../Task/Task";

const Tasks = () => {
  return (
    <>
      <h1 className="font-semibold text-sm text-left mt-4 mb-1 text-white/60 pl-2">
        TASKS
      </h1>
      <Task taskName={"Join our community"} coinsForCompletion={"+100"} buttonText={"Join"} />
    </>
  );
};

export default Tasks;
