import { Task } from "@/types"
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from "react-native"

interface TaskItemProps{
    tasks: Task
}

export function TaskItem({tasks}: TaskItemProps){
    return(
        <View style = {styles.taskCard}>
            <TextInput
                placeholder="Item da Tarefa"
                value={tasks.text}
                style = {styles.editInput}
            />
            <View style = {styles.actionContainer}>
                <TouchableOpacity style = {styles.saveButton}>
                    <Text style = {styles.buttonText}>V</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.deleteButton}>
                    <Text style = {styles.buttonText}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskCard:{
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#e0e0e0"
    },
    tasKText:{
        fontSize: 16,
        color: "#333",
        flex: 1,
        marginRight: 10
    },
    editInput:{
        flex: 1,
        fontSize: 16,
        color: "#333",
        borderBottomWidth: 1,
        borderBottomColor: "#007bff",
        padding: 0,
        marginRight: 10,
    },
    actionContainer:{
        flexDirection: "row",
    },
    actionButton:{
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 8,
    },
    editButton:{
        backgroundColor: "#ff9500",
    },
    saveButton:{
        backgroundColor: "#34c759",
    },
        deleteButton:{
            backgroundColor: "#ff3b30",
        },
        buttonText:{
            color:"#fff",
            fontWeight: "bold"
        }
})