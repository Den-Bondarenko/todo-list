import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export const TaskItem = (props) => {
    return (
        <View style={styles.taskItem}>
            <Text style={styles.taskText}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    taskItem: {
        padding: 8,
        marginBottom: 5,
        backgroundColor: '#4287f5',
        borderRadius: 5
    },
    taskText: {
        color: 'white',
    }
});