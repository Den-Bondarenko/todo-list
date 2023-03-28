import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
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
    setTasks((currentTask) => [...currentTask, {text: enteredTaskText, key: Math.random().toString()}]);
  };

  console.log(tasks);

  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <Button 
          title='Add new Task' 
          color='#5e0acc'
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
            renderItem={(itemData) => {
              return <TaskItem text={itemData.text} key={itemData.key}/>
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
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
