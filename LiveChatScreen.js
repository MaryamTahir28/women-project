import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../ThemeContext';

const LiveChatScreen = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [assistantMessage, setAssistantMessage] = useState('');
    const { darkMode } = useTheme();
    const themeStyles = darkMode ? darkTheme : lightTheme;

    const startChat = () => {
        // Add functionality to start the chat here
        // For example, you can navigate to another screen or perform any other action
    };

    return (
        <View style={[styles.container, themeStyles.container]}>
            <Text style={[styles.title, themeStyles.title]}>Emergency Help Chat</Text>
            <View style={styles.inputContainer}>
                <Text style={[styles.subjectLabel, themeStyles.subjectLabel]}>Subject:</Text>
                <TextInput
                    style={[styles.input, themeStyles.input]}
                    placeholder="Emergency Help"
                    placeholderTextColor={darkMode ? '#FFB6C1' : '#800080'}
                    value={message}
                    onChangeText={setMessage}
                    autoCapitalize="none"
                />
            </View>
            <TextInput
                style={[styles.input, styles.assistantInput, themeStyles.input]}
                placeholder="Assalam-o-Alikum, how may I help you?"
                placeholderTextColor={darkMode ? '#8F6868' : 'plum'}
                value={assistantMessage}
                onChangeText={setAssistantMessage}
                autoCapitalize="none"
                textAlignVertical="top"
            />
            <TouchableOpacity style={[styles.startChatButton, themeStyles.startChatButton]} onPress={startChat}>
                <Text style={[styles.startChatButtonText, themeStyles.startChatButtonText]}>START CHAT</Text>
            </TouchableOpacity>
        </View>
    );
};

const lightTheme = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    title: {
        backgroundColor: 'pink',
        color: '#FFFFFF',
    },
    subjectLabel: {
        color: '#800080',
    },
    input: {
        backgroundColor: '#FFF9FA',
        color: '#800080',
        borderColor: 'pink',
    },
    startChatButton: {
        backgroundColor: 'pink',
    },
    startChatButtonText: {
        color: 'white',
    },
});

const darkTheme = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
    },
    title: {
        backgroundColor: '#800080',
        color: '#FFFFFF',
    },
    subjectLabel: {
        color: '#FFB6C1',
    },
    input: {
        backgroundColor: '#1f1f1f',
        color: '#D3D3D3',
        borderColor: 'pink',
    },
    startChatButton: {
        backgroundColor: '#800080',
    },
    startChatButtonText: {
        color: '#FFFFFF',
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        borderColor: 'pink',
        borderWidth: 1,
        padding: 10,
        width: '100%',
        textAlign: 'center',
        fontFamily: 'serif',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
    },
    subjectLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: '100%',
    },
    assistantInput: {
        height: 200,
    },
    startChatButton: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    startChatButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default LiveChatScreen;
