import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  FlatList,
  Text,  
  StyleSheet, 
  TextInput, 
  Platform,
  Keyboard
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface Skill {
  id: string;
  name: string;
}

export function Home() {
  const [ newSkill, setNewSkill ] = useState('');
  const [ skills, setSkills ] = useState<Skill[]>([]);
  const [ gretting, setGretting ] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setSkills([...skills, data]);
    setNewSkill('');
    Keyboard.dismiss()
  }

  function handleRemoveSkill(id: string) {
    setSkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours(
      
    );
      if (currentHour < 12) {
        setGretting('Good morning');
      }
      else if (currentHour >= 12 && currentHour < 18) {
        setGretting('Good aftermoon');
      }
      else {
        setGretting('Good night');
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color:'#fff' }}>
        {gretting}
      </Text>
      <Text style={styles.text}>
        Welcome, Dev
      </Text>
      <TextInput 
        placeholder='New skill' 
        placeholderTextColor="#555" 
        style={styles.input}
        onChangeText={setNewSkill}
        value={newSkill}
      />
      <Button text="Add" onPress={handleAddNewSkill} />
      <Text style={[styles.text, {marginVertical: 50}]}>
        My Skills
      </Text>
      <FlatList 
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  text: { 
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff'
   },
   input: {
     backgroundColor: '#1f1e25',
     color: '#fff',
     fontSize: 18,
     padding: Platform.OS === 'ios' ? 15 : 10,
     marginTop: 30,
     borderRadius: 10
   }
})