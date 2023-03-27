import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export const TaskItem = ({text}) => {
    return (
        <View style={styles.taskItem}>
            <Text style={styles.taskText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'raw',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 8,
        marginBottom: 5,
        backgroundColor: 'yelow',
    },
    taskText: {
        color: 'white',
    }
});