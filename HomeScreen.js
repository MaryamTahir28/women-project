import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Welcome to Women's Safety App</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.circleButton, { backgroundColor: 'white', borderColor: '#800080' }]}
          onPress={() => navigation.navigate('SafetyTips')}>
          <Text style={styles.buttonText}>Safety Tips</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.circleButton, { backgroundColor: 'white', borderColor: '#800080' }]}
          onPress={() => navigation.navigate('LiveChat')}>
          <Text style={styles.buttonText}>Live Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.circleButton, { backgroundColor: 'white', borderColor: '#800080' }]}
          onPress={() => navigation.navigate('Resources')}>
          <Text style={styles.buttonText}>Resources</Text>
        </TouchableOpacity>
      </View>

      {/* Smart Location Sharing Button */}
      <TouchableOpacity style={styles.inputContainer} onPress={() => {}}>
        <Image
          source={{ uri: 'https://banner2.cleanpng.com/20180423/igw/kisspng-park-merlo-weston-location-citizens-telephone-corp-local-5ade0004ebd0a9.1830609215244984369659.jpg' }}
          style={styles.inputIcon}
        />
        <Text style={styles.inputText}>Smart Location Sharing</Text>
        <Text style={styles.arrowText}>{">"}</Text>
      </TouchableOpacity>

      {/* GPS Tracking Button */}
      <TouchableOpacity style={styles.inputContainer} onPress={() => {}}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4662/4662384.png' }}
          style={styles.inputIcon}
        />
        <Text style={styles.inputText}>GPS Tracking</Text>
        <Text style={styles.arrowText}>{">"}</Text>
      </TouchableOpacity>
      
      {/* Safe Routes Button */}
      <TouchableOpacity style={styles.inputContainer} onPress={() => {}}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77KEId5m16cVnNA2pzKmipy7VgFSUBk4QP0iKB2KX4A&s' }}
          style={styles.inputIcon}
        />
        <Text style={styles.inputText}>Safe Routes</Text>
        <Text style={styles.arrowText}>{">"}</Text>
      </TouchableOpacity>
      
      {/* Call Buttons */}
      <View style={styles.callButtonRow}>
        <TouchableOpacity style={styles.callButton} onPress={() => {/* Trigger call to 1124 */}}>
          <View style={styles.innerBorder}>
            <Icon name="phone" size={20} color="#800080" style={styles.iconStyle} />
            <View style={styles.textContainer}>
              <Text style={styles.callButtonNumber}>1124</Text>
              <Text style={styles.callButtonLabel}>Call Punjab Highway Patrol</Text>
            </View>
          </View>
        </TouchableOpacity>
        

        <TouchableOpacity style={styles.callButton} onPress={() => {/* Trigger call to 1124 */}}>
          <View style={styles.innerBorder}>
            <Icon name="phone" size={20} color="#800080" style={styles.iconStyle} />
            <View style={styles.textContainer}>
              <Text style={styles.callButtonNumber}>1122</Text>
              <Text style={styles.callButtonLabel}>Call Rescue Helpline</Text>
            </View>
          </View>
        </TouchableOpacity>  
      </View>

      <View style={styles.callButtonRow}>
        <TouchableOpacity style={styles.callButton} onPress={() => {/* Trigger call to 1124 */}}>
          <View style={styles.innerBorder}>
            <Icon name="phone" size={20} color="#800080" style={styles.iconStyle} />
            <View style={styles.textContainer}>
              <Text style={styles.callButtonNumber}>130</Text>
              <Text style={styles.callButtonLabel}>Call Motorway Police</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.callButton} onPress={() => {/* Trigger call to 1124 */}}>
          <View style={styles.innerBorder}>
            <Icon name="phone" size={20} color="#800080" style={styles.iconStyle} />
            <View style={styles.textContainer}>
              <Text style={styles.callButtonNumber}>1991</Text>
              <Text style={styles.callButtonLabel}>Call Cyber Crime Helpline</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* FooterBar */}
      <View style={styles.footerBar}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={20} color="#800080" style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Go to Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.alertButton, { backgroundColor: '#DC143C', borderColor: '#DC143C' }]} 
          onPress={() => {}}>
          <Text style={[styles.buttonText, { color: 'white' }]}>Alert</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={20} color="#800080" style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  titleBar: {
    backgroundColor: 'pink',
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  circleButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 6,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#800080',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#800080',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    marginBottom: 20,
    justifyContent: 'space-between', 
  },
  inputIcon: {
    width: 20,
    height: 20,
  },
  inputText: {
    fontSize: 16,
    color: '#800080',
    flex: 1, 
    paddingLeft: 10,
  },
  arrowText: {
    fontSize: 16,
    color: '#800080', 
  },
  callButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '94%',
    marginTop: 10,
    marginBottom: 20,
  },
  callButton: {
    backgroundColor: 'white',
    borderColor: '#800080',
    borderWidth: 2,
    borderRadius: 10,
    padding: 2,
    flexDirection: 'row', 
    alignItems: 'center',  
    justifyContent: 'flex-start', 
    width: '45%',
    margin: 5,
  },
  innerBorder: {
    flex: 1,
    borderColor: '#800080',
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginRight: 10, 
  },
  textContainer: {
    flexDirection: 'column',
    flexShrink: 1, 
  },
  callButtonNumber: {
    fontSize: 20,
    color: '#800080',
    fontWeight: 'bold',
  },
  callButtonLabel: {
    fontSize: 13,
    color: '#800080',
  },
  footerBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'pink',
    justifyContent: 'space-evenly',
  },
  footerButton: {
    padding: 15,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#800080',
    fontSize: 16,
    textAlign: 'center',
  },
  footerIcon: {
    marginBottom: 5,
  },
  alertButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    borderWidth: 6,
    padding: 10,
    position: 'relative', 
    top: -30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.50,
    shadowRadius: 5.65,
    elevation: 8,
  },
});

export default HomeScreen;
