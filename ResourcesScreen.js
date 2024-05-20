import React from 'react';
import { View, Text, StyleSheet, SectionList, Dimensions } from 'react-native';
import { useTheme } from '../ThemeContext';

const { width } = Dimensions.get('window');

const ResourcesScreen = ({ navigation }) => {
  const { darkMode } = useTheme();

  const resourcesData = [
    {
      city: 'Lahore',
      data: [
        { type: 'Lawyers', data: [{ name: 'Rafique Aslam', number: '123-456-7890' }, { name: 'Waqas Ali', number: '987-654-3210' }] },
        { type: 'Therapists', data: [{ name: 'Saba Tahir', number: '456-789-0123' }, { name: 'Imran Saleem', number: '321-654-0987' }] },
        { type: 'Psychiatrists', data: [{ name: 'Abdul Mateen', number: '789-012-3456' }, { name: 'Waseem Akram', number: '654-321-9870' }] },
        { type: 'Women Empowerment NGOs', data: [{ name: 'EmpowerWomen Lahore', number: '012-345-6789' }, { name: 'WomenSupport Lahore', number: '789-012-3456' }] }
      ]
    },
    {
      city: 'Islamabad',
      data: [
        { type: 'Lawyers', data: [{ name: 'Ali Khan', number: '234-567-8901' }, { name: 'Sana Ahmed', number: '876-543-2109' }] },
        { type: 'Therapists', data: [{ name: 'Ahmed Raza', number: '567-890-1234' }, { name: 'Fatima Zia', number: '210-987-6543' }] },
        { type: 'Psychiatrists', data: [{ name: 'Amna Khan', number: '890-123-4567' }, { name: 'Hassan Ali', number: '543-210-9876' }] },
        { type: 'Women Empowerment NGOs', data: [{ name: 'EmpowerWomen Islamabad', number: '123-456-7890' }, { name: 'WomenSupport Islamabad', number: '456-789-0123' }] }
      ]
    },
    {
      city: 'Faisalabad',
      data: [
        { type: 'Lawyers', data: [{ name: 'Kamran Ali', number: '345-678-9012' }, { name: 'Ayesha Khan', number: '098-765-4321' }] },
        { type: 'Therapists', data: [{ name: 'Saima Ahmed', number: '678-901-2345' }, { name: 'Bilal Ahmed', number: '321-098-7654' }] },
        { type: 'Psychiatrists', data: [{ name: 'Nida Khan', number: '901-234-5678' }, { name: 'Usman Ali', number: '654-321-0987' }] },
        { type: 'Women Empowerment NGOs', data: [{ name: 'EmpowerWomen Faisalabad', number: '234-567-8901' }, { name: 'WomenSupport Faisalabad', number: '567-890-1234' }] }
      ]
    },
    {
      city: 'Multan',
      data: [
        { type: 'Lawyers', data: [{ name: 'Khalid Mehmood', number: '456-789-0123' }, { name: 'Saba Khalid', number: '210-987-6543' }] },
        { type: 'Therapists', data: [{ name: 'Rizwan Ahmed', number: '789-012-3456' }, { name: 'Aisha Rizvi', number: '543-210-9876' }] },
        { type: 'Psychiatrists', data: [{ name: 'Fahad Malik', number: '012-345-6789' }, { name: 'Asma Bibi', number: '876-543-2109' }] },
        { type: 'Women Empowerment NGOs', data: [{ name: 'EmpowerWomen Multan', number: '345-678-9012' }, { name: 'WomenSupport Multan', number: '678-901-2345' }] }
      ]
    },
    {
      city: 'Gujrat',
      data: [
        { type: 'Lawyers', data: [{ name: 'Zain Malik', number: '567-890-1234' }, { name: 'Maria Khan', number: '321-098-7654' }] },
        { type: 'Therapists', data: [{ name: 'Sadia Ali', number: '890-123-4567' }, { name: 'Imran Abbas', number: '654-321-0987' }] },
        { type: 'Psychiatrists', data: [{ name: 'Fiza Khan', number: '123-456-7890' }, { name: 'Ahmed Ali', number: '987-654-3210' }] },
        { type: 'Women Empowerment NGOs', data: [{ name: 'EmpowerWomen Gujrat', number: '456-789-0123' }, { name: 'WomenSupport Gujrat', number: '789-012-3456' }] }
      ]
    },
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.resourceItem, { backgroundColor: darkMode ? '#333333' : '#FFFFFF' }]}>
      <Text style={[styles.resourceItemText, { color: darkMode ? '#FFFFFF' : '#800080' }]}>{item.name}</Text>
      <Text style={[styles.resourceItemText, { color: darkMode ? '#FFFFFF' : '#800080' }]}>{item.number}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { city } }) => (
    <View style={[styles.sectionHeader, { backgroundColor: darkMode ? '#800080' : '#800080' }]}>
      <Text style={[styles.city, { color: darkMode ? '#FFFFFF' : '#FFFFFF' }]}>{city}</Text>
    </View>
  );

  const renderResourceType = ({ item }) => (
    <View>
      <Text style={[styles.resourceType, { backgroundColor: darkMode ? '#FF80AB' : '#ffb6c1', color: darkMode ? '#FFFFFF' : '#FFFFFF' }]}>{item.type}</Text>
      {item.data.map((resource, index) => (
        <View key={index} style={[styles.resourceItem, { backgroundColor: darkMode ? '#333333' : '#FFFFFF' }]}>
          <Text style={[styles.resourceItemText, { color: darkMode ? '#FFFFFF' : '#800080' }]}>{resource.name}</Text>
          <Text style={[styles.resourceItemText, { color: darkMode ? '#FFFFFF' : '#800080' }]}>{resource.number}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#FFFFFF' }]}>
      <View style={[styles.titleBar, { backgroundColor: darkMode ? 'pink' : 'pink' }]}>
        <Text style={[styles.title, { color: darkMode ? '#FFFFFF' : '#FFFFFF' }]}>Resource List</Text>
      </View>
      <SectionList
        sections={resourcesData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => renderResourceType({ item })}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  titleBar: {
    width: '106%',
    alignItems: 'center',
    paddingVertical: 10,
    marginLeft: -10,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  sectionHeader: {
    marginBottom: 10,
  },
  city: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  resourceType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  resourceItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    borderBottomWidth: 1, 
    borderBottomColor: 'lightgray',
  },
  resourceItemText: {
    color: '#800080',
  },
});

export default ResourcesScreen;