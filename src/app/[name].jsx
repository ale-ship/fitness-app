import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import exercises from '../../assets/data/exercises.json';
import {Stack} from 'expo-router';
import { useState } from 'react';

export default function EcerciseDetailsScreen(){
    const params = useLocalSearchParams();

    const [isInstructionExpand, setIsInstructionExpanded] = useState(false);

    const exercise = exercises.find((item) => item.name == params.name);

    if(!exercise) {
        return <Text>Exercise not found</Text>; 
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{title: exercise.name}}/>

            <View style={styles.panel}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                
                <Text style={styles.exerciseSubtitle}>
                    <Text style={styles.subValue}>{exercise.muscle}</Text> |{' '}
                    <Text style={styles.subValue}>{exercise.equipment}</Text>
                </Text>
            </View>

            <View style={styles.panel}>
                <Text 
                    style={styles.instructions} 
                    numberOfLines={isInstructionExpand ? 0 : 3}
                > 
                    {exercise.instructions} 
                </Text>
                <Text 
                    onPress={() => setIsInstructionExpanded(!isInstructionExpand)}
                    style={styles.seeMore}
                >
                    {isInstructionExpand ? 'See less' : 'See more'}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 10,
    },
    panel: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    exerciseName: {
        fontSize: 20, 
        fontWeight: '500',
    },
    exerciseSubtitle: {
        color: 'dimgray',
    },
    subValue: {
        textTransform: 'capitalize',
    },
    instructions: {
        fontSize: 16,
        lineHeight: 22,
    },
    seeMore: {
        alignSelf: 'center',
        padding: 5,
        fontWeight: '600',
        color: 'grey',
    },
});