import { StyleSheet, Text, View, TextInput, Linking, Head } from 'react-native';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Button } from 'react-native-elements';


const Info = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(['Data Structures andAlgorithms', 'Computer Systems Engineering', 'Compiler Construction', 'Operating Systems', 'Intro to Computer Networks',
   'Database System Design', 'Big Data Analytics', 'Advanced Digital Design']);
  const [courses2, setCourses2] = useState(['Signals and Systems', 'Robotic Applications & Design', 'Statistics for Engineers', 'Discrete Structures', 'Elem Differential Equations', 'Vector Calculus',
   'Algorithmic Design', 'Intro Electrical Engr Lab', 'UNIX/Linux Fundamentals', 'Digital Logic Design', 'Electrical Science', 'Circuits', 'Intro to Computer Architecture', 'Advanced Programming Tech', 'Essentials of Physics',
    'Applied Linear Algebra', 'Technical Writing', 'Computing in the Modern World']);
  const [skill, setskill] = useState(['Git' , 'MARS' , 'Linux' , 'Azure' , 'Jupyter' ,'Quartus',
    'Verilog' , 'Matlab' , 'HTML' , 'Docker' , 'R', 'OBS', 'VHDL']);
  const [Honor, setsHonor] = useState(['Tau Beta Pi member' , 'National Robot Competition Prize for Excellence' , 'National Creativity Competition Prize of Gold',
   'USC CEC Department Schoolship' , 'President’s Honor List']);
  const [project, setsproject] = useState(['Library system app' , 'Data key-in form in Excel' , 'Online shop made by Wix',
   'Machine learning & deep learning research lab']);

  return (
    <View style={styles.container}>
     
      <View style={styles.left}>
      <View style={styles.back}>
        <Button
          onPress={() => navigate(-1)}
          icon={{ name: 'arrow-left', type: 'font-awesome' }}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Major Courses:</Text>
        {courses.map((course) => (
          <Text style={styles.course}>{course}</Text> 
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other related Courses:</Text>
        {courses2.map((course) => (
          <Text style={styles.course}>{course}</Text>
        ))}
      </View>
      </View>
      <View style={styles.right}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skill Set:</Text>
        {skill.map((course) => (
          <Text style={styles.course}>{course}</Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Honor</Text>
        {Honor.map((course) => (
          <Text style={styles.course}>{course}</Text> 
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other Projects</Text>
        {project.map((course) => (
          <Text style={styles.course}>{course}</Text> 
        ))}
      </View>
      </View>
    </View>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4F9D9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
  back: {
    position: 'absolute',
    top: 50,
    left: 100,
  },
  section: {
    marginTop: 120,
    marginLeft: 20,
    alignSelf: 'flex-start',
    left: 100,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    lineHeight: 30,
  },
  course: {
    fontSize: 24,
    marginBottom: 5,
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    lineHeight: 24, 
  },
  middleSection: {
    justifyContent: 'center',
  },
});

export default Info;
