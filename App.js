import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TaskInput } from './components/TaskInput';
import { TaskItem } from './components/TaskItem';


export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTaskHendler = (enteredTaskText) => {
    setTasks((currentTask) => [...currentTask, {text: enteredTaskText, key: Math.random().toString()}]);
  };

  console.log(tasks);

  return (
    <View style={styles.appContainer}>
      <TaskInput 
        onAddTask={addTaskHendler}
      />
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={(itemData) => {
            return <TaskItem text={itemData.text}/>
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
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
