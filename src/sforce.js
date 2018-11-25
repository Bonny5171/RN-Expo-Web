import { Platform } from 'react-native';
import { AsyncStorage } from "react-native"

const token = 'sfa-token';

const isAutenticate = async () => {
  const result = await _retrieveData(token);
  if (result) {
    return true;
  }
  return false;
}

const _storeData = async (data) => {
  try {
    await AsyncStorage.setItem(token, JSON.stringify(data));
  } catch (error) {
    // Error saving data
  }
}

const _retrieveData = async (tasks) => {
  try {
    const value = await AsyncStorage.getItem(tasks);
    if (value !== null) {
    // We have data!!
    console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
}

const sForce = async (that) => {
  
};

export default RegisterDevice;