import Realm from 'realm';

const TaskSchema = {
  name: "Task",
  properties: {
    _id: "int",
    name: "string",
    status: "string?",
  },
  primaryKey: "_id",
};

(async () => {
  const realm = await Realm.open({
    path: "myrealm",
    schema: [TaskSchema],
  });

  // ### write to DB
  // let task1, task2;
  // realm.write(() => {
  //   task1 = realm.create("Task", {
  //     _id: 1,
  //     name: "My first task",
  //     dateCreated: Date.now(),
  //     status: "Open"
  //   })
  //   task1 = realm.create("Task", {
  //     _id: 2,
  //     name: "My Last task",
  //     dateCreated: Date.now(),
  //     status: "Closed"
  //   })
  // })
  // console.log(`created two tasks: ${task1.name} & ${task2.name}`);

  // ### read from DB
  // const tasks = realm.objects("Task")
  // console.log("All tasks", tasks)
  // const task = realm.objectForPrimaryKey("Task", 1)
  // console.log("one task", task.name)
})()

const App = () => {
  return null;
};

export default App;
