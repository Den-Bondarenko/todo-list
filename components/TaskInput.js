import { StyleSheet } from "react-native";
import { View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

export const TaskInput = (props) => {

    const [enteredTaskText, setEnteredTaskText] = useState('');

    const taskInputHendler = (text) => {
        setEnteredTaskText(text);
    };

    console.log(enteredTaskText);

    const addTaskHandler = () => {
        props.onAddTask(enteredTaskText);
        setEnteredTaskText('');
        props.onCancel();
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/img/epep.png')}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="What do you need to do?"
                    onChangeText={taskInputHendler}
                    value={enteredTaskText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title="Add task"
                            onPress={addTaskHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title="Cancel"
                            onPress={props.onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal> 
    )
};

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 4,
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingTop: 10
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width:100,
        height: 100,
        margin: 20
    }
});