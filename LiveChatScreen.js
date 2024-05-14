import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const LiveChatScreen = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [assistantMessage, setAssistantMessage] = useState('');

    const startChat = () => {
        // Add functionality to start the chat here
        // For example, you can navigate to another screen or perform any other action
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Emergency Help Chat</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.subjectLabel}>Subject:</Text>
            </View>
            {/* Display TextInput for "Emergency Help" */}
            <TextInput
                style={styles.input}
                placeholder="Emergency Help"
                placeholderTextColor="plum"
                value={message}
                onChangeText={setMessage}
                autoCapitalize="none"
                backgroundColor="white"
            />
            {/* Display TextInput for assistant message */}
            <TextInput
                style={[styles.input, styles.assistantInput]}
                placeholder="Assalam-o-Alikum, how may I help you?"
                placeholderTextColor="plum"
                value={assistantMessage}
                onChangeText={setAssistantMessage}
                autoCapitalize="none"
                backgroundColor="white"
                textAlignVertical="top"
            />
            {/* Start Chat button */}
            <TouchableOpacity style={styles.startChatButton} onPress={startChat}>
                <Text style={styles.startChatButtonText}>START CHAT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        backgroundColor: 'pink',
        color: '#FFFFFF',
        borderColor: 'pink',
        borderWidth: 1,
        padding: 10,
        width: '100%', 
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subjectLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#800080',
        marginRight: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'pink',
        borderRadius: 5,
        padding: 10,
        color: '#800080',
        marginBottom: 10,
        width: '100%', 
    },
    assistantInput: {
        height: 200, 
    },
    startChatButton: {
        backgroundColor: 'pink',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 5, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    startChatButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default LiveChatScreen;
