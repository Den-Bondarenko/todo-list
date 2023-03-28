import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Button} from 'react-native';
import { TaskInput } from './components/TaskInput';
import { TaskItem } from './components/TaskItem';



export default function App() {

  const [tasks, setTasks] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddTaskHendler = () => {
    setModalIsVisible(true);
  };

  const endAddTaskHendler = () => {
    setModalIsVisible(false);
  };

  const addTaskHendler = (enteredTaskText) => {
    setTasks((currentTasks) => [...currentTasks, {text: enteredTaskText, id: Math.random().toString()}]);
  };

  function deleteTaskHendler(id) {
    setTasks(currentTasks => {
      return currentTasks.filter((task) => task.id !== id);
    });
  };

  console.log(tasks);

  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <Button 
          title='Add new Task' 
          color='#a13de3'
          onPress={startAddTaskHendler}
        />
        {modalIsVisible && <TaskInput 
          onAddTask={addTaskHendler}
          visible={modalIsVisible}
          onCancel={endAddTaskHendler}
        />}
        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={(itemData) =>(<TaskItem text={itemData.item.text} id={itemData.item.id} onDelete = { deleteTaskHendler }/>)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    paddingTop: 10,
    flex: 8
  }
});
