import AsyncStorage from '@react-native-async-storage/async-storage';
const setItem = (keyName, item) => {
    AsyncStorage.setItem(keyName, item)
}

const getItem = async (keyName) => {
    const str =  await AsyncStorage.getItem(keyName)
    return str
}

const removeItem = async (keyName) => {
    const str =  await AsyncStorage.removeItem(keyName)
    return str
}

const storage = {
    setItem,
    getItem,
    removeItem
};

export default storage;
