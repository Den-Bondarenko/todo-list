import { StyleSheet } from "react-native";
import { View, TextInput, Button } from "react-native";
import { useState } from "react";

export const TaskInput = ({onAddTask}) => {

    const [enteredTaskText, setEnteredTaskText] = useState('');

    const taskInputHendler = (text) => {
        setEnteredTaskText(text);
    };

    console.log(enteredTaskText);

    const addTaskHandler = () => {
        onAddTask(enteredTaskText);
        setEnteredTaskText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="What do you need to do?"
                onChangeText={taskInputHendler}
                value={enteredTaskText}
            />
            <Button 
                title="Add task"
                onPress={addTaskHandler}
            />
        </View>
    )
};

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        paddingBottom: 10
    },

    textInput: {
        width: '70%',
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 4,
    }
});