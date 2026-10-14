import { Task } from '../types';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TASK_KEY = '@task_key';

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const loadTasks = async () => {
            try{
                const savedTasks = await AsyncStorage.getItem(TASK_KEY);
                if (savedTasks) {
                    setTasks(JSON.parse(savedTasks));
                }
            } catch (error) {
                console.error('Erro ao carregar tarefas do AsyncStorage:', error);
            } finally{
                setIsInitialLoad(false);
            }
        }
        loadTasks();
    }, []);

    useEffect(() => {
        if (!isInitialLoad) {
            const saveTasks = async () => {
                try {
                    await AsyncStorage.setItem(TASK_KEY, JSON.stringify(tasks));
                } catch (error) {
                    console.error('Erro ao salvar tarefas no AsyncStorage:', error);
                }
            };
            saveTasks();
        }
    }, [tasks, isInitialLoad]);

    const addTasks = (text : string) => {
        if (text.trim() === '') return;
        const newTask : Task = {
            id: Date.now().toString(),
            text
        };

        setTasks(prevTasks => [...prevTasks, newTask]);
    }
    
    return{
        addTasks,
        tasks
    }
}