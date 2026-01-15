import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Platform, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'mqtt_settings';

const Settings = () => {
    const [broker, setBroker] = useState('broker.hivemq.com');
    const [port, setPort] = useState('1883');
    const [topic, setTopic] = useState('test/topic');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        try {
            const savedSettings = await AsyncStorage.getItem(STORAGE_KEY);
            if (savedSettings !== null) {
                const parsedSettings = JSON.parse(savedSettings);
                setBroker(parsedSettings.broker || '');
                setPort(parsedSettings.port || '');
                setTopic(parsedSettings.topic || '');
                setUsername(parsedSettings.username || '');
                setPassword(parsedSettings.password || '');
            }
        } catch (error) {
            console.error('Failed to load settings', error);
        }
    };

    const handleSave = async () => {
        try {
            const settings = { broker, port, topic, username, password };
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
            Alert.alert('Settings Saved', 'Your MQTT configuration has been saved.');
            console.log(`Settings saved: ${await AsyncStorage.getItem(STORAGE_KEY)}`);
        } catch (error) {
            Alert.alert('Error', 'Failed to save settings.');
            console.error('Failed to save settings', error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 100} // Adjust for header height
            >
                <Text style={styles.header}>MQTT Configuration</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Broker Host</Text>
                    <TextInput
                        style={styles.input}
                        value={broker}
                        onChangeText={setBroker}
                        placeholder="broker.example.com"
                        placeholderTextColor="#666"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Port</Text>
                    <TextInput
                        style={styles.input}
                        value={port}
                        onChangeText={setPort}
                        placeholder="1883"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Topic</Text>
                    <TextInput
                        style={styles.input}
                        value={topic}
                        onChangeText={setTopic}
                        placeholder="my/device/data"
                        placeholderTextColor="#666"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Username (Optional)</Text>
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Enter username"
                        placeholderTextColor="#666"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password (Optional)</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter password"
                        placeholderTextColor="#666"
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save Settings</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30,
        marginTop: 10,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#1c1c1e',
        color: '#fff',
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#333',
    },
    button: {
        backgroundColor: '#0a84ff',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});